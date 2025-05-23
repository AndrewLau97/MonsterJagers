//rename to combatFn as all fns inside here are to do with combat
//need to add a run function and check against escape ability
//if able to run, go town, if not, state unable to run

import monsters from "./Monsters";
import { gameItems } from "./Items";
import { updateData } from "../GameFn/dateBaseFn";
import { combatText } from "./GameText/CombatText";
import { lose, defeatMonster, goTown } from "./ExploreFn";

function isHit() {
  return Math.random() > 0.05;
}
function isMonsterHit(health) {
  return Math.random() > 0.1 || health < 20;
}

function isCrit() {
  return Math.random() < 0.1;
}

function monstersAtkDamage(power, shieldDefenceStats, defStats) {
  const hit =
    power * 5 -
    defStats ** 3 -
    (shieldDefenceStats > 0 ? shieldDefenceStats : 0);
  return hit > 0 ? hit : 1;
}

function monstersTurn(setLocation, saveFile, setGameText) {
  const { inventory, stats } = saveFile;
  let monster;
  let type;
  for (const monsterType in monsters) {
    if (
      monsters[monsterType].filter(
        (selectedmonster) => selectedmonster.name === monsterName.innerText
      ).length
    ) {
      type = monsterType;
      monster = monsters[monsterType].filter(
        (selectedmonster) => selectedmonster.name === monsterName.innerText
      )[0];
      break;
    }
  }
  function monsterAttacks() {
    if (isHit()) {
      setGameText(combatText.monstersTurn[type].attacks(monster.name));
      const shieldDefence = gameItems.shield.filter(
        (shield) => shield.name === inventory.shield[0]
      )[0].defence;
      const damageTaken = monstersAtkDamage(
        monster.power,
        shieldDefence,
        stats.def
      );
      setGameText(
        (prevGameText) =>
          (prevGameText += combatText.monstersTurn.takeDamage(damageTaken))
      );

      if (saveFile.health > damageTaken) {
        healthText.innerText -= damageTaken;
        saveFile.health -= damageTaken;
        updateData(saveFile);
      } else {
        healthText.innerText = 0;
        saveFile.health = 0;
        updateData(saveFile);
        lose(setLocation, saveFile, setGameText);
      }
    } else {
      setGameText(combatText.monstersTurn[type].misses(monster.name));
    }
  }
  return { monster, monsterAttacks };
}

function playersTurn(setLocation, saveFile, setGameText, monster, weaponType) {
  const element = weaponType.split(/(?=[A-Z])/)[0];
  const weaponOrMagic = weaponType.split(/(?=[A-Z])/)[1].toLowerCase();
  const { inventory, stats, health } = saveFile;
  const monsterHealth = monsterHealthText.innerText;
  const weaponUsed = gameItems[weaponType].filter(
    (weapon) => weapon.name === inventory[weaponType][0]
  );
  const resistance = Object.keys(monster).find((key) => {
    if (Array.isArray(monster[key])) {
      return monster[key].includes(weaponUsed[0].attribute);
    }
    return monster[key] === weaponUsed[0].attribute;
  });
  const damageCalculation = {
    resistant: 0.5,
    weakness: 1.5,
    neutral: 1,
    immune: 0,
  };
  let damageDealt = Math.floor(
    (weaponUsed[0].power + stats.atk * 3) * damageCalculation[resistance]
  );
  let result;
  if (isMonsterHit(health)) {
    result = "attacks";
    if (isCrit()) {
      damageDealt = Math.floor(damageDealt * 1.5);
    }
  } else {
    damageDealt = 0;
    result = "misses";
  }
  if (element === "standard") {
    setGameText(
      (prevGameText) =>
        (prevGameText += combatText.playersTurn[weaponOrMagic].standard[result](
          monster.name,
          weaponUsed[0].name
        ))
    );
  } else {
    setGameText(
      (prevGameText) =>
        (prevGameText +=
          combatText.playersTurn[
            weaponOrMagic.element[result](
              monster.name,
              weaponUsed[0].name,
              element
            )
          ])
    );
  }

  if (monsterHealth > damageDealt) {
    monsterHealthText.innerText -= damageDealt;
    setGameText(
      (prevGameText) =>
        (prevGameText += combatText.playersTurn.dealDamage(
          resistance,
          damageDealt
        ))
    );
    goFightButtons(setLocation);
  } else {
    monsterHealthText.innerText = 0;
    defeatMonster(setLocation, saveFile, setGameText, monster, damageDealt);
  }
}

function reduceMana(manaNeeded, saveFile) {
  manaText.innerText -= manaNeeded;
  saveFile.mana -= manaNeeded;
  updateData(saveFile);
}

function sortActions(setLocation, saveFile, setGameText, weaponType) {
  const { monster, monsterAttacks } = monstersTurn(
    setLocation,
    saveFile,
    setGameText
  );
  if (checkOwned(saveFile, weaponType, setGameText)) {
    if (weaponType.includes("Weapon")) {
      monsterAttacks();
      if (saveFile.health > 0) {
        playersTurn(setLocation, saveFile, setGameText, monster, weaponType);
      }
    } else if (weaponType.includes("Magic")) {
      const manaNeeded = checkEnoughMana(saveFile, weaponType);
      if (manaNeeded) {
        monsterAttacks();
        if (saveFile.health > 0) {
          reduceMana(manaNeeded, saveFile);
          playersTurn(setLocation, saveFile, setGameText, monster, weaponType);
        }
      } else {
        setGameText(combatText.playersTurn.magic.element.noMana());
      }
    }
  }
}

