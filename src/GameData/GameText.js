//need to split game text into multiple different files for ease of location and change

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

//moved

function monsterEncounterText(monsterName) {
  return `You encounter a ${monsterName}. What would you like to do?`;
}
//done

function monsterAttacksText(monsterName) {
  return ` The ${monsterName} attacks you.`;
}
//done
function takeDamage(damage) {
  return ` You have taken ${damage} damage.`;
}
//done
function dodgeAttack() {
  return " You managed to dodge the attack, you take no damage.";
}
//done
function attackMonster(monsterName, weapon) {
  return ` You attack the ${monsterName} with your ${weapon}.`;
}
//done

function dealDamage(resistance, damage) {
  const resistanceText = {
    immune: " The monster is immune to your attack, try another element type.",
    resistant: ` The monster is resistant to your attack, you only deal ${damage} damage. Try another element type.`,
    weakness: ` The monster is weak to your attack, you deal ${damage} damage!`,
    neutral: ` You deal ${damage} damage.`,
  };
  return resistanceText[resistance];
}
//done

function meleeWeapon() {
  return `Which weapon would you like to use?`;
}
//done

function chooseWeaponElement() {
  return `Which elemental weapon would you like to use?`;
}
//done

function chooseMagicElement() {
  return `Which magic type would you like to cast?`;
}
//done

function monsterDodgesText(monsterName) {
  return ` The ${monsterName} dodges your attack.`;
}
//done

function goBackToFightText() {
  return ` What would you like to do now?`;
}
//done

function defeatMonsterText(monsterName, gold, xp, damageDealt) {
  return `You deal ${damageDealt} which finishes the ${monsterName}. You gain ${gold} gold and ${xp} xp, where would you like to go?`;
}
//done

function rebirthText() {
  return `You wake up from a strange dream. A sense of deja vu overcomes you as you walk through the town gates.`;
}
//done
function enterInnText() {
  return `You enter the Hearth and Hammer Inn, what would you like to do?`;
}

function noMoneyInnText() {
  return `You do not have enough money to rest here. You might want to try camping outside to heal up, but be wary of danger.`;
}
//done

function innRestText() {
  return `You feel rejuvenated from resting. What would you like to do now?`;
}
//done
function noNeedInnRestText() {
  return `You feel completely energized. There is no need to rest.`;
}
//done
function levelUpText() {
  return `What would you like to level up?`;
}
//done
function noLevelUpText(xpNeededToLevel) {
  return `You do not have enough xp to level up, ${xpNeededToLevel} xp needed to level up.`;
}
//done

function levelUpDefText() {
  return `Your body grows more resilient, energy surging through you allowing you to take on tougher foes.`;
}
//done
function levelUpMpText() {
  return `You feel yourself filling up with arcane energy, allowing yourself to command more magical forces than before.`;
}
//done
function levelUpAtkText() {
  return `A surge of strength wells up from within, you feel like you can take on anything.`;
}
//done
function itemToUseText() {
  return `What item would you like to use?`;
}
//done
function hpMaxAlreadyText() {
  return `You feel healthy and do not require a potion.`;
}
//done
function mpMaxAlreadyText() {
  return `You feel full of arcane energy and do no require a potion.`;
}
//done

function useHealthPotionText() {
  return `The bitter liquid goes down in one gulp. A soothing energy pulses through you—your health is restored.`;
}
//done
function useManaPotionText() {
  return `Arcane energy courses through your veins as the potion takes effect. Your mind clears, and your mana returns.`;
}
//done
function noPotions(type) {
  return `You do not have any ${type} potions to use.`;
}
//done
function noWeapon() {
  return `You do not own a weapon of this category, try another weapon.`;
}
//done
function noMagic() {
  return `You do not know any magic of this element, try something else.`;
}
//done
function notEnoughMana() {
  return `You do not have enough mana to cast this spell, try something else.`;
}
//done

