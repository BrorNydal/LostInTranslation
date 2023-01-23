// Translator component
import { useContext, useEffect, useState } from "react";
import {TranslateContext } from "../Contexts/TranslateContext";
import OneTranslation from "./Translation";

function TranslateToSign(){ // Parent 

    const [translateTxt,setTranslateTxt] = useState(""); // translateTxt is the object in setTranslateTxt state
    //const [translateReports, setTranslateReports] = useState({translateList:[]}); // Need context to take in translatetext
    const [translateReports, setTranslateReports] = useContext(TranslateContext); // Need context to take in translatetext

    //function GetSign(){
    //    // Make an index(pixel) mapping for each letter. size 1200 x 600;
    //    const dd = 0 ; 
    //}
    
    function ToSign(){
        //localStorage.setItem("translate me ", translatetxt);
        // store translation in translateReports
        translateReports.translateList.push(translateTxt);
        //OneTranslation(translateTxt)
        console.log("translate", translateTxt);
        console.log("List ", translateReports.translateList)
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
// <OneTranslation translationData={translateTxt}/>