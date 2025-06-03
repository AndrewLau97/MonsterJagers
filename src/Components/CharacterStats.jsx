import { useEffect } from "react";
import VillageOneBG from "../assets/Background_images/VillageOne.jpg";
import VillageTwoBG from "../assets/Background_images/VillageTwo.jpg";
import VillageThreeBG from "../assets/Background_images/VillageThree.jpg";

const CharacterStats = ({ saveFile, setLocationInfo }) => {
  useEffect(() => {
    function changeBackground(saveFile) {
      const village = {
        1: () => {
          setLocationInfo(0)
          background.style.backgroundImage = `url(${VillageOneBG})`;
        },
        2: () => {
          setLocationInfo(21)
          background.style.backgroundImage = `url(${VillageTwoBG})`;
        },
        3: () => {
          setLocationInfo(22)
          background.style.backgroundImage = `url(${VillageThreeBG})`;
        },
        4:()=>{
          setLocationInfo(23);
          //background later - inside castle
        }
      };
      village[saveFile.area]();
    }
    changeBackground(saveFile);
  }, []);

  return (
    <>
      <div id="stats">
        <span className="stat fade">
          Lvl:{" "}
          <span id="lvlText" className="fade">
            {saveFile.level}
          </span>
        </span>
        <span className="stat fade">
          XP:{" "}
          <span id="xpText" className="fade">
            {saveFile.xp}
          </span>
        </span>
        <span className="stat fade">
          Health:{" "}
          <span id="healthText" className="fade">
            {saveFile.health}
          </span>
        </span>
        <span className="stat fade">
          Mana:{" "}
          <span id="manaText" className="fade">
            {saveFile.mana}
          </span>
        </span>
        <span className="stat fade">
          Gold:{" "}
          <span id="goldText" className="fade">
            {saveFile.gold}
          </span>
        </span>
      </div>
    </>
  );
};

export default CharacterStats;
