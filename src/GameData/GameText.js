function purchasedWeapon(newWeapon) {
  return `You purchased a ${newWeapon}.`;
}
function purchasedMagic(newMagic) {
  return `You have now learnt ${newMagic}.`;
}
function purchasedShield(shield) {
  return `You purchased ${shield}.`;
}
function noMoneyWeapon(need, own) {
  return `You do not have enough gold to buy this weapon. You require ${need} gold, you only have ${own} gold!`;
}
function noMoneyShield(need, own) {
  return `You do not have enough gold to buy this shield. You require ${need} gold, you only have ${own} gold!`;
}
function noMoneyMagic(need, own) {
  return `You do not have enough gold to learn this magic. You require ${need} gold, you only have ${own} gold!`;
}
function powerfulWeapon(type) {
  if (type) {
    return `You already have the most powerful ${type} weapon!`;
  } else {
    return "You already have the most powerful weapon!";
  }
}
function powerfulMagic(type) {
  return `You already know the most powerful ${type} spell,you have nothing left to learn. Well done.`;
}
function powerfulShield() {
  return "You already have the best shield!";
}
function buyPotion(type, amount) {
  return `You purchased a ${type} potion, you now have ${amount} ${type} potions.`;
}
function noMoneyPotion(cost, gold, type) {
  return `You do not have enough gold to buy a ${type} potion. Each potion costs ${cost} gold, you only have ${gold} gold.`;
}

function monsterEncounterText(monsterName) {
  return `You encounter a ${monsterName}. What would you like to do?`;
}

function monsterAttacksText(monsterName) {
  return ` The ${monsterName} attacks you.`;
}

function takeDamage(damage) {
  return ` You have taken ${damage} damage.`;
}

function dodgeAttack() {
  return " You managed to dodge the attack, you take no damage.";
}

function attackMonster(monsterName, weapon) {
  return ` You attack the ${monsterName} with your ${weapon}.`;
}

function dealDamage(resistance, damage) {
  const resistanceText = {
    immune: " The monster is immune to your attack, try another element type.",
    resistant: ` The monster is resistant to your attack, you only deal ${damage} damage. Try another element type.`,
    weakness: ` The monster is weak to your attack, you deal ${damage} damage!`,
    neutral: ` You deal ${damage} damage.`,
  };
  return resistanceText[resistance];
}

function meleeWeapon() {
  return `Which weapon would you like to use?`;
}

function chooseWeaponElement() {
  return `Which elemental weapon would you like to use?`;
}

function chooseMagicElement() {
  return `Which magic type would you like to cast?`;
}

function rebirthText() {
  return `You wake up from a strange dream. A sense of deja vu overcomes you as you walk into this town.`;
}

function monsterDodgesText(monsterName) {
  return ` The ${monsterName} dodges your attack.`;
}

function goBackToFightText() {
  return ` What would you like to do now?`;
}

function defeatMonsterText(monsterName, gold, xp, damageDealt) {
  return `You deal ${damageDealt} which finishes the ${monsterName}. You gain ${gold} gold and ${xp} xp, where would you like to go?`;
}

function enterInnText() {
  return `You enter the Hearth and Hammer Inn, what would you like to do?`;
}

function noMoneyInnText() {
  return `You do not have enough money to rest here. You might want to try camping outside to heal up, but be wary of danger.`;
}

function innRestText() {
  return `You feel rejuvenated from resting. What would you like to do now?`;
}

function noNeedInnRestText() {
  return `You feel completely energized. There is no need to rest.`;
}

function levelUpText() {
  return `What would you like to level up?`;
}

function noLevelUpText(xpNeededToLevel) {
  return `You do not have enough xp to level up, ${xpNeededToLevel} xp needed to level up.`;
}

function levelUpDefText() {
  return `Your body grows more resilient, energy surging through you allowing you to take on tougher foes.`;
}
function levelUpMpText() {
  return `You feel yourself filling up with arcane energy, allowing yourself to command more magical forces than before.`;
}
function levelUpAtkText() {
  return `A surge of strength wells up from within, you feel like you can take on anything.`;
}

function itemToUseText() {
  return `What item would you like to use?`;
}

function hpMaxAlreadyText() {
  return `You feel healthy and do not require a potion.`;
}
function mpMaxAlreadyText() {
  return `You feel full of arcane energy and do no require a potion.`;
}

function useHealthPotionText() {
  return `The bitter liquid goes down in one gulp. A soothing energy pulses through you—your health is restored.`;
}

function useManaPotionText() {
  return `Arcane energy courses through your veins as the potion takes effect. Your mind clears, and your mana returns.`;
}

