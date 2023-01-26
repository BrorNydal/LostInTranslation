// Profile with history
import HistoryLog from "../Components/Profile/ProfileHistory";
import Authorizer from "../Components/Login/Authorizer";
import Logout from "../Components/Logout/Logout";

function ProfilePage(){
    return(
        <div>
            <Authorizer/>
            <h1> ProfilePage </h1>            
            <HistoryLog/>  
            <Logout/>          
        </div>
    )
};

export default ProfilePage;

// <!--  -->