import slimeBG from "../assets/Background_images/SlimeHabitat.jpg"
import wizardTowerBG from "../assets/Background_images/WizardsTower.jpg"
import elementalPlaneBG from "../assets/Background_images/ElementalPlane.jpg"
import { goFight } from "./ExploreFn";
import monsters from "./Monsters";

function fightSlime(setLocation, saveFile, setGameText) {
  background.style.backgroundImage = `url(${slimeBG})`;
  const monsterType='slimes'
  selectMonster(setLocation, saveFile, setGameText, monsterType,3)
}
function fightWizard(setLocation, saveFile, setGameText) {
  background.style.backgroundImage = `url(${wizardTowerBG})`;
  const monsterType='wizards'
  selectMonster(setLocation, saveFile, setGameText, monsterType,3)
}
function fightElemental(setLocation, saveFile, setGameText) {
  background.style.backgroundImage = `url(${elementalPlaneBG})`;
  const monsterType='elementals'
  selectMonster(setLocation, saveFile, setGameText, monsterType,3)
}

function fightBandits(setLocation, saveFile, setGameText){
  //background to be determined
  const monsterType='bandits'
  selectMonster(setLocation, saveFile, setGameText, monsterType,4)
}

function fightWolves(setLocation, saveFile, setGameText){
  //background to be determined
  const monsterType='wolves'
  selectMonster(setLocation, saveFile, setGameText, monsterType,3)
}

function fightMimic(setLocation, saveFile, setGameText){
  //background to be determined
  const monsterType='mimics'
  selectMonster(setLocation,saveFile,setGameText,monsterType,3)
}

function randomEncounter(setLocation,saveFile,setGameText){
  //background to be determined
  const allMonsters=Object.keys(monsters)
  const monsterType=allMonsters[Math.floor(Math.random()*allMonsters.length)]
  const monsterRange=monsters[monsterType].length;
  selectMonster(setLocation,saveFile,setGameText, monsterType, monsterRange)
}

function selectMonster(setLocation, saveFile, setGameText, monsterType, monsterRange){
  const fighting=Math.floor(Math.random()*monsterRange)
  goFight(setLocation, saveFile, setGameText, monsterType, fighting)
}


export { fightSlime, fightWizard, fightElemental, fightBandits, fightWolves, fightMimic, randomEncounter };
