import monsters from "./Monsters";
import { gameItems } from "./Items";
import updateData from "./UpdateDataBase";
import {
  monsterAttacksText,
  takeDamage,
  dodgeAttack,
  attackMonster,
  dealDamage,
  chooseWeaponElement,
  meleeWeapon,
  monsterDodgesText,
  itemToUseText,
  goBackToFightText,
  hpMaxAlreadyText,
  useHealthPotionText,
  noPotions,
  useManaPotionText,
  mpMaxAlreadyText,
  chooseMagicElement,
  noWeapon,
  noMagic,
  notEnoughMana,
} from "./GameText";
import { lose } from "./ExploreFn";
import { defeatMonster } from "./ExploreFn";

function isHit() {
  return Math.random() > 0.05;
}
function isMonsterHit(health) {
  return Math.random() > 0.1 || health < 20;
}

function isCrit() {
  return Math.random() < 0.1;
}

function monstersAtk(level, shieldDefenceStats, defStats) {
  const hit =
    level * 5 -
    defStats ** 3 -
    (shieldDefenceStats > 0 ? shieldDefenceStats : 0);
  return hit > 0 ? hit : 1;
}

function monstersTurn(setLocation, saveFile, setGameText) {
  const { inventory, stats } = saveFile;
  let monster;
  for (const monsterType in monsters) {
    if (
      monsters[monsterType].filter(
        (selectedmonster) => selectedmonster.name === monsterName.innerText
      ).length
    ) {
      monster = monsters[monsterType].filter(
        (selectedmonster) => selectedmonster.name === monsterName.innerText
      )[0];
      break;
    }
  }
  function monsterAttacks() {
    setGameText(monsterAttacksText(monster.name));
    if (isHit()) {
      const shieldDefence = gameItems.shield.filter(
        (shield) => shield.name === inventory.shield[0]
      )[0].defence;
      const damageTaken = monstersAtk(monster.level, shieldDefence, stats.def);
      setGameText((prevGameText) => (prevGameText += takeDamage(damageTaken)));

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
      setGameText((prevGameText) => (prevGameText += dodgeAttack()));
    }
  }
  return { monster, monsterAttacks };
}

function playersTurn(setLocation, saveFile, setGameText, monster, weaponType) {
  const { inventory, stats, health } = saveFile;
  const weaponUsed = gameItems[weaponType].filter(
    (weapon) => weapon.name === inventory[weaponType][0]
  );
  const resistance = Object.keys(monster).find(
    (key) => monster[key] === weaponUsed[0].attribute
  );
  const damageCalculation = {
    resistant: 0.5,
    weakness: 1.5,
    neutral: 1,
    immune: 0,
  };
  let damageDealt = Math.floor(
    (weaponUsed[0].power + stats.atk ** 3) * damageCalculation[resistance]
  );
  const monsterHealth = monsterHealthText.innerText;

  setGameText(
    (prevGameText) =>
      (prevGameText += attackMonster(monster.name, weaponUsed[0].name))
  );
  if (isMonsterHit(health)) {
    if (isCrit()) {
      damageDealt = Math.floor(damageDealt * 1.5);
    }
  } else {
    damageDealt = 0;
    setGameText(
      (prevGameText) => (prevGameText += monsterDodgesText(monster.name))
    );
  }

  if (monsterHealth > damageDealt) {
    monsterHealthText.innerText -= damageDealt;
    setGameText(
      (prevGameText) => (prevGameText += dealDamage(resistance, damageDealt))
    );
    goFightButtons(setLocation);
  } else {
    monsterHealthText.innerText = 0;
    defeatMonster(setLocation, saveFile, setGameText, monster, damageDealt);
  }
}

function testPlayersTurn(
  setLocation,
  saveFile,
  setGameText,
  monster,
  weaponType
) {
  sortActions(setLocation, saveFile, setGameText, monster, weaponType);
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
        setGameText(notEnoughMana());
      }
    }
  }
}

function useNormalWeapon(setLocation, saveFile, setGameText) {
  // const { monster, monsterAttacks } = monstersTurn(
  //   setLocation,
  //   saveFile,
  //   setGameText
  // );
  const weaponType = "standardWeapon";
  // monsterAttacks();
  sortActions(setLocation, saveFile, setGameText, weaponType);
  // playersTurn(setLocation, saveFile, setGameText, monster, weaponType);
  // testPlayersTurn(setLocation, saveFile, setGameText, monster, weaponType);
}

function checkOwned(saveFile, type, setGameText) {
  if (saveFile.inventory[type].length) {
    return true;
  } else {
    if (type.includes("Weapon")) {
      setGameText(noWeapon());
    } else {
      setGameText(noMagic());
    }
    return false;
  }
}

function useElementalWeapon(setLocation, _saveFile, setGameText) {
  setLocation(10);
  button4.style.display = "block";
  button4.removeAttribute("disabled");
  setGameText(chooseWeaponElement());
}

function useFireWeapon(setLocation, saveFile, setGameText) {
  // const { monster, monsterAttacks } = monstersTurn(
  //   setLocation,
  //   saveFile,
  //   setGameText
  // );
  const weaponType = "fireWeapon";
  sortActions(setLocation, saveFile, setGameText, weaponType);
  // if (checkOwned(saveFile, weaponType, setGameText)) {
  //   monsterAttacks();
  //   if (saveFile.health > 0) {
  //     playersTurn(setLocation, saveFile, setGameText, monster, weaponType);
  //   }
  // }
}

