import { useNavigate } from "react-router-dom"


function ProfileNavigator(){
    const navigation = useNavigate();

    function navigateToProfile(){
        navigation("/profile");
    }

    return (<>
        <> <br /> </>
        <button onClick={navigateToProfile}> <img src="laughs.png" alt="Profile" width = "40" height = "40" border="0" /> </button>
    </>)
}

export default ProfileNavigator;