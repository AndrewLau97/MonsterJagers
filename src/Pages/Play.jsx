import CharacterStats from "../Components/CharacterStats";
import Control from "../Components/Controls";
import DisplayText from "../Components/DisplayText";
import MonsterStats from "../Components/MonsterStats";
import { useEffect, useState } from "react";
import { getData } from "../GameFn/dateBaseFn";
import supabase from "../config/supabaseClient";
import shopBG from "../assets/Background_images/Shop.jpg";
import blacksmithBG from "../assets/Background_images/Blacksmith.jpg";
import enchantedWeaponBG from "../assets/Background_images/EnchantedWeapons.jpg";
import magicBG from "../assets/Background_images/MagicBooks.jpg";
import potionsBG from "../assets/Background_images/Potions.jpg";
import VillageOneBG from "../assets/Background_images/VillageOne.jpg";
import VillageTwoBG from "../assets/Background_images/VillageTwo.jpg";
import VillageThreeBG from "../assets/Background_images/VillageThree.jpg";
import innBG from "../assets/Background_images/Inn.jpg";
import outskirtsBG from "../assets/Background_images/Outskirts.jpg";
import slimeBG from "../assets/Background_images/SlimeHabitat.jpg";
import wizardBG from "../assets/Background_images/WizardsTower.jpg";
import elementalBG from "../assets/Background_images/ElementalPlane.jpg";
import LocationBackground from "../Components/LocationBackground";

// import { preloadImg } from "../GameData/ExploreFn";

const Play = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [saveFile, setSaveFile] = useState(null);
  const [gameText, setGameText] = useState("Welcome to my first game");
  const [backgrounds, setBackgrounds] = useState([]);
  const allBackgrounds = [
    VillageOneBG,
    VillageTwoBG,
    VillageThreeBG,
    shopBG,
    blacksmithBG,
    enchantedWeaponBG,
    magicBG,
    potionsBG,
    innBG,
    outskirtsBG,
    slimeBG,
    wizardBG,
    elementalBG,
  ];
  const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
  };

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
    setBackgrounds(allBackgrounds);
    allBackgrounds.forEach(preloadImage);
  }, []);

  return (
    <>
      {!saveFile ? (
        <p>loading</p>
      ) : (
        <>
          <div id="game" className="rpgui-content">
            <LocationBackground/>
            <MonsterStats />
            <DisplayText gameText={gameText} />
            <div id="player">
            <CharacterStats
              saveFile={saveFile}
              setLocationInfo={setLocationInfo}
            />
            <Control
              locationInfo={locationInfo}
              setLocationInfo={setLocationInfo}
              saveFile={saveFile}
              setGameText={setGameText}
              // backgrounds={backgrounds}
            />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Play;
