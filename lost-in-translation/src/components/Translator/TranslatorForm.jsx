// Translator component
import { useContext, useEffect, useState } from "react";
import oneTranslation from "./Translation";

function TranslateToSign(){ // Parent 

    const [translateTxt,setTranslateTxt] = useState({}); // translateTxt is the object in setTranslateTxt state
    const [translateReports, setTranslateReports] = useState({translateList:[]}); // Need context to take in translatetext
    //const [translateReports, setTranslateReports] = useContext(TranslateContext); // Need context to take in translatetext

    function ToSign(){
        //localStorage.setItem("translate me ", translatetxt);
        // store translation in translateReports
        translateReports.translateList.push(translateTxt);
        console.log("translate", translateTxt);
        console.log("List ", translateReports.translateList[0])
    }

    function onTranslateInput(event){
        setTranslateTxt(event.target.value);
        //console.log(event.target.value);
    }

    return (
        <div>
        <input type="text" onChange={onTranslateInput} />
        <button onClick={ToSign}> Translate Me </button>
    </div>

    )
}

export default TranslateToSign