import { useEffect } from "react";
import VillageOneBG from "../assets/Background_images/VillageOne.jpg";
import VillageTwoBG from "../assets/Background_images/VillageTwo.jpg";
import VillageThreeBG from "../assets/Background_images/VillageThree.jpg";
import { healthAndManaFunction } from "../GameData/InnFn";
import { updateUIBars } from "../GameFn/textDisplayFn";

const CharacterStats = ({ saveFile, setLocationInfo }) => {
  const [maxHealth, maxMana] = healthAndManaFunction(saveFile);
  useEffect(() => {
    function changeBackground(saveFile) {
      updateUIBars(saveFile,`health`)
      updateUIBars(saveFile,`xp`)
      updateUIBars(saveFile,`mana`)
      const village = {
        1: () => {
          setLocationInfo(0);
          background.style.backgroundImage = "none";
          scene.style.backgroundImage = `url(${VillageOneBG})`;
        },
        2: () => {
          setLocationInfo(21);
          background.style.backgroundImage = "none";
          scene.style.backgroundImage = `url(${VillageTwoBG})`;
        },
        3: () => {
          setLocationInfo(22);
          background.style.backgroundImage = "none";
          scene.style.backgroundImage = `url(${VillageThreeBG})`;
        },
        4: () => {
          setLocationInfo(23);
          //background later - inside castle
        },
      };
      village[saveFile.area]();
    }
    changeBackground(saveFile);
  }, []);

  return (
    <>
      <div id="playerStats" className="rpgui-container framed-golden-2">
        <div id="noBars">
          <span className="stat fade">
            Lvl:{" "}
            <span id="lvlText" className="fade">
              {saveFile.level}
            </span>
          </span>
          <span className="stat fade">
            Gold:{" "}
            <span id="goldText" className="fade">
              {saveFile.gold}
            </span>
          </span>
        </div>
        <div id="bars">
          <div id="alignBar">
            <span className="stat fade">HP: </span>
            <div id="healthBar">
              <div id="leftBar"></div>
              <div id="healthAmount"></div>
              <div id="rightBar"></div>
            </div>
            <span id="healthText" className="fade">
              <span id="currentHealth" className="stat fade">
                {saveFile.health}
              </span>
              /
              <span id="maxHealth" className="stat fade">
                {maxHealth}
              </span>
            </span>
          </div>
          <div id="alignBar">
            <span className="stat fade">MP: </span>
            <div id="manaBar">
              <div id="leftBar"></div>
              <div id="manaAmount"></div>
              <div id="rightBar"></div>
            </div>
            <span id="manaText" className="fade">
              <span id="currentMana" className="stat fade">
                {saveFile.mana}
              </span>
              /
              <span id="maxMana" className="stat fade">
                {maxMana}
              </span>
            </span>
          </div>
          <div id="alignBar">
            <span className="stat fade">
              XP: <span id="xpText" className="fade"></span>
            </span>
            <div id="xpBar">
              <div id="leftBar"></div>
              <div id="xpAmount"></div>
              <div id="rightBar"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterStats;
