import {useState} from "react";

const SignupComponent = () => {

    const [user,setUser] = useState({
        username: null,
        password: null,
        confirmPassword: null,
        email:null,
        emailVerified: false
    })
   

    const handleInput = (event) => {
        setUser({...user,[event.target.name]: event.target.value});
    };
    
    const printInput = () => {
        console.log(user);
    }

    return (
        <form className="login-container">
            <h2><center>Signup</center></h2>
            <hr/>
            <p>User:</p>
            <input name='username' id='user' type="text" value={user.username || ''} onChange={handleInput } placeholder='Type your username here'/>
            <p>Password:</p>
            <input name='password' id='password' type='password' value={user.password || ''} onChange={handleInput} placeholder="Type your password here"/>
            <p>Confirm Password:</p>
            <input name='confirmPassword' id='confirm-password' type='password' value={user.confirmPassword || ''} onChange={handleInput} placeholder="Retype your password here"/>
            {(user.password==user.confirmPassword)?null:<p className="error">*passwords do not match</p>}
            <p>email</p>
            <input name='email' id='email' type='email' value={user.email||''} placeholder="Type you email here" onChange={handleInput}/>
            <button onClick={printInput}>Signup</button>
        </form>
    )
};

export default SignupComponent;