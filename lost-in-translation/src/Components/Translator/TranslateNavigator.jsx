import { useNavigate } from "react-router-dom";


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