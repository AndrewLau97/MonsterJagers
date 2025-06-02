import { useEffect } from "react";
import VillageOneBG from "../assets/Background_images/VillageOne.jpg";
import VillageTwoBG from "../assets/Background_images/VillageTwo.jpg";

const CharacterStats = ({ saveFile }) => {
  useEffect(() => {
    function changeBackground(saveFile) {
      const village = {
        1: () => {
          background.style.backgroundImage = `url(${VillageOneBG})`;
        },
        2: () => {
          background.style.backgroundImage = `url(${VillageTwoBG})`;
        },
        3: () => {},
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
