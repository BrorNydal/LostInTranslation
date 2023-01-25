// Translator
// import WithAuth from "";
import TranslateToSign from "../Components/Translator/TranslatorForm"; // Translator component
import Authorizer from "../Components/Login/Authorizer";

function TranslatePage(){

    console.log("Entering translatorpage");

    return(
        <div>
            <h1> Translatorpage </h1>
            <Authorizer/>
            <TranslateToSign/>
        </div>
    )
};

export default TranslatePage;// with Auth
// <Translator/>