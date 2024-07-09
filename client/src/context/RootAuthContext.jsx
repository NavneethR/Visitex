import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const RootAuthContext = createContext();

export const RootAuthContextProvider = ({ children }) => {
  const [root, setRoot] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkLogin();
  });

  //is root logged in
  const checkLogin = async () => {
    try {
      const res = await fetch("http://localhost:8000/authenticate-root", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const result = await res.json();

      if (!result.error) {
        localStorage.setItem("root", true);
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //login-root
  const rootlogin = async (password) => {
    try {
      const res = await fetch("http://localhost:8000/authenticate-root", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...password }),
      });
      const result = await res.json();
      if (!result.error) {
        setRoot(true);
        localStorage.setItem("token", result.token);
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
