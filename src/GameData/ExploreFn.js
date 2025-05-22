import shopBG from "../assets/Background_images/Shop.jpg";
import blacksmithBG from "../assets/Background_images/Blacksmith.jpg";
import enchantedWeaponBG from "../assets/Background_images/EnchantedWeapons.jpg";
import magicBG from "../assets/Background_images/MagicBooks.jpg";
import potionsBG from "../assets/Background_images/Potions.jpg";
import VillageOneBG from "../assets/Background_images/VillageOne.jpg";
import monsters from "./Monsters";
import innBG from "../assets/Background_images/Inn.jpg";
import outskirtsBG from "../assets/Background_images/Outskirts.jpg";
import { explorationText } from "./GameText/Exploration";
import { combatText } from "./GameText/CombatText";
import { purchaseText } from "./GameText/PurchaseText";
import { innText } from "./GameText/InnText";
import { updateData } from "../GameFn/dateBaseFn";
import { healthAndManaFunction } from "./InnFn";
import { disableButtons, enableButtons } from "../GameFn/textDisplayFn";
import { fightMimic, randomEncounter } from "./SelectMonstersFn";

function dummyFunction() {
  console.log("Dummy function");
}

function goTown(setLocation, _saveFile, setGameText) {
  enableButtons(1, 2, 3);
  disableButtons(4);
  setLocation(0);
  setGameText(explorationText.baseTown.returnTown());
  monsterStats.style.display = "none";
  background.style.backgroundImage = `url(${VillageOneBG})`;
}

function shop(setLocation, _saveFile, setGameText) {
  setLocation(1);
  setGameText(purchaseText.controls.shop());
  enableButtons(4);
  background.style.backgroundImage = `url(${shopBG})`;
}

function buyEquipment(setLocation, _saveFile, setGameText) {
  setLocation(2);
  setGameText(purchaseText.controls.blacksmith());
  background.style.backgroundImage = `url(${blacksmithBG})`;
}

function buyElementalWeapon(setLocation, _saveFile, setGameText) {
  setLocation(3);
  setGameText(purchaseText.controls.enchanted());
  background.style.backgroundImage = `url(${enchantedWeaponBG})`;
}

function buyMagic(setLocation, _saveFile, setGameText) {
  setLocation(4);
  setGameText(purchaseText.controls.magic());
  background.style.backgroundImage = `url(${magicBG})`;
}

function buyItems(setLocation, _saveFile, setGameText) {
  setLocation(5);
  setGameText(purchaseText.controls.potions());
  disableButtons(4);
  background.style.backgroundImage = `url(${potionsBG})`;
}

function explore(setLocation, _saveFile, setGameText) {
  setLocation(6);
  setGameText(explorationText.baseTown.continueThroughTown());
  enableButtons(4);
}

function goHunt(setLocation, _saveFile, setGameText) {
  setLocation(7);
  setGameText(explorationText.baseTown.chooseHunt());
  monsterStats.style.display = "none";
  background.style.backgroundImage = `url(${outskirtsBG})`;
}

function goFight(setLocation, _saveFile, setGameText, monsterType, fighting) {
  setLocation(8);
  monsterStats.style.display = "inline";
  const monsterHealth = monsters[monsterType][fighting].health;

  monsterName.innerText = monsters[monsterType][fighting].name;
  monsterHealthText.innerText = monsterHealth;
  enableButtons(1, 2, 3, 4);
  setGameText(
    combatText.encounters[monsterType](monsters[monsterType][fighting].name)
  );
}
function goExploreFurther(setLocation, saveFile, setGameText) {
  const event = Math.floor(Math.random() * 3);
  if (event === 0) {
    findChest(setLocation, saveFile, setGameText);
  } else if (event === 1) {
    randomEncounter(setLocation, saveFile, setGameText);
  } else if (event === 2) {
    findNothing(setLocation, saveFile, setGameText);
  }
}
//in findNothing - make it so you have the ability to camp if you wish

function findChest(setLocation, _saveFile, setGameText) {
  setLocation(18);
  setGameText(explorationText.exploreOutTown.findChest());
  enableButtons(1, 2);
  disableButtons(3, 4);
}

function continueOn(setLocation) {
  setLocation(18);
  disableButtons(1, 2);
  enableButtons(3, 4);
}

function ignoreChest(setLocation, _saveFile, setGameText) {
  continueOn(setLocation);
  setGameText(explorationText.exploreOutTown.ignoreChest());
}

function investigateChest(setLocation, saveFile, setGameText) {
  const mimicChance = Math.random();
  if (mimicChance > 0.75) {
    mimicAttacks(setLocation, saveFile, setGameText);
  } else {
    normalChest(setLocation, saveFile, setGameText);
  }
}

function mimicAttacks(setLocation, saveFile, setGameText) {
  fightMimic(setLocation, saveFile, setGameText);
}

function normalChest(setLocation, saveFile, setGameText) {
  const multiplier = Math.floor(saveFile.level * (2 * Math.random() + 1));
  const goldInChest = multiplier * 3;
  const manaPotionsInChest = Math.floor(Math.random() * 3);
  const healthPotionsInChest = Math.floor(Math.random() * 3);
  saveFile.gold += goldInChest;
  saveFile.potions.hp += healthPotionsInChest;
  saveFile.potions.mp += manaPotionsInChest;
  updateData(saveFile);
  setGameText(
    explorationText.exploreOutTown.treasureChest(
      goldInChest,
      healthPotionsInChest,
      manaPotionsInChest
    )
  );
  continueOn(setLocation);
}

function findNothing(setLocation, _saveFile, setGameText) {
  setGameText(explorationText.exploreOutTown.findNothing());
  continueOn(setLocation);
}

