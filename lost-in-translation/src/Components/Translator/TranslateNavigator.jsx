import { useNavigate } from "react-router-dom";

//Navigates to the translation page
function TranslateNavigator(){

    const navigator = useNavigate();

    function navigateToTranslatePage(){
        navigator("/translate");
    }

    return (<>
        <button onClick={navigateToTranslatePage}> Translator </button>
    </>);
}

export default TranslateNavigator;