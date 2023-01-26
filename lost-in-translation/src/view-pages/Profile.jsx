// Profile with history
import HistoryLog from "../Components/Profile/ProfileHistory";
import Authorizer from "../Components/Login/Authorizer";

function ProfilePage(){
    return(
        <div>
            <Authorizer/>
            <h1> ProfilePage </h1>            
            <HistoryLog/>
        </div>
    )
};

export default ProfilePage;

// <!--  -->