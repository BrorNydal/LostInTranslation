// Component for profile (history)
import { useContext } from "react";
import {TranslateContext} from "../Contexts/TranslateContext";
import OneTranslation from "../Translator/Translation";


function TranslateReport() { // Report depending on TranslateContext, report in profilehistory
    const [translateReports, setTranslateReports] = useContext(TranslateContext);

    return (
    <>
      <h2> History </h2>
      <OneTranslation sentence = {translateReports.translateList[0]} />
    </>
  );
};

export default TranslateReport;
