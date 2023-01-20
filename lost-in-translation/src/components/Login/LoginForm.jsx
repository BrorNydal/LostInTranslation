
// Component for login
function LoginForm() {

    let [username, setUsername] = setState("");

    function onUsernameInput(event){
        setUsername(event.target.value);
        console.log(username);
    }

    return (<>
        <h1>Login</h1>
        <input type="text" onChange={onUsernameInput} />
    </>);
}

export default LoginForm;