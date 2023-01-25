// child component adding each translation to props
import { useEffect, useState } from "react";
//import { TranslateContext } from "../Contexts/TranslateContext";

function OneTranslation(props) { // child function
    const sentence =  props.sentence;
    const keyname = props.keyname;
  return (
      <h5 key = {keyname}> {sentence} </h5> // translateData is an object which has translation added/set/attached to it.
  );
};

export default OneTranslation;

// translateData is an object which has translation added/set/attached to it.