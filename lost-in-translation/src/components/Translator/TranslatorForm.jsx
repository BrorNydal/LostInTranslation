// Translator component
import { useContext, useEffect, useState } from "react";

function TranslateToSign(){

    function ToSign(){
        console.log("Now translating")
    }

    return (
        <div>
        <button onClick={ToSign}> Translate Me </button>
    </div>

    )

}

export default TranslateToSign