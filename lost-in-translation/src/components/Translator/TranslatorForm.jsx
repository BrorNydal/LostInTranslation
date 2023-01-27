// Translator component
import { useContext, useState } from "react";
import '../../index.css' ;
import { updateUser } from "../../APIUtils";
import { UserContext } from "../Contexts/UserContext";

function TranslatorForm(){

    const [translateTxt,setTranslateTxt] = useState(""); // translateTxt is the object in setTranslateTxt state
    const [user] = useContext(UserContext);
    const [isImageActive, setIsImageActive] = useState(false);

    //When the user clicks translate, update display
    function btnToSign(){
        setIsImageActive(true);
        updateUser(user.username, String(translateTxt));
    }

    //Displays a single sprite
    function oneSprite(letter){
        return (
            <img src = {"individial_signs/" + letter + ".png"} alt = "letter" width = "50" 
            height =  "50"/>  
          );
    }

    //After input is recieved, display signs. Hide when typing.
    function makeSign(){
        console.log("text ", translateTxt);
        const txtArr = translateTxt.toLowerCase().split("");

        const alphabet = ["a","b","c","d","e","f","g","h","i","j", 
                    "k","l","m","n","o","p","q","r","s","t",
                    "u","v","w","x","y","z"];

        const imageItems = txtArr.map((stringElem) => {
            if (alphabet.indexOf(stringElem) >= 0) { // returns -1 if not present
                return (
                    oneSprite(stringElem)
                )} 
                else if (stringElem === " " || stringElem === "-") {
                return (
                <> &nbsp; &nbsp; &nbsp; </>
                )
            } 
            else {
                return  (
                <> </>
                )
            }
        });

        console.log(imageItems);

        return (
            <>
            {imageItems}
            </>
        );
    } 

    function onTranslateInput(event){
        setTranslateTxt(event.target.value);
        setIsImageActive(false);
    }

    return (
    <div align = "center">
        <input maxLength="50" type="text" onChange={onTranslateInput} />
        <button onClick={btnToSign}> Translate Me </button>
        <br /> <br />
        <section>
            <div className ="box">
            {isImageActive && makeSign()}
            </div>
        </section>
    </div>
    )
};

export default TranslatorForm;