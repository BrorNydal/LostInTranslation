// Translator component
import { useContext, useEffect, useState } from "react";
import OneSprite from "./GetSprite";
//import TextToSprite from "../ReadSprite/Sprites";
import '../../index.css' ;
import { updateUser } from "../../APIUtils";
import { UserContext } from "../Contexts/UserContext";

function TranslateToSign(){ // Parent 

    const [translateTxt,setTranslateTxt] = useState(""); // translateTxt is the object in setTranslateTxt state
    //const [translateReports, setTranslateReports] = useState({translateList:[]}); // Need context to take in translatetext
    //const translations = [];
    const [user, setUser] = useContext(UserContext);
    const [isImageActive, setIsImageActive] = useState(false);
    //function GetSign(){
    //    // Make an index(pixel) mapping for each letter. size 1200 x 600;
    //    const dd = 0 ; 
    //} // Patch 

    function toSign(){
        //localStorage.setItem("translate me ", translatetxt);
        // store translation in translateReports
        //translateReports.translateList.push(translateTxt);
        //translations.push(translateTxt);
        setIsImageActive(true);
        updateUser(user.username, String(translateTxt));
        //console.log("translate", translateTxt);
        //console.log("List ", translateReports.translateList)
        // use map to find sprites in assets!
    }

    function oneSprite(letter){
        return (
            <img src = {"individial_signs/" + letter + ".png"} alt = "letter" width = "50" 
            height =  "50"/>  
          );
    }

    function makeSign(){
        //translateReports.translateList.push(translateTxt);
        console.log("text ", translateTxt);
        //if (translateTxt ==! ""){
        const txtArr = translateTxt.toLowerCase().split("");
        //console.log(translateTxt);
        console.log("txtArr ", txtArr);
        const alphabet = ["a","b","c","d","e","f","g","h","i","j", 
                    "k","l","m","n","o","p","q","r","s","t",
                    "u","v","w","x","y","z"];
        const imageItems = txtArr.map((stringElem) => {
            if (alphabet.indexOf(stringElem) >= 0) { // returns -1 if not present
                return (
                    oneSprite(stringElem)
                )} else if (stringElem == " " || stringElem == "-") {
                return (
                    <> &nbsp; &nbsp; &nbsp; </>
                    )
            } else {
                return  (
                <> </>
                )
            }
        });
        console.log(imageItems)
        return (
            <>
            {imageItems}
            </>
        );
        //}
    } 

    function onTranslateInput(event){
        setTranslateTxt(event.target.value);
        setIsImageActive(false);
        //console.log(event.target.value);
    }

    return (
    <div align = "center">
        <input maxLength="50" type="text" onChange={onTranslateInput} />
        <button onClick={toSign}> Translate Me </button>
        <br /> <br />
        <section>
            <div className ="box">
            {isImageActive && makeSign()}
            </div>
        </section>
    </div>
    )
};
// <MakeSign/>

// <MakeSign/>
// <TextToSprite sentence = {translateTxt} />
//<TextToSprite sentence = {translateTxt} />

export default TranslateToSign
// <OneTranslation translationData={translateTxt}/>

/*         <br /> <br />
<section>
<div className ="box">
    <link rel="stylesheet" href="">
    </link>
    <canvas width="1200px" height="600px">
    </canvas>
    <TextToSprite sentence = {translateTxt} />
</div>
</section>
*/ 