function useNormalWeapon(setLocation, saveFile, setGameText) {
  const weaponType = "standardWeapon";
  sortActions(setLocation, saveFile, setGameText, weaponType);
}

function checkOwned(saveFile, type, setGameText) {
  if (saveFile.inventory[type].length) {
    return true;
  } else {
    if (type.includes("Weapon")) {
      setGameText(combatText.playersTurn.weapon.element.noElement());
    } else {
      setGameText(combatText.playersTurn.magic.element.noMagic);
    }
    return false;
  }
}

function useElementalWeapon(setLocation, _saveFile, setGameText) {
  setLocation(10);
  button4.style.display = "inline";
  button4.removeAttribute("disabled");
  setGameText(combatText.controls.elementChoice());
}

function useFireWeapon(setLocation, saveFile, setGameText) {
  const weaponType = "fireWeapon";
  sortActions(setLocation, saveFile, setGameText, weaponType);
}

function useWaterWeapon(setLocation, saveFile, setGameText) {
  const weaponType = "waterWeapon";
  sortActions(setLocation, saveFile, setGameText, weaponType);
}
function useEarthWeapon(setLocation, saveFile, setGameText) {
  const weaponType = "earthWeapon";
  sortActions(setLocation, saveFile, setGameText, weaponType);
}

function goAttack(setLocation, _saveFile, setGameText) {
  setLocation(9);
  button4.style.display = "none";
  button4.setAttribute("disabled", "");
  setGameText(combatText.controls.meleeChoice());
}

function goFightButtons(setLocation, _saveFile, setGameText) {
  setLocation(8);
  button4.style.display = "inline";
  button4.removeAttribute("disabled");
  if (setGameText) {
    setGameText(combatText.controls.goBackChoice());
  }
}

function useMagic(setLocation, _saveFile, setGameText) {
  setLocation(11);
  button4.style.display = "inline";
  button4.removeAttribute("disabled");
  setGameText(combatText.controls.magicChoice());
}

function useFireMagic(setLocation, saveFile, setGameText) {
  const weaponType = "fireMagic";
  sortActions(setLocation, saveFile, setGameText, weaponType);
}

function useWaterMagic(setLocation, saveFile, setGameText) {
  const weaponType = "waterMagic";
  sortActions(setLocation, saveFile, setGameText, weaponType);
}
function useEarthMagic(setLocation, saveFile, setGameText) {
  const weaponType = "earthMagic";
  sortActions(setLocation, saveFile, setGameText, weaponType);
}

function useItems(setLocation, _saveFile, setGameText) {
  setGameText(combatText.controls.potionChoice());
  setLocation(12);
  button4.style.display = "none";
  button4.setAttribute("disabled", "");
}

function usePotion(setLocation, saveFile, type, maxAmount) {
  const restoredAmount = calcRestoredAmount(type, maxAmount, saveFile);
  setLocation(8);
  button4.style.display = "inline";
  button4.removeAttribute("disabled");
  type === "health"
    ? (healthText.innerText = restoredAmount)
    : (manaText.innerText = restoredAmount);
  saveFile[type] = restoredAmount;
  updateData(saveFile);
}

function useHpPotion(setLocation, saveFile, setGameText) {
  if (saveFile.potions.hp > 0) {
    const maxHealth = 100 + (saveFile.stats.hp - 1) * 10;
    if (saveFile.health < maxHealth) {
      usePotion(setLocation, saveFile, "health", maxHealth);
      setGameText(combatText.potions.recoverHealth());
    } else {
      setGameText(combatText.potions.healthMax());
    }
  } else {
    setGameText(combatText.potions.noPotion("hp"));
  }
}

function useMpPotion(setLocation, saveFile, setGameText) {
  if (saveFile.potions.mp > 0) {
    const maxMana = 50 + (saveFile.stats.mp - 1) * 10;
    if (saveFile.mana < maxMana) {
      usePotion(setLocation, saveFile, "mana", maxMana);
      setGameText(combatText.potions.recoverMana());
    } else {
      setGameText(combatText.potions.manaMax());
    }
  } else {
    setGameText(combatText.potions.noPotion("mp"));
  }
}

function calcRestoredAmount(type, maxAmount, saveFile) {
  const restoredAmount =
    saveFile[type] + Math.floor(maxAmount / 2) > maxAmount
      ? maxAmount
      : saveFile[type] + Math.floor(maxAmount / 2);
  return restoredAmount;
}

function checkEnoughMana(saveFile, type) {
  const manaNeeded = gameItems[type].filter(
    (magic) => magic.name === saveFile.inventory[type][0]
  )[0].manaCost;
  if (saveFile.mana >= manaNeeded) {
    return manaNeeded;
  } else {
    return 0;
  }
}

function escapeFromFight(setLocation,saveFile,setGameText){
  if(saveFile.canEscape){
    goTown(setLocation,saveFile,setGameText,combatText.escape.success())
  }else{
    setGameText(combatText.escape.failed())
  }
}

export {
  useNormalWeapon,
  useElementalWeapon,
  useFireWeapon,
  useWaterWeapon,
  useEarthWeapon,
  goAttack,
  useMagic,
  useFireMagic,
  useWaterMagic,
  useEarthMagic,
  useItems,
  useHpPotion,
  useMpPotion,
  goFightButtons,
  escapeFromFight
};
