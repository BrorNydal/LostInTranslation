import { createContext, useState } from "react";

export const TranslateContext = createContext({translateList:[]}); // Define context

function TranslateProvider({ children }) { // define provider
  const [translateReports, setTranslateReports] = useState({translateList:[]}); // Define translateReport object and update function
  return <TranslateContext.Provider value={[translateReports, setTranslateReports]}>{children}</TranslateContext.Provider>; // define provider with context making report accessible to children
}

export default TranslateProvider; // export provider, providing context translatereport
