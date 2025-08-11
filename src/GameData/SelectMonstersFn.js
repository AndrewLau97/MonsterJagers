import slimeBG from "../assets/Background_images/SlimeHabitat.jpg";
import wizardTowerBG from "../assets/Background_images/WizardsTower.jpg";
import elementalPlaneBG from "../assets/Background_images/ElementalPlane.jpg";
import { goFight } from "./ExploreFn";
import { monstersArea1 } from "./Monsters";
import { updateData } from "../GameFn/dateBaseFn";

function cantRun(saveFile) {
  saveFile.canEscape = false;
  updateData(saveFile);
}

function fightSlime(setLocation, saveFile, setGameText) {
  scene.style.backgroundImage = `url(${slimeBG})`;
  const monsterType = "slimes";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}

function fightWizard(setLocation, saveFile, setGameText) {
  scene.style.backgroundImage = `url(${wizardTowerBG})`;
  const monsterType = "wizards";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}

function fightElemental(setLocation, saveFile, setGameText) {
  scene.style.backgroundImage = `url(${elementalPlaneBG})`;
  const monsterType = "elementals";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}

function fightBandits(setLocation, saveFile, setGameText) {
  cantRun(saveFile);
  //background to be determined
  const monsterType = "bandits";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 4);
}

function fightWolves(setLocation, saveFile, setGameText) {
  cantRun(saveFile);
  //background to be determined
  const monsterType = "wolves";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}

function fightMimic(setLocation, saveFile, setGameText) {
  cantRun(saveFile);
  //background to be determined
  const monsterType = "mimics";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}
function fightDemon(setLocation, saveFile, setGameText) {
  //background to be determined
  const monsterType = "demon";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}
function fightHellhound(setLocation, saveFile, setGameText) {
  //background to be determined
  const monsterType = "hellhound";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}
function fightSkeleton(setLocation, saveFile, setGameText) {
  //background to be determined
  const monsterType = "skeleton";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}
function fightZombie(setLocation, saveFile, setGameText) {
  //background to be determined
  const monsterType = "zombies";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}
function fightVampire(setLocation, saveFile, setGameText) {
  //background to be determined
  const monsterType = "vampires";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}
function fightWerewolf(setLocation, saveFile, setGameText) {
  //background to be determined
  const monsterType = "werewolves";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}
function fightGiant(setLocation, saveFile, setGameText) {
  //background to be determined
  const monsterType = "giant";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}
function fightOgre(setLocation, saveFile, setGameText) {
  //background to be determined
  const monsterType = "ogre";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}
function fightOrc(setLocation, saveFile, setGameText) {
  //background to be determined
  const monsterType = "orc";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}
function fightGolem(setLocation, saveFile, setGameText) {
  //background to be determined
  const monsterType = "golems";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}
function fightBehemoth(setLocation, saveFile, setGameText) {
  //background to be determined
  const monsterType = "behemoth";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}
function fightTitan(setLocation, saveFile, setGameText) {
  //background to be determined
  const monsterType = "titans";
  selectMonster(setLocation, saveFile, setGameText, monsterType, 3);
}

function fightBoss(setLocation, saveFile, setGameText) {
  saveFile.isBossFight=true;
  cantRun(saveFile);
  const monsterType = "boss";
  selectMonster(setLocation, saveFile, setGameText, monsterType);
}

function randomEncounter(setLocation, saveFile, setGameText) {
  //background to be determined
  const allMonsters = Object.keys(monstersArea1);
  const monsterType =
    allMonsters[Math.floor(Math.random() * allMonsters.length)];
  const monsterRange = monstersArea1[monsterType].length;
  selectMonster(setLocation, saveFile, setGameText, monsterType, monsterRange);
}

function selectMonster(
  setLocation,
  saveFile,
  setGameText,
  monsterType,
  monsterRange
) {
  let fighting;
  if (monsterType === "boss") {
    fighting = saveFile.area - 1;
  } else {
    fighting = Math.floor(Math.random() * monsterRange);
  }
  goFight(setLocation, saveFile, setGameText, monsterType, fighting);
}

export {
  fightSlime,
  fightWizard,
  fightElemental,
  fightBandits,
  fightWolves,
  fightMimic,
  randomEncounter,
  fightDemon,
  fightHellhound,
  fightSkeleton,
  fightZombie,
  fightVampire,
  fightWerewolf,
  fightBoss,
  fightGiant,
  fightOgre,
  fightOrc,
  fightGolem,
  fightBehemoth,
  fightTitan,
};
