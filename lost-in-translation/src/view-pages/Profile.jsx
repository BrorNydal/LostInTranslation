// Profile with history
import HistoryLog from "../components/Profile/ProfileHistory";
import Authorizer from "../components/Login/Authorizer";
import Logout from "../components/Logout/Logout";
import TranslateNavigator from "../components/Translator/TranslateNavigator";

function ProfilePage(){
    return(
        <div>
            <Authorizer/>
            <header style = {{fontFamily: "'Courier New', monospace", backgroundColor: "#2B65EC", color:"white", padding:"20px"}}> 
                <center>
                    <h1> Handshaper </h1>
                </center>
            </header>      
            <HistoryLog/>  
            <TranslateNavigator/>
            <Logout/>          
        </div>
    )
};

export default ProfilePage;

// <!--  -->

//             <h1> ProfilePage </h1>      