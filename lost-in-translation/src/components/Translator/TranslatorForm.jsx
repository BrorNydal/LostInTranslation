// Translator component
import { useContext, useEffect, useState } from "react";

function TranslateToSign(){

    const [translatetxt,setTranslateTxt] = useState("");

    function ToSign(){
        localStorage.setItem("translate me ", translatetxt);
        console.log("Now translating")
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