// child component adding each translation to props

import { useEffect, useState } from "react";

function oneTranslation(props) { // child function
  return (
      <h4>{props.translateData.translateTxt}</h4> // translateData is an object which has translation added/set/attached to it.
  );
}

export default oneTranslation;