function useWaterWeapon(setLocation, saveFile, setGameText) {
  // const { monster, monsterAttacks } = monstersTurn(
  //   setLocation,
  //   saveFile,
  //   setGameText
  // );
  const weaponType = "waterWeapon";
  sortActions(setLocation, saveFile, setGameText, weaponType);
  // if (checkOwned(saveFile, weaponType, setGameText)) {
  //   monsterAttacks();
  //   if (saveFile.health > 0) {
  //     playersTurn(setLocation, saveFile, setGameText, monster, weaponType);
  //   }
  // }
}
function useEarthWeapon(setLocation, saveFile, setGameText) {
  // const { monster, monsterAttacks } = monstersTurn(
  //   setLocation,
  //   saveFile,
  //   setGameText
  // );
  const weaponType = "earthWeapon";
  sortActions(setLocation, saveFile, setGameText, weaponType);
  // if (checkOwned(saveFile, weaponType, setGameText)) {
  //   monsterAttacks();
  //   if (saveFile.health > 0) {
  //     playersTurn(setLocation, saveFile, setGameText, monster, weaponType);
  //   }
  // }
}

function goAttack(setLocation, _saveFile, setGameText) {
  setLocation(9);
  button4.style.display = "none";
  button4.setAttribute("disabled", "");
  setGameText(meleeWeapon());
}

function goFightButtons(setLocation, _saveFile, setGameText) {
  setLocation(8);
  (button4.style.display = "block"), button4.removeAttribute("disabled");
  if (setGameText) {
    setGameText(goBackToFightText());
  }
}

function useMagic(setLocation, _saveFile, setGameText) {
  setLocation(11);
  button4.style.display = "block";
  button4.removeAttribute("disabled");
  setGameText(chooseMagicElement());
}

function useFireMagic(setLocation, saveFile, setGameText) {
  // const { monster, monsterAttacks } = monstersTurn(
  //   setLocation,
  //   saveFile,
  //   setGameText
  // );
  const weaponType = "fireMagic";
  sortActions(setLocation, saveFile, setGameText, weaponType);
  // console.log(checkEnoughMana(saveFile, weaponType));
  // if (checkOwned(saveFile, weaponType, setGameText)) {
  //   monsterAttacks();
  //   if (saveFile.health > 0) {
  //     playersTurn(setLocation, saveFile, setGameText, monster, weaponType);
  //     testPlayersTurn(setLocation, saveFile, setGameText, monster, weaponType);
  //   }
  // }
}

function useWaterMagic(setLocation, saveFile, setGameText) {
  // const { monster, monsterAttacks } = monstersTurn(
  //   setLocation,
  //   saveFile,
  //   setGameText
  // );
  const weaponType = "waterMagic";
  sortActions(setLocation, saveFile, setGameText, weaponType);
  // if (checkOwned(saveFile, weaponType, setGameText)) {
  //   monsterAttacks();
  //   if (saveFile.health > 0) {
  //     playersTurn(setLocation, saveFile, setGameText, monster, weaponType);
  //   }
  // }
}
function useEarthMagic(setLocation, saveFile, setGameText) {
  // const { monster, monsterAttacks } = monstersTurn(
  //   setLocation,
  //   saveFile,
  //   setGameText
  // );
  const weaponType = "earthMagic";
  sortActions(setLocation, saveFile, setGameText, weaponType);
  // if (checkOwned(saveFile, weaponType, setGameText)) {
  //   monsterAttacks();
  //   if (saveFile.health > 0) {
  //     playersTurn(setLocation, saveFile, setGameText, monster, weaponType);
  //   }
  // }
}

function useItems(setLocation, _saveFile, setGameText) {
  setGameText(itemToUseText());
  setLocation(12);
  button4.style.display = "none";
  button4.setAttribute("disabled", "");
}

function usePotion(setLocation, saveFile, type, maxAmount) {
  const restoredAmount = calcRestoredAmount(type, maxAmount, saveFile);
  setLocation(8);
  button4.style.display = "block";
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
    // const restoredHealth = calcRestoredAmount("health", maxHealth, saveFile);
    if (saveFile.health < maxHealth) {
      usePotion(setLocation, saveFile, "health", maxHealth);
      // setLocation(8);
      // healthText.innerText = restoredHealth;
      // saveFile.health = restoredHealth;
      // updateData(saveFile);
      setGameText(useHealthPotionText() + goBackToFightText());
    } else {
      setGameText(hpMaxAlreadyText());
    }
  } else {
    setGameText(noPotions("hp"));
  }
}

function useMpPotion(setLocation, saveFile, setGameText) {
  if (saveFile.potions.mp > 0) {
    const maxMana = 50 + (saveFile.stats.mp - 1) * 10;
    // const restoredMana = calcRestoredAmount("mana", maxMana, saveFile);
    if (saveFile.mana < maxMana) {
      usePotion(setLocation, saveFile, "mana", maxMana);
      // setLocation(8);
      // manaText.innerText = restoredMana;
      // saveFile.mana = restoredMana;
      // updateData(saveFile)
      setGameText(useManaPotionText() + goBackToFightText());
    } else {
      setGameText(mpMaxAlreadyText());
    }
  } else {
    setGameText(noPotions("mp"));
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
};
