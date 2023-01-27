// Translator
// import WithAuth from "";
import TranslateToSign from "../components/Translator/TranslatorForm"; // Translator component
import Authorizer from "../components/Login/Authorizer";
import ProfileNavigator from "../components/Profile/ProfileNavigator";

function TranslatePage(){

    console.log("Entering translatorpage");

    return(
        <div>
            <Authorizer/>
            <header style = {{fontFamily: "'Courier New', monospace", backgroundColor: "#2B65EC", color:"white", padding:"20px"}}> 
                <center>
                    <h1> Handshaper </h1>
                </center>
            </header>
            <> <br /> </>
            <center>
                <TranslateToSign/>
                <ProfileNavigator/>
            </center>            
        </div>
    )
};

export default TranslatePage; 