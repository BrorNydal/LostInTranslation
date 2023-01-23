import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Component for login
function LoginForm() {    

    let [username, setUsername] = useState("");
    const navigation = useNavigate();   
    const apiURL = 'https://lostintranslation-lb-api.glitch.me';
    const apiKey = 'noA+jgBPTEaCgn63IMJlGw==';

    const createNewUser = async (name) =>
    {
        try{
        const result = await fetch(`
            ${apiURL}/translations`, 
            {
            method: 'POST',
            headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: name, 
                translations: [] 
            })
            });

            if(result.ok)
            {
                console.log("user " + username + " created successfully!");
            }
            else
            {
                console.log("failed to create user: " + username + "!");
            }
        }
        catch(error)
        {
            console.log(error);
        }
    }

    const userExists = async (name) =>{
        const result = await fetch(`${apiURL}/translations?username=${name}`);
        const jsonResult = await result.json();

        if(jsonResult.length == 0)
        {
            return {"exists":false, "response": null};
        }
        else
        {   
            return {"exists":true, "response": jsonResult};         
        }
    }

    async function login(){   
                
        const response = await userExists(username);        

        if(response.exists)
        {
            //User found, proceed to login
            //TODO: Save username somewhere?     
            localStorage.SetItem("user")
        }
        else
        {            
            //No matching user, create new user
            createNewUser(username);
        }

        localStorage.setItem()
    }

    const Delete = () =>{
        const apiURL = 'https://lostintranslation-lb-api.glitch.me';
        const apiKey = 'noA+jgBPTEaCgn63IMJlGw==';
        const userId = parseInt(username);

        fetch(`${apiURL}/translations/${userId}`, {
            method: 'DELETE', // NB: Set method to PATCH
            headers: {
                'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Could not update translations history')
          }
          return response.json()
        })
        .then(updatedUser => {
          // updatedUser is the user with the Patched data
          console.log("deleted user " + username);
        })
        .catch(error => {
        })
    }

    

    function onUsernameInput(event){
        setUsername(event.target.value);
        console.log(event.target.value);
    }    

    useEffect(()=>{
        if(userExists())
        {
            navigation("/translate");
        }
    }, []);
    

    return (<>        
        <input type="text" onChange={onUsernameInput} />
        <button onClick={login} style={{width:"80px", height:"20px"}}> Login </button>
        <button onClick={Delete}  style={{width:"80px", height:"20px"}}> Delete </button>
    </>);

    //
}

export default LoginForm;