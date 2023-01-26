// Translator
// import WithAuth from "";
import TranslateToSign from "../components/Translator/TranslatorForm"; // Translator component
import Authorizer from "../components/Login/Authorizer";

function TranslatePage(){
    console.log("Entering translatorpage")
    return(
        <div>
            <h1> Translatorpage </h1>
            <TranslateToSign/>
        </div>
    )
};

export default withAuth(TranslatePage);// with Auth
// <Translator/>