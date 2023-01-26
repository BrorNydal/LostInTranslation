import React, {useContext, useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../Contexts/UserContext";
import { getUser, createNewUser, deleteUser } from "../../APIUtils";

// Component for login
function LoginForm() {    

    let [username, setUsername] = useState("");
    const [user, setUser] = useContext(UserContext);
    const navigation = useNavigate();   

    async function login(user)
    {
        const result = await getUser(user);      
        
        if(result.ok)
        { 
            setUser({username:user, id: result.response.id});  
            localStorage.setItem("user", user);
            navigation("/translate");
        }
        else
        {            
            //No matching user, create new user
            await createNewUser(user);
            localStorage.setItem("user", user);
            navigation("/translate");
        }
    }

    async function btnLogin(){   
        await login(username);
    }     

    function onUsernameInput(event){
        setUsername(event.target.value);
    }    

    async function autoLogin(user){   
        if(localStorage.getItem("user") != null)
        {
            let result = await getUser(user);

            if(result.ok)
            {
                setUser({username:user, id:result.response.id});
                localStorage.setItem("user", user);
                navigation("/translate");
            }
        }
    }

    useEffect(()=>{
        console.log("Local storage user : " + localStorage.getItem("user"));
        autoLogin(localStorage.getItem("user"));
    }, [user]);
    

    return (<>        
        <input type="text" onChange={onUsernameInput} />
        <button onClick={btnLogin} style={{width:"80px", height:"20px"}}> Login </button>
    </>);

    //
}

export default LoginForm;