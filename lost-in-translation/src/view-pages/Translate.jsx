// Translator
// import WithAuth from "";
import TranslateToSign from "../components/Translator/TranslatorForm"; // Translator component

function TranslatePage(){
    console.log("Entering translatorpage")
    return(
        <div>
            <h1> Translatorpage </h1>
            <TranslateToSign/>
        </div>
    )
};

export default TranslatePage;// with Auth
// <Translator/>