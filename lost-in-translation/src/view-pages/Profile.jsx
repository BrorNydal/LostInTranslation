// Profile with history
import withAuth from "../components/Login/WithAuth"

function ProfilePage(){
    return(
        <div>
            <h1> ProfilePage </h1>
            <p> User : <span>{localStorage.getItem("user")}</span></p>
        </div>
    )
};

export default withAuth(ProfilePage);