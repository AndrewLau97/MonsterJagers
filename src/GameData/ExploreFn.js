import shopBG from "../assets/Background_images/Shop.jpg"
import blacksmithBG from "../assets/Background_images/Blacksmith.jpg"
import enchantedWeaponBG from "../assets/Background_images/EnchantedWeapons.jpg"
import magicBG from "../assets/Background_images/MagicBooks.jpg"
import potionsBG from "../assets/Background_images/Potions.jpg"
import VillageOneBG from "../assets/Background_images/VillageOne.jpg"
function dummyFunction() {
  console.log("Do Nothing");
}
function goTown(setLocation) {
  setLocation(0)
  button4.style.display = "none";
  button4.setAttribute("disabled", "");
  background.style.backgroundImage = `url(${VillageOneBG})`;
}
function shop(setLocation) {
  setLocation(1)
  button4.style.display = "block";
  button4.removeAttribute("disabled");
  background.style.backgroundImage=`url(${shopBG})`;
}
function buyEquipment(setLocation) {
  setLocation(2)
  background.style.backgroundImage =
    `url(${blacksmithBG})`
}
function buyElementalWeapon(setLocation) {
  setLocation(3)
  background.style.backgroundImage =
    `url(${enchantedWeaponBG})`;
}
function buyMagic(setLocation) {
  setLocation(4)
  background.style.backgroundImage = `url(${magicBG})`;
}
function buyItems(setLocation) {
  setLocation(5)
  button4.style.display = "none";
  button4.setAttribute("disabled", "");
  background.style.backgroundImage = `url(${potionsBG})`;
}

function explore(setLocation) {
  setLocation(6)
  button4.style.display = "block";
  button4.removeAttribute("disabled");
}
function goHunt(setLocation) {
  setLocation(7)
}
function goFight(setLocation) {
  setLocation(8)
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
  button4.style.display = "block";
  button4.removeAttribute("disabled");
}
function goExplore() {
  console.log("Do Nothing");
}
function restInn() {
  console.log("Do Nothing");
}
function campOutside() {
  console.log("Do Nothing");
}

function nextArea() {
  console.log("Do Nothing");
}
function lose() {
  update(location[13]);
}

function restart() {
  xp = 0;
  xpText.innerText = xp;
  health = 100;
  healthText.innerText = health;
  gold = 50;
  goldText.innerText = gold;
  currentStandardWeapon = 0;
  currentFireWeapon = -1;
  currentWaterWeapon = -1;
  currentEarthWeapon = -1;
  currentFireMagic = -1;
  currentWaterMagic = -1;
  currentEarthMagic = -1;
  currentShield = 0;
  hpPotions = 0;
  mpPotions = 0;
  level = 1;
  stats = {
    hp: 1,
    mp: 1,
    atk: 1,
    def: 1,
  };
  standardWeaponInventory = ["stick"];
  fireWeaponInventory = [];
  waterWeaponInventory = [];
  earthWeaponInventory = [];
  learntFireMagic = [];
  learntWaterMagic = [];
  learntEarthMagic = [];
  shieldInventory = [];
}

export {
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
  lose,
};
