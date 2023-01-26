// Translator
// import WithAuth from "";
import TranslateToSign from "../Components/Translator/TranslatorForm"; // Translator component
import Authorizer from "../Components/Login/Authorizer";
import ProfileNavigator from "../Components/Profile/ProfileNavigator";

function TranslatePage(){

    console.log("Entering translatorpage");

    return(
        <div>
            <Authorizer/>
            <h1> Translatorpage </h1>
            <TranslateToSign/>
            <ProfileNavigator/>            
        </div>
    )
};

export default TranslatePage;