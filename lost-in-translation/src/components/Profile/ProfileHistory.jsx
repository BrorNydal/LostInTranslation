// Component for profile (history)
import { useContext } from "react";
import {TranslateContext} from "../Contexts/TranslateContext";
import OneTranslation from "../Translator/Translation";

//)
function HistoryLog(){
  const [translateReports, setTranslateReports] = useContext(TranslateContext);
  const listItems = translateReports.translateList.map((translation, index) => {
    return (
      <OneTranslation sentence = {translation} />
      );
  });
  return (
    <> {listItems} </>
  );
  }

function TranslateReport() { // Report depending on TranslateContext, report in profilehistory
    //const [translateReports, setTranslateReports] = useContext(TranslateContext);

    return (
    <>
      <h2> History </h2>
      <HistoryLog/>
    </>
  );
};

export default TranslateReport;

/* Old func
function TranslateReport() { // Report depending on TranslateContext, report in profilehistory
  const [translateReports, setTranslateReports] = useContext(TranslateContext);

  return (
  <>
    <h2> History </h2>
    <OneTranslation sentence = {translateReports.translateList[0]} />
  </>
);
}; */