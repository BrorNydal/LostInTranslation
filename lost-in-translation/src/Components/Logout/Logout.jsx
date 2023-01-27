import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";


function Logout(){
    const [user, setUser] = useContext(UserContext);
    const navigator = useNavigate();

    function logout(){
        localStorage.setItem("user", null);
        setUser({username:"", id:0});
        navigator("/");
    }

    return (<>
        <br/>
        <button onClick={logout}> Logout </button>
    </>);
}

export default Logout;