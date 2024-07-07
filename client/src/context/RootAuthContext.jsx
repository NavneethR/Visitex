import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const RootAuthContext = createContext();

export const RootAuthContextProvider = ({ children }) => {
  const [root, setRoot] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkLogin();
  }, [root]);

  //is root logged in
  const checkLogin = async () => {
    const res = await fetch("http://localhost:8000/root-password/auth", {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const result = await res.json();
    if (result.error) {
      toast.error(result.error);
    }
  };

  //login-root
  const rootlogin = async (password) => {
    try {
      const res = await fetch("http://localhost:8000/root-password/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });
      const result = await res.json();
      if (!result.error) {
        setRoot(true);
        //localStorage.setItem("token", result.token);
        navigate("/root/login");
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <RootAuthContext.Provider value={{ rootlogin, checkLogin, root }}>
        {children}
      </RootAuthContext.Provider>
    </div>
  );
};

export default RootAuthContext;
