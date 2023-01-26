// Profile with history
import HistoryLog from "../components/Profile/ProfileHistory";
import Authorizer from "../components/Login/Authorizer";

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