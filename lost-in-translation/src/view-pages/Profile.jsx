// Profile with history
import TranslateReport from "../Components/Profile/ProfileHistory";
import Authorizer from "../Components/Login/Authorizer";

function ProfilePage(){
    return(
        <div>
            <Authorizer/>
            <h1> ProfilePage </h1>            
            <TranslateReport/>
        </div>
    )
};

export default ProfilePage;

// <!--  -->