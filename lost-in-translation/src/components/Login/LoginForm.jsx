import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";

// Component for login
function LoginForm() {

    let [username, setUsername] = useState("");
    const navigation = useNavigate();

    function login(){
        localStorage.setItem("user", username);
        localStorage.setItem("auth", true);

        console.log(username + " logged in.");

        console.log(localStorage);

        navigation("/translate");
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