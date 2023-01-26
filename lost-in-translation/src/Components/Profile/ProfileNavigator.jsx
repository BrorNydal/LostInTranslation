import { useNavigate } from "react-router-dom"


function ProfileNavigator(){
    const navigation = useNavigate();

    function navigateToProfile(){
        navigation("/profile");
    }

    return (<>
        <button onClick={navigateToProfile}>Profile</button>
    </>)
}

export default ProfileNavigator;