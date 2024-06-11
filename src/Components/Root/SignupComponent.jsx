import {useState} from "react";
import { redirect } from "react-router-dom";

const SignupComponent = () => {

    const [user,setUser] = useState({
        username: null,
        password: null,
        confirmPassword: null,
        password:null,
        email:null,
        emailVerified: false
    })
   

    const handleInput = (event) => {
        if(event.target.name === "user"){
            setUser({...user,username: event.target.value});
        }else if(event.target.name === 'password'){
            setUser({...user,password: event.target.value})
        }else if(event.target.name === 'confirm-password'){
            setUser({...user,confirmPassword: event.target.value})
        }else if(event.target.name === 'email'){
            setUser({...user,email: event.target.value})
        }
    };
    
    return (
        <div className="login-container">
            <h2><center>Signup</center></h2>
            <hr/>
            <p>User:</p>
            <input name='user' id='user' type="text" value={user.username || ''} onChange={handleInput } placeholder='Type your username here'/>
            <p>Password:</p>
            <input name='password' id='password' type='password' value={user.password || ''} onChange={handleInput} placeholder="Type your password here"/>
            <p>Confirm Password:</p>
            <input name='confirm-password' id='confirm-password' type='password' value={user.confirmPassword || ''} onChange={handleInput} placeholder="Retype your password here"/>
            {(user.password==user.confirmPassword)?null:<p className="error">*passwords do not match</p>}
            <p>email</p>
            <input name='email' id='email' type='email' value={user.email||''} placeholder="Type you email here" onChange={handleInput}/>
            <br/><br/>
            <button>Signup</button>
        </div>
    )
};

export default SignupComponent;