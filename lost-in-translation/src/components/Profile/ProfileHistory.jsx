// Component for profile (history)
import { useContext, useEffect, useState } from "react";
import { deleteTranslationHistory, getUser } from "../../APIUtils";
import { UserContext } from "../Contexts/UserContext";

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
          return (<p id={index}>{value}</p>);
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
    await deleteTranslationHistory(user.id);
    await updateHistory();
  }

  return (
    <>
      <section>
      <header style = {{fontFamily: "'Courier New', monospace", backgroundColor: "#5F9EA0", color:"white", padding:"1px"}}> 
                <center>
                    <h1> History </h1>
                </center>
            </header> 
        <center>  
        {listItems}
        </center>  
        <button onClick={deleteHistory}> Delete History </button>
      </section>
     </>
  );
  } 

export default HistoryLog;