import {useState} from "react";


const LoginComponent = () => {

    const [user, setUsername] = useState({username:"",password:""});

    const handleInput = (event) => {
        if(event.target.name === "user"){
            setUsername(event.target.value);
        }else if(event.target.name === 'password'){
            setPassword(event.target.value)
        }
    };

    return (
        <div className="login-container">
            <h2><center>Login</center></h2>
            <hr/>
            <p>User:</p>
            <input name='user' id='user' type="text" value={user.username || ''} onChange={handleInput } placeholder='Type your username here'/>
            <p>Password:</p>
            <input name='password' id='password' type='password' value={user.password || ''} onChange={handleInput} placeholder="Type your password here"/>
            <br/><br/>
            <button>Login</button>
        </div>
    )
};

export default LoginComponent;