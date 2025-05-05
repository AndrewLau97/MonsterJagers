import slimeBG from "../assets/Background_images/SlimeHabitat.jpg"
import wizardTowerBG from "../assets/Background_images/WizardsTower.jpg"
import elementalPlainBG from "../assets/Background_images/ElementalPlain.jpg"
import { goFight } from "./ExploreFn";

function fightSlime(setLocation, saveFile, setGameText) {
  background.style.backgroundImage = `url(${slimeBG})`;
  const monsterType='slimes'
  selectMonster(setLocation, saveFile, setGameText, monsterType)
}
function fightWizard(setLocation, saveFile, setGameText) {
  background.style.backgroundImage = `url(${wizardTowerBG})`;
  const monsterType='wizards'
  selectMonster(setLocation, saveFile, setGameText, monsterType)
}
function fightElemental(setLocation, saveFile, setGameText) {
  background.style.backgroundImage = `url(${elementalPlainBG})`;
  const monsterType='elementals'
  selectMonster(setLocation, saveFile, setGameText, monsterType)
}

function selectMonster(setLocation, _saveFile, setGameText, monsterType){
  const attribute=Math.random()
  let fighting;
  if(attribute<1/3){
    fighting=0
  }else if(attribute<2/3){
    fighting=1
  }else{
    fighting=2
  }
  goFight(setLocation, _saveFile, setGameText, monsterType, fighting)
}


export { fightSlime, fightWizard, fightElemental };
