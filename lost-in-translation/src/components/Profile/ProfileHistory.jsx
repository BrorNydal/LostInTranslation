// Component for profile (history)
import { useContext, useEffect, useState } from "react";
import { getUser } from "../../APIUtils";
import {TranslateContext} from "../Contexts/TranslateContext";
import { UserContext } from "../Contexts/UserContext";
import OneTranslation from "../Translator/Translation";

function HistoryLog(){
  const [user, setUser] = useContext(UserContext);
  const [listItems, setListItems] = useState(<></>);

  useEffect(()=>{
    getHistory();
  }, []);

  async function getHistory(){
    const userResult = await getUser(user.username);    

    if(userResult.ok === true)
    {
      const arr = userResult.response.translations;

      if(arr.length > 0)
      {
        setListItems(arr.map((value, index) =>{          
          return (<p>{value}</p>);
        }));
        // arr.map((value, index) =>{
        //   setListItems(<>
        //     <li key={index}>value</li>
        //   </>);
        // });        
      }
      else
      {
        console.log("No translations on user " + user.username);
      }
    }
    else
    {
      console.log("Could not retrieve translation history data for user " + user.username);
    }
  }

  return (
    <>
      <section>
        <h4> History </h4>
        {listItems}
      </section>
     </>
  );
  } 

export default HistoryLog;