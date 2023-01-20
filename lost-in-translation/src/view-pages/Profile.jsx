// Profile with history
import withAuth from "../components/Login/WithAuth"

function ProfilePage(){
    return(
        <div>
            <h1> ProfilePage </h1>
        </div>
    )
};

export default withAuth(ProfilePage);