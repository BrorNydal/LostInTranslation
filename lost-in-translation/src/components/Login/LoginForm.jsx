import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Component for login
function LoginForm() {    

    let [username, setUsername] = useState("");
    const navigation = useNavigate();   

    async function login(){        
        // localStorage.setItem("user", username);
        // console.log(username + " logged in.");

        const apiURL = 'https://lostintranslation-lb-api.glitch.me';

        // const result = await fetch(`${apiURL}/translations?username=${username}`);
        // const jsonResult = await result.json();
        // console.log(jsonResult);

        const apiKey = '';

        fetch(`${apiURL}/translations`, {
                method: 'POST',
                headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    username: 'mega-mind', 
                    translations: [] 
                })
            })
            .then(response => {
            if (!response.ok) {
                throw new Error('Could not create new user')
            }
            return response.json()
            })
            .then(newUser => {
            // newUser is the new user with an id
            })
            .catch(error => {
            })

        // fetch(`${apiURL}/translations?username=${username}`)
        //     .then(response => response.json())
        //     .then(results => {
        //         // results will be an array of users that match the username of victor.
                
        //     })
        //     .catch(error => {
        //     })

        //navigation("/translate");
    }

    function onUsernameInput(event){
        setUsername(event.target.value);
        console.log(event.target.value);
    }    

    useEffect(()=>{
        if(localStorage.getItem("user") != null)
        {
            navigation("/translate");
        }
    }, []);
    

    return (<>        
        <input type="text" onChange={onUsernameInput} />
        <button onClick={login} styke={{width:"200px", height:"140px"}}> Login </button>
    </>);
}

export default LoginForm;