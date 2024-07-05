import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VisitorContext = createContext();

export const VisitorContextProvider = ({ children }) => {
  const registerUser = async (userdata) => {
    try {
      const res = await fetch("http://localhost:8000/register-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userdata }),
      });
      let result = await res.json();
      if (!result.error) {
        return 1;
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async (userdata) => {
    const res = await fetch("http://localhost:8000/logout-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userdata }),
    });
    let result = await res.json();
    if (!result.error) {
      toast.success("User successfully logged out!");
    } else {
      toast.error(result.error);
    }
  };

  return (
    <VisitorContext.Provider value={{ registerUser, logout }}>
      <ToastContainer autoClose={2000} />
      {children}
    </VisitorContext.Provider>
  );
};

export default VisitorContext;
