import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState("");

    const loginUser = async(userdata) => {
        try {
            const res = await fetch("http://localhost:8000/root/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({...userdata})
            })
            const user = await res.json();
            console.log(user);
        } catch (error) {
            console.log(error)
        }
    }

    return (<AuthContext.Provider value={{loginUser}}>{children}</AuthContext.Provider>)
}

export default AuthContext;