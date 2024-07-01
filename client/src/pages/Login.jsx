import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../context/AuthContext";

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const [credentials, setCredentials] = useState({email:"test@gmail.com", password:"something"});

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setCredentials({...credentials,[name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const values = Object.values(credentials);

        //check if all field are present 
        if(values.includes("")){
            toast.error("Please enter all fields");
            return;
        }
        loginUser(credentials);
    }

    return (
    <>
        <ToastContainer autoClose={3000}/>
        <div className="card border-primary mb-3 m-auto" style={{maxWidth: "30rem"}}>
            <h3 className="card-header"><center>Login</center></h3>
            <form className="card-body" onSubmit={handleSubmit}>
                <div id="email">
                    <div className="col-sm-2 col-form-label">Email: </div>
                    <input 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        id="emailInput" 
                        placeholder="jhondoe@example.com"
                        value={credentials.email || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div id="password">
                    <div className="col-sm-2 col-form-label">Password: </div>
                    <input 
                        type="password" 
                        name="password" 
                        className="form-control" 
                        id="passwordInput" 
                        placeholder="Enter password"
                        value={credentials.password || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mt-3">
                    <p>Don't have an account?<Link to="/root/signup">Create One</Link></p>
                </div>
                <div className="d-grid mt-3">
                    <input className="btn btn-lg btn-primary" type="submit" value="Login"/>
                </div>
            </form>
        </div>
    </>
    );
};

export default Login;