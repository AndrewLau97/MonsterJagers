import {
  explore,
  goHunt,
  goFight,
  goExplore,
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
  // lose
} from "./ExploreFn";

import {
  buyStandardWeapon,
  buyFireWeapon,
  buyWaterWeapon,
  buyEarthWeapon,
  buyFireMagic,
  buyWaterMagic,
  buyEarthMagic,
  buyShield,
  purchaseHpPotion,
  purchaseMpPotion,
} from "./PurchaseFn";

import {
  fightSlime,
  fightWizard,
  fightElemental,
  // defeatMonster,
} from "./MonstersFn";

import {
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
} from "./AttackFn"

const locations = [
  {
    //0
    name: "town1",
    "button text": [
      "Shop",
      "Walk through town",
      "Continue onwards to town2",
      "",
    ],
    "button functions": [shop, explore, nextArea, dummyFunction],
    text: "You return to town, what would you want to do?",
  },
  {
    //1
    name: "Shop",
    "button text": [
      "Buy equipment",
      "Buy Magic",
      "Buy Items",
      "Return to town",
    ],
    "button functions": [buyEquipment, buyMagic, buyItems, goTown],
    text: "Shopkeeper:What would you like to buy?",
    //add in the you see a shop keeper, lines with items, describe the shopkeeper, and then say the shopkeeper sees you and ask hello adventurer, what would you like to buy.
    //use ternary operator to check how many times you enter the store, if first time, describe the shop. if not then have the shop keeper welcome you back.
  },
  {
    //2
    name: "Equipment Shop",
    "button text": [
      "Buy standard weapon",
      "Buy elemental weapon",
      "Buy shield",
      "Go back to the front desk",
    ],
    "button functions": [
      buyStandardWeapon,
      buyElementalWeapon,
      buyShield,
      shop,
    ],
    text: "You enter the blacksmith area",
  },
  {
    //3
    name: "Enchanted Weapons Shop",
    "button text": [
      "Buy a fire weapon",
      "Buy a water weapon",
      "Buy an earth weapon",
      "Return to the blacksmith area",
    ],
    "button functions": [
      buyFireWeapon,
      buyWaterWeapon,
      buyEarthWeapon,
      buyEquipment,
    ],
    text: "You enter the enchanted weapons area",
  },
  {
    //4
    name: "Magic Shop",
    "button text": [
      "Learn fire magic",
      "Learn water magic",
      "Learn earth magic",
      "Go back to the front desk",
    ],
    "button functions": [buyFireMagic, buyWaterMagic, buyEarthMagic, shop],
    text: "What magic would you like to learn?",
  },
  {
    //5
    name: "Item Shop",
    "button text": [
      "Purchase health potion",
      "Purchase mana potion",
      "Go back to the front desk",
      "",
    ],
    "button functions": [
      purchaseHpPotion,
      purchaseMpPotion,
      shop,
      dummyFunction,
    ],
    text: "What items would you like to buy?",
  },
  {
    //6
    name: "Explore",
    "button text": [
      "Go hunting",
      "Explore the outskirts of town",
      "Rest at the Inn",
      "Return to town",
    ],
    "button functions": [goHunt, goExplore, restInn, goTown],
    text: "Where would you like to go?",
  },
  {
    //7
    name: "Hunting",
    "button text": [
      "Slime Habitat",
      "Wizard's Tower",
      "Elemental's Cave",
      "Return to town",
    ],
    "button functions": [fightSlime, fightWizard, fightElemental, goTown],
    text: "Which territory would you like to hunt at?",
  },
  {
    //8
    name: "Fight",
    "button text": ["Attack", "Use Magic", "Use Items", "Run"],
    "button functions": [goAttack, useMagic, useItems, goTown],
    text: "You are fighting a monster",
  },
  {
    //9
    name: "Attack",
    "button text": ["Normal Weapon", "Elemental Weapon", "Go Back", ""],
    "button functions": [
      useNormalWeapon,
      useElementalWeapon,
      goFight,
      dummyFunction,
    ],
    text: "Which weapon would you like to use?",
  },
  {
    //10
    name: "Use Elemental Weapon",
    "button text": [
      "Attack with your fire weapon",
      "Attack with your water weapon",
      "attack with your earth weapon",
      "Go Back",
    ],
    "button functions": [
      useFireWeapon,
      useWaterWeapon,
      useEarthWeapon,
      goAttack,
    ],
    text: "Which weapon would you like to use?",
  },
  {
    //11
    name: "Use Magic",
    "button text": ["Fire Magic", "Water Magic", "Earth Magic", "Go Back"],
    "button functions": [useFireMagic, useWaterMagic, useEarthMagic, goFight],
    text: "Which weapon would you like to use?",
  },
  {
    //12
    name: "Use Item",
    "button text": ["Use HP Potion", "Use MP Potion", "Go Back", ""],
    "button functions": [useHpPotion, useMpPotion, goFight, dummyFunction],
    text: "Which weapon would you like to use?",
  },
  {
    //13
    name: "Lose",
    "button text": ["Replay?", "Replay?", "Replay?", "Replay?"],
    "button functions": [restart, restart, restart, restart],
    text: "You have died, would you like to restart your adventure?",
  },
  {
    //14
    name: "Defeat Monster",
    "button text": [
      "Back to Town",
      "Keep Hunting",
      "Rest at the Inn",
      "Camp outside",
    ],
    "button functions": [goTown, goHunt, restInn, campOutside],
    text: "You have slain the monster and gained gold and xp, where would you like to go?",
  },
];

export default locations;
