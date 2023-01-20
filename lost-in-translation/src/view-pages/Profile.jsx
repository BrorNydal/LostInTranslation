// Profile with history
import TranslateReport from "../components/Profile/ProfileHistory";
import withAuth from "../components/Login/WithAuth";

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