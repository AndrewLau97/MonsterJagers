import slimeBG from "../assets/Background_images/SlimeHabitat.jpg"
import wizardTowerBG from "../assets/Background_images/WizardsTower.jpg"
import elementalPlainBG from "../assets/Background_images/ElementalPlain.jpg"
import { goFight } from "./ExploreFn";

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
  background.style.backgroundImage = `url(${elementalPlainBG})`;
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

function selectMonster(setLocation, saveFile, setGameText, monsterType, monsterRange){
  const fighting=Math.floor(Math.random()*monsterRange)
  // const attribute=Math.random()
  // let fighting;
  // if(attribute<1/3){
  //   fighting=0
  // }else if(attribute<2/3){
  //   fighting=1
  // }else{
  //   fighting=2
  // }
  goFight(setLocation, saveFile, setGameText, monsterType, fighting)
}


export { fightSlime, fightWizard, fightElemental, fightBandits, fightWolves };
