import {
  innRestText,
  levelUpAtkText,
  levelUpDefText,
  levelUpMpText,
  levelUpText,
  noLevelUpText,
  noMoneyInnText,
  noNeedInnRestText,
} from "./GameText";
import updateData from "./UpdateDataBase";

function healthAndManaFunction(saveFile){
  const maxHealth = 100 + (saveFile.stats.hp - 1) * 10;
  const maxMana= 50+(saveFile.stats.mp-1)*10;
  function restoreHealthAndMana(saveFile){
    healthText.innerText = maxHealth;
    manaText.innerText=maxMana
    saveFile.mana = maxMana
    saveFile.health = maxHealth;
    updateData(saveFile);
  }
  return [maxHealth,maxMana, restoreHealthAndMana]
}

function restAtInn(_setLocation, saveFile, setGameText) {
    const [maxHealth,maxMana,restoreHealthAndMana]=healthAndManaFunction(saveFile)
    if(saveFile.health===maxHealth&&saveFile.mana===maxMana){
        setGameText(noNeedInnRestText())
    }else{
        if (saveFile.gold >= 20) {
          restoreHealthAndMana(saveFile)
          goldText.innerText -= 20;
          saveFile.gold -= 20;
          updateData(saveFile);
          setGameText(innRestText());
        } else {
          setGameText(noMoneyInnText());
        }
    }
}

function levelUp(setLocation, saveFile, setGameText) {
  if (saveFile.xp >= 100 * saveFile.level) {
    setLocation(16);
    setGameText(levelUpText());
  } else {
    const xpRequired=100 * saveFile.level - saveFile.xp
    setGameText(noLevelUpText(xpRequired));
  }
}

function levelAtk(setLocation, saveFile, setGameText) {
    const gameText=levelUpAtkText()
    const statLeveled="atk"
    handleLevelUp(setLocation, saveFile, setGameText, statLeveled, gameText)
}

function levelDef(setLocation, saveFile, setGameText) {
    const gameText=levelUpDefText()
    const statLeveled="def"
    handleLevelUp(setLocation, saveFile, setGameText, statLeveled, gameText)
}

function levelMp(setLocation, saveFile, setGameText) {
    const gameText=levelUpMpText()
    const statLeveled="mp"
    handleLevelUp(setLocation, saveFile, setGameText, statLeveled, gameText)
}




function handleLevelUp(setLocation, saveFile, setGameText, statLeveled, statLeveledText){
  saveFile.xp -= (100*saveFile.level);
  saveFile.level += 1;
  saveFile.stats[statLeveled] += 1;
  saveFile.stats.hp+=1;
  updateData(saveFile)
  healthAndManaFunction(saveFile)[2](saveFile)
  setGameText(statLeveledText)
  setLocation(15)
}

export { levelUp, restAtInn, levelDef, levelMp, levelAtk, healthAndManaFunction };
