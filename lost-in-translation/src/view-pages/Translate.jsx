// Translator
// import WithAuth from "";
import TranslateToSign from "../Components/Translator/TranslatorForm"; // Translator component
import Authorizer from "../Components/Login/Authorizer";
import ProfileNavigator from "../Components/Profile/ProfileNavigator";
import Logout from "../Components/Logout/Logout";

function TranslatePage(){

    console.log("Entering translatorpage");

    return(
        <div>
            <Authorizer/>
            <header style = {{backgroundColor: "#2B65EC", color:"white", padding:"20px"}}> 
            <h1> Lost in Translation </h1>
            </header>
            <TranslateToSign/>
            <ProfileNavigator/>   
            <Logout/>         
        </div>
    )
};

export default TranslatePage;