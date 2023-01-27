// Login and front-page

import LoginForm from "../components/Login/LoginForm.jsx";

function LoginPage() {    

    return (<>
        <header style = {{fontFamily: "'Courier New', monospace", backgroundColor: "#2B65EC", color:"white", padding:"60px"}}> 
                <center>
                    <h1> Handshaper </h1>
                    <LoginForm />
                </center>
        </header>
        <body align = "center">
        <img src = {"sign-spritesheet-1200.png"} alt = "sign-letters" width = "600" 
      height =  "300"/>  
        </body>
    </>);
}

export default LoginPage;

//  <h1>Login</h1>