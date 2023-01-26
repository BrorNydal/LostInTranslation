import { useEffect, useState } from "react";

function OneSprite(props){ // https://daveceddia.com/react-image-tag/
    const letter = props.letter;
   /* console.log("get one sprite");
    console.log("here sprite", letter)
    console.log("individial_signs/" + letter + ".png") */
    return (
      <img src = {"individial_signs/" + letter + ".png"} alt = "letter" width = "50" 
      height =  "50"/>  
    );
  }

  export default OneSprite;