function noPotions(type) {
  return `You do not have any ${type} potions to use.`;
}

function noWeapon() {
  return `You do not own a weapon of this category, try another weapon.`;
}

function noMagic() {
  return `You do not know any magic of this element, try something else.`;
}

function notEnoughMana() {
  return `You do not have enough mana to cast this spell, try something else.`;
}

function campOutsideText(timeRested) {
  if (timeRested === 1) {
    return `You awaken beneath a canopy of stars fading by the light of dawn, the chill of the night is replaced by the warmth of the sunlight. The crackle of your campfire and the scent of the pine lingers in the air. You feel well-rested and ready for a new day.`;
  } else if (timeRested === 0.5) {
    return `The wind howled through the trees all night, the damp chill clung to your cloak like a second skin. Sleep did not come easy for you, only in the form of restless fragments. You rise, groggy, sore and already longing for a warm hearth.`;
  } else if (timeRested === 0.25) {
    return `Every rustle in the underbrush and distant howls kepy your eyes wide and your hand on your blade. By dawn, you managed only moments of sleeps, with your nerves frayed and mind foggy, you get up wanting the day to end once more.`;
  }
}

function wolvesAmbushText() {
  return `A low growl pierced your uneasy sleep. With your eyes snapping open, you see a dark shapes dashing between the trees - wolves, their eyes gleaming from your campfire. You bolt up with your blade drawn as the beasts leap towards you. What would you like to do?`;
}

function banditsAmbushText() {
  return `The sharp twang of a bowstring jerks you awake, followed by a thud of an arrow burying itself inches from your face. Shadows move fast beyond the reach of your campfire - bandits. Steel flashes before you as you scramble to your feet. The leader comes forth.
  Bandit Leader: Money or Death?
  What would you like to do?`;
}

function payOffBanditsText() {
  return `You paid off the bandits—scum who prey on the weak.
The moment replays in your mind: the weight of the coin in your hands, the silence that followed.
You chose survival. Not everyone gets that choice… or lives to make it again.
Now, back in town, the dust still clinging to your boots—
What would you like to do next?`;
}

function escapeFromWolvesText() {
  return `The bustling market streets replace the sounds of the forest—the snapping branches, the growls of wolves at your heels.
They almost had you.
You check yourself: a few scrapes, a torn sleeve, and your coin pouch feels lighter than before.
But you’re safe now.
You exhale, steadying your breath.
What would you like to do next?`;
}

// to change all text into this object at a later date - too many things being exported