function campOutsideText(timeRested) {
  if (timeRested === 1) {
    return `You awaken beneath a canopy of stars fading by the light of dawn, the chill of the night is replaced by the warmth of the sunlight. The crackle of your campfire and the scent of the pine lingers in the air. You feel well-rested and ready for a new day.`;
  } else if (timeRested === 0.5) {
    return `The wind howled through the trees all night, the damp chill clung to your cloak like a second skin. Sleep did not come easy for you, only in the form of restless fragments. You rise, groggy, sore and already longing for a warm hearth.`;
  } else if (timeRested === 0.25) {
    return `Every rustle in the underbrush and distant howls kepy your eyes wide and your hand on your blade. By dawn, you managed only moments of sleeps, with your nerves frayed and mind foggy, you get up wanting the day to end once more.`;
  }
}
//done
function wolvesAmbushText() {
  return `A low growl pierced your uneasy sleep. With your eyes snapping open, you see a dark shapes dashing between the trees - wolves, their eyes gleaming from your campfire. You bolt up with your blade drawn as the beasts leap towards you. What would you like to do?`;
}
//done
function banditsAmbushText() {
  return `The sharp twang of a bowstring jerks you awake, followed by a thud of an arrow burying itself inches from your face. Shadows move fast beyond the reach of your campfire - bandits. Steel flashes before you as you scramble to your feet. The leader comes forth.
  Bandit Leader: Money or Death?
  What would you like to do?`;
}
//done
function payOffBanditsText() {
  return `You paid off the bandits—scum who prey on the weak.
The moment replays in your mind: the weight of the coin in your hands, the silence that followed.
You chose survival. Not everyone gets that choice… or lives to make it again.
Now, back in town, the dust still clinging to your boots—
What would you like to do next?`;
}
//done
function escapeFromWolvesText() {
  return `The bustling market streets replace the sounds of the forest—the snapping branches, the growls of wolves at your heels.
They almost had you.
You check yourself: a few scrapes, a torn sleeve, and your coin pouch feels lighter than before.
But you're safe now.
You exhale, steadying your breath.
What would you like to do next?`;
}
//done
function findChestText(){
  return `You venture off into the forests, your boots crunching over fallen leaves. A glimmer catches your eye - a weathered wooden chest nested inside the trunk of a willow tree`
}
//done
function chestTreasureText(gold, hpPot, mpPot){
  let text=`You kneel beside the chest and pry it open. The lid creaks open, revealing a modest stash someone left behind. You gain ${gold} gold`
  if(hpPot>0&&mpPot===0){
    text+=` and ${hpPot} hp potions.`
  }else if(hpPot>0&&mpPot>0){
    text+=`, ${hpPot} hp potions and ${mpPot} mp potions.`
  }else if(mpPot>0){
    text+=` and ${mpPot} mp potions.`
  }else{
    text+=`.`
  }
  return text
}
//done
function ignoreChestText(){
  return`You cast a wary glance towards the old chest. Something about its placement feels too convenient - too easy. You've seen enough traps and mimics to trust your  instincts. Without another glance you move onwards.`
}
//done
function findNothingText(){
  return `You drift through the thick forest, each step muffled by the soft rustle of leaves beneath your boots. The air is cool and still, broken only by the distant cry of an unseen bird echoing through the canopy. No monsters lurk, no travelers pass—only trees stretching endlessly in all directions, their shadows long and quiet. It's as if the forest is holding its breath, watching… waiting.`
}
//done
// to change all text into this object at a later date - too many things being exported,  or split all into json files and have a different file for purchases, battles, etc easier to find then

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
    return `You wake up from a strange dream. A sense of deja vu overcomes you as you walk through the town gates.`;
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
  campOutsideText,
  wolvesAmbushText,
  banditsAmbushText,
  payOffBanditsText,
  escapeFromWolvesText,
  findChestText,
  chestTreasureText,
  ignoreChestText,
  findNothingText
};
