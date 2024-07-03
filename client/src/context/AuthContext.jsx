import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn();
  }, []);

  //check if user is logged in to prevent accidental lose of data when logged in
  const isLoggedIn = async () => {
    try {
      const res = await fetch("http://localhost:8000/root/api", {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const result = await res.json();
      if (!result.error) {
        setUser(result);
      } else {
        console.log(result.error);
      }
    } catch (error) {
      console.log("Unexpected Error: " + error.message);
    }
  };

  //login user
  const loginUser = async (userdata) => {
    try {
      const res = await fetch("http://localhost:8000/root/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userdata }),
      });
      const a = await res.json();
      const errorPresent = a.error;
      const user = a.user;
      const values = Object.values(userdata);

      //check if all field are present
      if (values.includes("")) {
        toast.error("Please enter all fields");
        return;
      } else if (!errorPresent) {
        toast.success("User logged in successfully");
        localStorage.setItem("token", a.token);
        setUser(user);
        navigate("/root", { replace: true });
      } else {
        toast.error(a.error);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //register user
  const signupUser = async (userdata) => {
    try {
      const res = await fetch("http://localhost:8000/root/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userdata }),
      });
      const result = await res.json();
      const values = Object.values(userdata);

      if (values.includes("")) {
        toast.error("Please enter all fields");
        return;
      } else if (values[2].length < 6) {
        toast.error("Password must be atleast 6 characters long");
      } else if (values[2] !== values[3]) {
        toast.error("Password and confirm password don't match");
        return;
      } else if (!result.error) {
        toast.success("User signed up successfully");
        navigate("/root/login", { replace: true });
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ToastContainer autoClose={3000} />
      <AuthContext.Provider value={{ loginUser, signupUser, user, setUser }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthContext;
