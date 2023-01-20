// Component for profile (history)
import { useContext } from "react";
import {TranslateContext} from "../Contexts/TranslateContext";
import oneTranslation from "../Translator/Translation";


function TranslateReport() { // Report depending on TranslateContext, report in profilehistory
    const [translateReports, setTranslateReports] = useContext(TranslateContext);

    return (
    <>
      <h1> Translation </h1>
      <oneTranslation translateData={translateReports.translateList[0]} />
    </>
  );
}

export default TranslateReport;