function restInn(setLocation, _saveFile, setGameText) {
  setLocation(15);
  setGameText(innText.basic.enter());
  background.style.backgroundImage = `url(${innBG})`;
  monsterStats.style.display = "none";
}
function campOutside(setLocation, saveFile, setGameText) {
  //good nights rest - fully healed
  //bad weather causes you to sleep poorly heals 50%
  //hearing noise outside, you did not rest well, heals 25%
  //encounter a bandit - fight or pay off the bandit
  //pack of wolves - fight or run and take damage from running
  const encounter = Math.random();
  if (encounter < 0.25) {
    campRestedAmount(setLocation, saveFile, setGameText, 1);
  } else if (encounter < 0.5) {
    campRestedAmount(setLocation, saveFile, setGameText, 0.5);
  } else if (encounter < 0.75) {
    campRestedAmount(setLocation, saveFile, setGameText, 0.25);
  } else if (encounter < 0.875) {
    encounterBandits(setLocation, saveFile, setGameText);
  } else {
    encounterWolves(setLocation, saveFile, setGameText);
  }
}

function encounterBandits(setLocation, _saveFile, setGameText) {
  setLocation(17);
  setGameText(explorationText.camp.banditAmbush());
  monsterStats.style.display = "none";
  disableButtons(3, 4);
}

function payOffBandits(setLocation, saveFile, setGameText) {
  setLocation(0);
  setGameText(explorationText.camp.payBandits());
  escapeFromCamp(saveFile, "bandits");
  background.style.backgroundImage = `url(${VillageOneBG})`;
}

function encounterWolves(setLocation, _saveFile, setGameText) {
  setLocation(17);
  setGameText(explorationText.camp.wolfAmbush());
  monsterStats.style.display = "none";
  disableButtons(1, 2);
}

function escapeWolves(setLocation, saveFile, setGameText) {
  setLocation(0);
  setGameText(explorationText.camp.escapeWolves());
  escapeFromCamp(saveFile, "wolves");
  background.style.backgroundImage = `url(${VillageOneBG})`;
}

function escapeFromCamp(saveFile, type) {
  let lostMultiplier;
  if (type === "wolves") {
    const lostHealth = Math.floor(saveFile.health * Math.random());
    saveFile.health -= lostHealth;
    lostMultiplier = 2;
  } else {
    type === "bandits";
  }
  {
    lostMultiplier = 1;
  }
  const lostCoin = Math.floor(saveFile.gold * (Math.random() / lostMultiplier));
  saveFile.gold -= lostCoin;
  updateData(saveFile);
  goldText.innerText = saveFile.gold;
  healthText.innerText = saveFile.health;
  enableButtons(1, 2, 3);
  disableButtons(4);
}

function campRestedAmount(setLocation, saveFile, setGameText, timeRested) {
  const [maxHealth, maxMana] = healthAndManaFunction(saveFile);
  const missingHealth = maxHealth - saveFile.health;
  const missingMana = maxMana - saveFile.mana;
  saveFile.health += Math.floor(missingHealth * timeRested);
  saveFile.mana += Math.floor(missingMana * timeRested);
  updateData(saveFile);
  setLocation(7);
  healthText.innerText = saveFile.health;
  manaText.innerText = saveFile.mana;
  monsterStats.style.display = "none";
  background.style.backgroundImage = `url(${outskirtsBG})`;
  setGameText(explorationText.camp.campOutside(timeRested));
}

function nextArea() {
  console.log("head to next area");
}
function lose(setLocation, _saveFile, setGameText) {
  setLocation(13);
  setGameText(combatText.defeat.playersDefeat());
}

function defeatMonster(
  setLocation,
  saveFile,
  setGameText,
  monster,
  damageDealt
) {
  const goldGain = Math.floor(monster.level + 4 * (5.5 * Math.random() + 1));
  const xpGain = Math.floor(monster.level + 4 * (3.5 * Math.random() + 1));
  setLocation(14);
  setGameText(
    combatText.defeat.monstersDefeat(
      monster.name,
      goldGain,
      xpGain,
      damageDealt
    )
  );
  saveFile.gold += goldGain;
  saveFile.xp += xpGain;
  updateData(saveFile);
  goldText.innerText = saveFile.gold;
  xpText.innerText = saveFile.xp;
  button4.style.display = "inline";
  button4.removeAttribute("disabled");
}

function restart(setLocation, saveFile, setGameText) {
  saveFile={
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
  }
  updateData(saveFile)
  // updateData({
  //   xp: 0,
  //   gold: 50,
  //   level: 1,
  //   stats: {
  //     hp: 1,
  //     mp: 1,
  //     atk: 1,
  //     def: 1,
  //   },
  //   health: 100,
  //   mana: 50,
  //   potions: {
  //     hp: 0,
  //     mp: 0,
  //   },
  //   inventory: {
  //     shield: ["No Shield"],
  //     fireMagic: [],
  //     earthMagic: [],
  //     fireWeapon: [],
  //     waterMagic: [],
  //     earthWeapon: [],
  //     waterWeapon: [],
  //     standardWeapon: ["stick"],
  //   },
  // });
  setLocation(0);
  healthText.innerText = 100;
  manaText.innerText = 50;
  goldText.innerText = 50;
  xpText.innerText = 0;
  setGameText(combatText.defeat.rebirth());
  button4.style.display = "none";
  button4.setAttribute("disabled", "");
  monsterStats.style.display = "none";
  background.style.backgroundImage = `url(${VillageOneBG})`;
}

export {
  explore,
  goHunt,
  goFight,
  goExploreFurther,
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
  payOffBandits,
  escapeWolves,
  investigateChest,
  ignoreChest,
};
