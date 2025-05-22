import CharacterStats from "../Components/CharacterStats"
import Control from "../Components/Controls"
import DisplayText from "../Components/DisplayText"
import MonsterStats from "../Components/MonsterStats"
import { useEffect, useState } from "react"
import { getData } from "../GameFn/dateBaseFn"
import supabase from "../config/supabaseClient"


const Play=()=>{
    const [locationInfo, setLocationInfo]=useState(null);
    const [saveFile,setSaveFile] = useState(null);
    const [gameText,setGameText]=useState("Welcome to my first game")

useEffect(() => {
    getData(setSaveFile);
    supabase
    .channel("users")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "users",
      },
      (_payload) => {
        getData(setSaveFile);
      }
    )
    .subscribe();
    
  }, []);
    return (<>
        {!saveFile?(<p>loading</p>):(
            <>
            <div id="game">
                <CharacterStats saveFile={saveFile}/>
        <Control locationInfo={locationInfo} setLocationInfo={setLocationInfo} saveFile={saveFile} setGameText={setGameText}/>
        <MonsterStats/>
        <DisplayText gameText={gameText}/>
                </div>
            </>
        )}
    </>)
}

export default Play