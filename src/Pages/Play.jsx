import locations from "../GameData/Locations";
import supabase from "../config/supabaseClient";

import { useEffect, useState } from "react";

const Play = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [xp, setXp] = useState(0);
  const [health, setHealth] = useState(100);
  const [gold, setGold] = useState(50);
  const [saveFile, setSaveFile] = useState(null);
  const [gameText,setGameText]=useState("")

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

  const handleBtn1 = () => {
    locations[locationInfo]["button functions"][0](setLocationInfo, saveFile, setGameText);
  };
  const handleBtn2 = () => {
    locations[locationInfo]["button functions"][1](setLocationInfo, saveFile, setGameText);
  };
  const handleBtn3 = () => {
    locations[locationInfo]["button functions"][2](setLocationInfo, saveFile, setGameText);
  };
  const handleBtn4 = () => {
    locations[locationInfo]["button functions"][3](setLocationInfo, saveFile, setGameText);
  };
  return (
    <>
      {!saveFile ? (
        <p>loading</p>
      ) : (
        <div id="game">
          <div id="stats">
            <span className="stat">
              XP: <span id="xpText">{saveFile.xp}</span>
            </span>
            <span className="stat">
              Health: <span id="healthText">{saveFile.health}</span>
            </span>
            <span className="stat">
              Mana: <span id="manaText">{saveFile.mana}</span>
            </span>
            <span className="stat">
              Gold: <span id="goldText">{saveFile.gold}</span>
            </span>
          </div>
          {locationInfo !== null ? (
            <>
              <div id="controls">
                <button id="button1" onClick={handleBtn1}>
                  {locations[locationInfo]["button text"][0]}
                </button>
                <button id="button2" onClick={handleBtn2}>
                  {locations[locationInfo]["button text"][1]}
                </button>
                <button id="button3" onClick={handleBtn3}>
                  {locations[locationInfo]["button text"][2]}
                </button>
                {locations[locationInfo]["button text"][3] ? (
                  <button id="button4" onClick={handleBtn4}>
                    {locations[locationInfo]["button text"][3]}
                  </button>
                ) : (
                  <button id="button4" onClick={handleBtn4} disabled>
                    {locations[locationInfo]["button text"][3]}
                  </button>
                )}
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
              <div id="text">{gameText}</div>
            </>
          ) : (
            <>
              <div id="controls">
                <button
                  id="button1"
                  onClick={() => {
                    locations[0]["button functions"][0](setLocationInfo,saveFile, setGameText);
                  }}
                >
                  Shop
                </button>
                <button
                  id="button2"
                  onClick={() => {
                    locations[0]["button functions"][1](setLocationInfo, saveFile, setGameText);
                  }}
                >
                  Walk through town
                </button>
                <button
                  id="button3"
                  onClick={() => {
                    locations[0]["button functions"][2](setLocationInfo, saveFile, setGameText);
                  }}
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
              <div id="text">Welcome to my first game</div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Play;
