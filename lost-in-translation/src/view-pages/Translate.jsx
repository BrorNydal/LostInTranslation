// Translator
// import WithAuth from "";
import TranslatorForm from "../Components/Translator/TranslatorForm"; // Translator component
import Authorizer from "../Components/Login/Authorizer";
import ProfileNavigator from "../Components/Profile/ProfileNavigator";
import Logout from "../Components/Logout/Logout";

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
                <TranslatorForm/>
                <ProfileNavigator/>
                <Logout/>
            </center>            
        </div>
    )
};

export default TranslatePage; 