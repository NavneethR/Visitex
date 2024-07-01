import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [credentials,setCredentials] = useState({userName:"",email:"",password:"",confirmPassword:""});

    const handleInputChange = (event)=> {
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

        //check if password and confirm password match
        if(values[2] !== values[3]){
            toast.error("Password and confirm password don't match");
        }
    } 

    return (
    <>
        <ToastContainer autoClose={3000}/>
        <div className="card border-primary mb-3 m-auto" style={{maxWidth: "30rem"}}>
            <h3 className="card-header"><center>Signup</center></h3>
            <form className="card-body" onSubmit={handleSubmit}>
                <div id="name">
                    < div className="col-sm-2 col-form-label">Name: </ div>
                    <input 
                        type="text" 
                        name="userName" 
                        className="form-control" 
                        id="nameInput" 
                        placeholder="Jhon Doe"
                        value={credentials.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div id="email">
                    < div className="col-sm-2 col-form-label">Email: </ div>
                    <input 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        id="emailInput" 
                        placeholder="jhondoe@example.com"
                        value={credentials.email}
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
                        value={credentials.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div id="password">
                    < div className=" col-form-label">Confirm password: </ div>
                    <input 
                        type="password"  
                        name="confirmPassword" 
                        className="form-control" 
                        id="confirmPasswordInput" 
                        placeholder="Re-enter password"
                        value={credentials.confirmPassword}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mt-3">
                    <p>Already Registered? <Link to="/root/login">Login</Link></p>
                </div>
                <div className="d-grid mt-3">
                    <input className="btn btn-lg btn-primary" type="submit" value="Signup"/>
                </div>
            </form>
        </div>
    </>);
};

export default Signup;