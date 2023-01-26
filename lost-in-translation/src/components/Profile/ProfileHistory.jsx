// Component for profile (history)
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTranslationHistory, getUser } from "../../APIUtils";
import {TranslateContext} from "../Contexts/TranslateContext";
import { UserContext } from "../Contexts/UserContext";
import OneTranslation from "../Translator/Translation";

function HistoryLog(){
  const [user, setUser] = useContext(UserContext);
  const [listItems, setListItems] = useState(<></>);
  const historyLength = 10;

  useEffect(()=>{
    updateHistory();
  }, []);

  async function updateHistory(){
    const userResult = await getUser(user.username);    

    if(userResult.ok === true)
    {
      let arr = userResult.response.translations;
      arr = arr.slice(arr.length - historyLength, arr.length).reverse();

      if(arr.length > 0)
      {
        setListItems(arr.map((value, index) =>{          
          return (<p>{value}</p>);
        }));     
      }
      else
      {
        console.log("No translations on user " + user.username);
        setListItems(<></>);
      }
    }
    else
    {
      console.log("Could not retrieve translation history data for user " + user.username);
    }
  }

  async function deleteHistory(){
    await deleteTranslationHistory(user.username);
    updateHistory();
  }

  return (
    <>
      <section>
        <h4> History </h4>
        {listItems}
        <button onClick={deleteHistory}> Delete History </button>
      </section>
     </>
  );
  } 

export default HistoryLog;