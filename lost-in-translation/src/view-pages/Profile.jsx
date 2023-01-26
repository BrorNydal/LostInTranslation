// Profile with history
import TranslateReport from "../components/Profile/ProfileHistory";
import Authorizer from "../components/Login/Authorizer";

function ProfilePage(){
    return(
        <div>
            <h1> ProfilePage </h1>
            <TranslateReport/>
        </div>
    )
};

export default withAuth(ProfilePage);

// <!--  -->