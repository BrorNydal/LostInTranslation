import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";

// Component for login
function LoginForm() {

    let [username, setUsername] = useState("");
    const navigation = useNavigate();

    function login(){        
        localStorage.clear();
        localStorage.setItem("user", username);
        console.log(username + " logged in.");

        navigation("/translate");
    }

    function onUsernameInput(event){
        setUsername(event.target.value);
        console.log(event.target.value);
    }

    if(localStorage.getItem("user") != null)
    {
        navigation("/translate");
    }
    
    return (<>        
        <input type="text" onChange={onUsernameInput} />
        <button onClick={login} styke={{width:"200px", height:"140px"}}> Login </button>
    </>);
}

export default LoginForm;