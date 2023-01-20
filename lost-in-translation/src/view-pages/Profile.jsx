// Profile with history

function ProfilePage(){
    return(
        <div>
            <h1> ProfilePage </h1>
            <p> User : <span>{localStorage.getItem("user")}</span></p>
        </div>
    )
};

export default ProfilePage;