import React, {useState} from "react";
import { Navigate } from "react-router-dom";

// Component for login
function LoginForm() {

    let [username, setUsername] = useState("");

    function login(){
        localStorage.setItem("user", username);
        localStorage.setItem("auth", true);

        return <Navigate to="/translate"/>
    }

    function onUsernameInput(event){
        setUsername(event.target.value);
        console.log(event.target.value);
    }

    return (<>
        <input type="text" onChange={onUsernameInput} />
        <button onClick={login} styke={{width:"200px", height:"140px"}}> Login </button>
    </>);
}

export default LoginForm;