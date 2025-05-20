import locations from "../GameData/Locations";
import { scrollText } from "../GameFn/textDisplayFn";
import supabase from "../config/supabaseClient";

import { useEffect, useState } from "react";

const Play = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [xp, setXp] = useState(0);
  const [health, setHealth] = useState(100);
  const [gold, setGold] = useState(50);
  const [saveFile, setSaveFile] = useState(null);
  const [gameText,setGameText]=useState("Welcome to my first game")

//key press event to be added later after sorting bugs
// const keyPress = (event) => {
//     if (event.key === "1" && !button1.hasAttribute("disabled")) {
//       handleBtnClick(0)
//       // handleBtn1();
//     } else if (event.key === "2" && !button2.hasAttribute("disabled")) {
//       handleBtnClick(1)
//       // handleBtn2();
//     } else if (event.key === "3" && !button3.hasAttribute("disabled")) {
//       handleBtnClick(2)
//       // handleBtn3();
//     } else if (event.key === "4" && !button4.hasAttribute("disabled")) {
//       handleBtnClick(3)
//       // handleBtn4();
//     }
//   };

  useEffect(() => {
    const getData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const { data } = await supabase
      .from("users")
      .select("saveData")
      .eq("id", user.id);
      setSaveFile(data[0].saveData);
    };
    getData();
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
        getData();
      }
    )
    .subscribe();
    
  }, []);
  scrollText(gameText)
  
    // key press event to be added later after sorting bugs
    // console.log(button1)
    // document.addEventListener("keydown", keyPress);
  // return function () {
  //   document.removeEventListener("keydown", keyPress);
  // };

  const handleBtnClick=(e)=>{
    const button=Number(e.target.id.replace("button", ""))-1
    if(locationInfo!==null){
      locations[locationInfo]["button functions"][button](setLocationInfo, saveFile, setGameText)
    }else{
      locations[0]["button functions"][button](setLocationInfo,saveFile, setGameText)
    }
  }

  // const handleBtn1 = () => {
  //   locations[locationInfo]["button functions"][0](setLocationInfo, saveFile, setGameText);
  // };
  // const handleBtn2 = () => {
  //   // console.log(locationInfo)
  //   locations[locationInfo]["button functions"][1](setLocationInfo, saveFile, setGameText);
  // };
  // const handleBtn3 = () => {
  //   // console.log(locationInfo)
  //   locations[locationInfo]["button functions"][2](setLocationInfo, saveFile, setGameText);
  // };
  // const handleBtn4 = () => {
  //   // console.log(locationInfo)
  //   locations[locationInfo]["button functions"][3](setLocationInfo, saveFile, setGameText);
  // };
  return (
    <>
      {!saveFile ? (
        <p>loading</p>
      ) : (
        <div id="game">
          <div id="stats">
            <span className="stat fade">
              XP: <span id="xpText" className="fade">{saveFile.xp}</span>
            </span>
            <span className="stat fade">
              Health: <span id="healthText" className="fade">{saveFile.health}</span>
            </span>
            <span className="stat fade">
              Mana: <span id="manaText" className="fade">{saveFile.mana}</span>
            </span>
            <span className="stat fade">
              Gold: <span id="goldText" className="fade">{saveFile.gold}</span>
            </span>
          </div>
          {locationInfo !== null ? (
            <>
              <div id="controls">
                <button id="button1" onClick={handleBtnClick}>
                  {locations[locationInfo]["button text"][0]}
                </button>
                <button id="button2" onClick={handleBtnClick}>
                  {locations[locationInfo]["button text"][1]}
                </button>
                <button id="button3" onClick={handleBtnClick}>
                  {locations[locationInfo]["button text"][2]}
                </button>
                {locations[locationInfo]["button text"][3] ? (
                  <button id="button4" onClick={handleBtnClick}>
                    {locations[locationInfo]["button text"][3]}
                  </button>
                ) : (
                  <button id="button4" onClick={handleBtnClick} disabled>
                    {locations[locationInfo]["button text"][3]}
                  </button>
                )}
              </div>
              <div id="monsterStats">
                <span className="stat fade">
                  Monster Name:{" "}
                  <strong>
                    <span id="monsterName" className="fade"></span>
                  </strong>
                </span>
                <span className="stat fade">
                  Health:{" "}
                  <strong>
                    <span id="monsterHealthText" className="fade"></span>
                  </strong>
                </span>
              </div>
              <div id="text">
                {/* {gameText} */}
                </div>
            </>
          ) : (
            <>
              <div id="controls">
                <button
                  id="button1"
                  onClick={handleBtnClick}
                >
                  Shop
                </button>
                <button
                  id="button2"
                  onClick={handleBtnClick}
                >
                  Walk through town
                </button>
                <button
                  id="button3"
                  onClick={handleBtnClick}
                >
                  Continue onwards to town2 name undecided
                </button>
                <button id="button4" disabled>
                  Leave Store
                </button>
              </div>
              <div id="monsterStats">
                <span className="stat">
                  Monster Name:{" "}
                  <strong>
                    <span id="monsterName"></span>
                  </strong>
                </span>
                <span className="stat">
                  Health:{" "}
                  <strong>
                    <span id="monsterHealthText"></span>
                  </strong>
                </span>
              </div>
              <div id="text">
                {/* Welcome to my first game */}
                </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Play;
