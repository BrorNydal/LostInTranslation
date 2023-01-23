// child component adding each translation to props
import { useEffect, useState } from "react";
//import { TranslateContext } from "../Contexts/TranslateContext";

function OneTranslation(props) { // child function
    const sentence =  props.sentence;
  return (
      <h5> {sentence}</h5> // translateData is an object which has translation added/set/attached to it.
  );
}

export default OneTranslation;