const testText = {
  purchase: {
    purchasedWeapon: (newWeapon) => {
      return `You purchased a ${newWeapon}.`;
    },
    noMoneyWeapon: (need, own) => {
      return `You do not have enough gold to buy this weapon. You require ${need} gold, you only have ${own} gold!`;
    },
    powerfulWeapon: (type) => {
      if (type) {
        return `You already have the most powerful ${type} weapon!`;
      } else {
        return "You already have the most powerful weapon!";
      }
    },
    purchasedMagic: (newMagic) => {
      return `You have now learnt ${newMagic}.`;
    },
    noMoneyMagic: (need, own) => {
      return `You do not have enough gold to learn this magic. You require ${need} gold, you only have ${own} gold!`;
    },
    powerfulMagic: (type) => {
      return `You already know the most powerful ${type} spell,you have nothing left to learn. Well done.`;
    },
    purchasedShield: (shield) => {
      return `You purchased ${shield}.`;
    },
    noMoneyShield: (need, own) => {
      return `You do not have enough gold to buy this shield. You require ${need} gold, you only have ${own} gold!`;
    },
    powerfulShield: () => {
      return "You already have the best shield!";
    },
    buyPotion: (type, amount) => {
      return `You purchased a ${type} potion, you now have ${amount} ${type} potions.`;
    },
    noMoneyPotion: (cost, gold, type) => {
      return `You do not have enough gold to buy a ${type} potion. Each potion costs ${cost} gold, you only have ${gold} gold.`;
    },
  },
  encounters: {
    monsterEncounterText: (monsterName) => {
      return `You encounter a ${monsterName}. What would you like to do?`;
    },
    monsterAttacksText: (monsterName) => {
      return ` The ${monsterName} attacks you.`;
    },
    takeDamage: (damage) => {
      return ` You have taken ${damage} damage.`;
    },
    dodgeAttack: () => {
      return " You managed to dodge the attack, you take no damage.";
    },
    attackMonster: (monsterName, weapon) => {
      return ` You attack the ${monsterName} with your ${weapon}.`;
    },
    dealDamage: (resistance, damage) => {
      const resistanceText = {
        immune:
          " The monster is immune to your attack, try another element type.",
        resistant: ` The monster is resistant to your attack, you only deal ${damage} damage. Try another element type.`,
        weakness: ` The monster is weak to your attack, you deal ${damage} damage!`,
        neutral: ` You deal ${damage} damage.`,
      };
      return resistanceText[resistance];
    },
    monsterDodgesText: (monsterName) => {
      return ` The ${monsterName} dodges your attack.`;
    },
    meleeWeapon: () => {
      return `Which weapon would you like to use?`;
    },
    chooseWeaponElement: () => {
      return `Which elemental weapon would you like to use?`;
    },
    noWeapon: () => {
      return `You do not own a weapon of this category, try another weapon.`;
    },
    chooseMagicElement: () => {
      return `Which magic type would you like to cast?`;
    },
    noMagic: () => {
      return `You do not know any magic of this element, try something else.`;
    },
    notEnoughMana: () => {
      return `You do not have enough mana to cast this spell, try something else.`;
    },
    goBackToFightText: () => {
      return ` What would you like to do now?`;
    },
    itemToUseText: () => {
      return `What item would you like to use?`;
    },
    hpMaxAlreadyText: () => {
      return `You feel healthy and do not require a potion.`;
    },
    useHealthPotionText: () => {
      return `The bitter liquid goes down in one gulp. A soothing energy pulses through you—your health is restored.`;
    },
    mpMaxAlreadyText: () => {
      return `You feel full of arcane energy and do no require a potion.`;
    },
    useManaPotionText: () => {
      return `Arcane energy courses through your veins as the potion takes effect. Your mind clears, and your mana returns.`;
    },
    noPotions: (type) => {
      return `You do not have any ${type} potions to use.`;
    },
    defeatMonsterText: (monsterName, gold, xp, damageDealt) => {
      return `You deal ${damageDealt} which finishes the ${monsterName}. You gain ${gold} gold and ${xp} xp, where would you like to go?`;
    },
  },
  rest: {
    enterInnText: () => {
      return `You enter the Hearth and Hammer Inn, what would you like to do?`;
    },
    noMoneyInnText: () => {
      return `You do not have enough money to rest here. You might want to try camping outside to heal up, but be wary of danger.`;
    },
    innRestText: () => {
      return `You feel rejuvenated from resting. What would you like to do now?`;
    },
    noNeedInnRestText: () => {
      return `You feel completely energized. There is no need to rest.`;
    },
    levelUpText: () => {
      return `What would you like to level up?`;
    },
    noLevelUpText: (xpNeededToLevel) => {
      return `You do not have enough xp to level up, ${xpNeededToLevel} xp needed to level up.`;
    },
    levelUpDefText: () => {
      return `Your body grows more resilient, energy surging through you allowing you to take on tougher foes.`;
    },
    levelUpMpText: () => {
      return `You feel yourself filling up with arcane energy, allowing yourself to command more magical forces than before.`;
    },
    levelUpAtkText: () => {
      return `A surge of strength wells up from within, you feel like you can take on anything.`;
    },
    wellRestedOutsideText: () => {},
    restedOutsideText: () => {},
    notWellRestedOutsideText: () => {},
  },
  rebirthText: () => {
    return `You wake up from a strange dream. A sense of deja vu overcomes you as you walk into this town.`;
  },
};

export {
  purchasedMagic,
  purchasedWeapon,
  purchasedShield,
  noMoneyMagic,
  noMoneyShield,
  noMoneyWeapon,
  powerfulMagic,
  powerfulShield,
  powerfulWeapon,
  buyPotion,
  noMoneyPotion,
  monsterEncounterText,
  monsterAttacksText,
  takeDamage,
  dodgeAttack,
  attackMonster,
  dealDamage,
  meleeWeapon,
  chooseWeaponElement,
  rebirthText,
  monsterDodgesText,
  defeatMonsterText,
  enterInnText,
  noMoneyInnText,
  innRestText,
  noNeedInnRestText,
  levelUpText,
  noLevelUpText,
  levelUpDefText,
  levelUpMpText,
  levelUpAtkText,
  itemToUseText,
  goBackToFightText,
  hpMaxAlreadyText,
  mpMaxAlreadyText,
  useManaPotionText,
  useHealthPotionText,
  noPotions,
  chooseMagicElement,
  noMagic,
  noWeapon,
  notEnoughMana,
  testText,
  campOutsideText,
  wolvesAmbushText,
  banditsAmbushText,
  payOffBanditsText,
  escapeFromWolvesText
};
