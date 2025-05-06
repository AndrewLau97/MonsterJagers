import shopBG from "../assets/Background_images/Shop.jpg";
import blacksmithBG from "../assets/Background_images/Blacksmith.jpg";
import enchantedWeaponBG from "../assets/Background_images/EnchantedWeapons.jpg";
import magicBG from "../assets/Background_images/MagicBooks.jpg";
import potionsBG from "../assets/Background_images/Potions.jpg";
import VillageOneBG from "../assets/Background_images/VillageOne.jpg";
import monsters from "./Monsters";
import innBG from "../assets/Background_images/Inn.jpg";
import outskirtsBG from "../assets/Background_images/Outskirts.jpg";
import {
  defeatMonsterText,
  enterInnText,
  monsterEncounterText,
  rebirthText,
  testText,
} from "./GameText";
import updateData from "./UpdateDataBase";
import { healthAndManaFunction } from "./InnFn";

function dummyFunction() {
  console.log("Dummy function");
}
function goTown(setLocation, _saveFile, setGameText) {
  setLocation(0);
  setGameText("You return to town, what would you want to do?");
  button4.style.display = "none";
  button4.setAttribute("disabled", "");
  monsterStats.style.display = "none";
  background.style.backgroundImage = `url(${VillageOneBG})`;
}
function shop(setLocation, _saveFile, setGameText) {
  setLocation(1);
  setGameText("Shopkeeper: What would you like to buy?");
  button4.style.display = "block";
  button4.removeAttribute("disabled");
  background.style.backgroundImage = `url(${shopBG})`;
}
function buyEquipment(setLocation, _saveFile, setGameText) {
  setLocation(2);
  setGameText("You enter the blacksmith area");
  background.style.backgroundImage = `url(${blacksmithBG})`;
}
function buyElementalWeapon(setLocation, _saveFile, setGameText) {
  setLocation(3);
  setGameText("You enter the enchanted weapons area");
  background.style.backgroundImage = `url(${enchantedWeaponBG})`;
}
function buyMagic(setLocation, _saveFile, setGameText) {
  setLocation(4);
  setGameText("What magic would you like to learn?");
  background.style.backgroundImage = `url(${magicBG})`;
}
function buyItems(setLocation, _saveFile, setGameText) {
  setLocation(5);
  setGameText("What items would you like to buy?");
  button4.style.display = "none";
  button4.setAttribute("disabled", "");
  background.style.backgroundImage = `url(${potionsBG})`;
}

function explore(setLocation, _saveFile, setGameText) {
  setLocation(6);
  setGameText("Where would you like to go?");
  button4.style.display = "block";
  button4.removeAttribute("disabled");
}
function goHunt(setLocation, _saveFile, setGameText) {
  setLocation(7);
  setGameText("Which territory would you like to hunt at?");
  monsterStats.style.display = "none";
  background.style.backgroundImage = `url(${outskirtsBG})`;
}
function goFight(setLocation, _saveFile, setGameText, monsterType, fighting) {
  setLocation(8);
  monsterStats.style.display = "block";
  const monsterHealth = monsters[monsterType][fighting].health;
  monsterName.innerText = monsters[monsterType][fighting].name;
  monsterHealthText.innerText = monsterHealth;
  button4.style.display = "block";
  button4.removeAttribute("disabled");
  setGameText(monsterEncounterText(monsters[monsterType][fighting].name));
}
function goExplore() {
  console.log("go explore");
}
function restInn(setLocation, _saveFile, setGameText) {
  setLocation(15);
  setGameText(enterInnText());
  background.style.backgroundImage = `url(${innBG})`;
  monsterStats.style.display = "none";
}
function campOutside() {
  console.log("camp outside");
  //good nights rest - fully healed
  //bad weather causes you to sleep poorly heals 50%
  //hearing noise outside, you did not rest well, heals 25%
  //encounter a bandit - fight or pay off the bandit
  //pack of wolves - fight or run and take damage from running
}

function encounterBandits() {}

function encounterWolves() {}

function campRestedAmount(setLocation, saveFile, setGameText, timeRested) {
  const [maxHealth, maxMana] = healthAndManaFunction(saveFile);
  const missingHealth = maxHealth - saveFile.health;
  const missingMana = maxMana - saveFile.mana;
  saveFile.health += Math.floor(missingHealth * timeRested);
  saveFile.mana += Math.floor(missingMana * timeRested);
  healthText.innerText = saveFile.health;
  manaText.innerText = saveFile.mana;
  updateData(saveFile);
  setLocation(7);
}

function nextArea() {
  console.log("head to next area");
  console.log(testText.purchase.purchasedMagic('test'))
}
function lose(setLocation, _saveFile, setGameText) {
  setLocation(13);
  setGameText("You have died, would you like to restart your adventure?");
}

function defeatMonster(
  setLocation,
  saveFile,
  setGameText,
  monster,
  damageDealt
) {
  // const goldGain = Math.floor(monster.level * 4.2);
  const goldGain = Math.floor(monster.level * (5.5 * Math.random() + 1));
  const xpGain = Math.floor(monster.level * (3.5 * Math.random() + 1));
  setLocation(14);
  setGameText(defeatMonsterText(monster.name, goldGain, xpGain, damageDealt));
  saveFile.gold += goldGain;
  saveFile.xp += xpGain;
  updateData(saveFile);
  goldText.innerText = saveFile.gold;
  xpText.innerText = saveFile.xp;
  button4.style.display = "block";
  button4.removeAttribute("disabled");
}

function restart(setLocation, _saveFile, setGameText) {
  updateData({
    xp: 0,
    gold: 50,
    level: 1,
    stats: {
      hp: 1,
      mp: 1,
      atk: 1,
      def: 1,
    },
    health: 100,
    mana: 50,
    potions: {
      hp: 0,
      mp: 0,
    },
    inventory: {
      shield: ["No Shield"],
      fireMagic: [],
      earthMagic: [],
      fireWeapon: [],
      waterMagic: [],
      earthWeapon: [],
      waterWeapon: [],
      standardWeapon: ["stick"],
    },
  });
  setLocation(0);
  healthText.innerText = 100;
  manaText.innerText = 50;
  goldText.innerText = 50;
  xpText.innerText = 0;
  setGameText(rebirthText());
  button4.style.display = "none";
  button4.setAttribute("disabled", "");
  monsterStats.style.display = "none";
  background.style.backgroundImage = `url(${VillageOneBG})`;
}

export {
  explore,
  goHunt,
  goFight,
  goExplore,
  restInn,
  campOutside,
  dummyFunction,
  goTown,
  shop,
  buyEquipment,
  buyElementalWeapon,
  buyMagic,
  buyItems,
  nextArea,
  restart,
  lose,
  defeatMonster,
};
