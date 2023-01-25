
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authorize, getUser } from "../../APIUtils";
import { UserContext } from "../Contexts/UserContext";

function Authorizer(){
    const [user, setUser] = useContext(UserContext);
    const navigation = useNavigate();

    useEffect(()=>{        
        authorizeAsync();
    }, []);

    async function authorizeAsync(){

        if(user.username == '')
        {
            const requestUser = await getUser(localStorage.getItem("user"));

            if(requestUser.ok)
            {
                user.username = requestUser.response.username;
                user.id = requestUser.response.id;
            }
            else
            {
                console.log(user.username + " not authorized");
                localStorage.setItem("user", null);
                navigation("/");
            }
        }

        const result = await authorize(user.username);

        if(result)
        {
            console.log(user.username + " authorized");
        }
        else
        {
            console.log(user.username + " not authorized");
            localStorage.setItem("user", null);
            navigation("/");
        }
    }

    return <></>;
}

export default Authorizer;