import React, {useContext, useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../Contexts/UserContext";
import { getUser, createNewUser, deleteUser } from "../../APIUtils";

// Component for login
function LoginForm() {    

    let [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useContext(UserContext);
    const navigation = useNavigate(); 
    
    const maxUserNameLength = 16;

    function ErrorMessage(){
        if(errorMessage.length <= 0)
        {
            return <></>;
        }
        else
        {
            return <><p style={{color: "red"}}>{errorMessage}</p></>
        }
    }

    async function login(user)
    {
        if(user.length <= 0)
        {
            setErrorMessage("Username must consist of at least one character!");
            return;
        }
        else if(user.length >= maxUserNameLength)
        {
            setErrorMessage(`Username must be shorter than ${maxUserNameLength} characters!`);
            return;
        }
        else if(!onlyLettersAndNumbers(user))
        {
            setErrorMessage("Username can not contain spaces or symbols. \nUse characters and numbers only!");
            return;
        }

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
            localStorage.setItem("user", user);
            await createNewUser(user);            

            navigation("/translate");
        }
    }

    //Copied from CodingBeautyDev.com
    function onlyLettersAndNumbers(str) {
        return /^[A-Za-z0-9]*$/.test(str);
      }

    async function btnLogin(){   
        await login(username);
    }     

    async function btnDelete(){
        await deleteUser(username);
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
        <p style={{color:"white"}}> {errorMessage} </p>
        <button onClick={btnLogin} style={{width:"80px", height:"20px"}}> Login </button>     
        
    </>);
    //<button onClick={btnDelete} style={{width:"80px", height:"20px"}}> Delete </button>      
    //
}

export default LoginForm;