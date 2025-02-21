// import { saveFileOne } from "../SaveData/SaveFile";
import {
  standardWeapons,
  fireWeapons,
  waterWeapons,
  earthWeapons,
  fireMagic,
  waterMagic,
  earthMagic,
  shields,
} from "./Items";

function buyWeapon(
  currentWeapon,
  weapon,
  price,
  weaponInventory,
  purchased,
  noMoney,
  owned
) {
  if (currentWeapon < weapon.length - 1) {
    if (gold >= price) {
      gold -= price;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapon[currentWeapon].name;
      purchased(newWeapon);
      weaponInventory.push(newWeapon);
      return "bought";
    } else {
      noMoney(price, gold);
    }
  } else {
    owned;
  }
}

function buyStandardWeapon() {
  const standardWeaponsOwned = saveFileOne.inventory.standardWeapon
  const itemsForPurchase=standardWeapons.filter((weapon)=>!standardWeaponsOwned.includes(weapon.name))
  console.log(itemsForPurchase[0])
  saveFileOne.inventory.standardWeapon.push(itemsForPurchase[0].name)
  console.log(saveFileOne.inventory.standardWeapon)
  // if (
  //   buyWeapon(
  //     currentStandardWeapon,
  //     standardWeapons,
  //     20 * standardWeaponInventory.length,
  //     standardWeaponInventory,
  //     purchasedWeapon,
  //     noMoneyWeapon,
  //     powerfulWeapon()
  //   ) === "bought"
  // ) {
  //   currentStandardWeapon++;
  // }
}

function buyFireWeapon() {
  if (
    buyWeapon(
      currentFireWeapon,
      fireWeapons,
      40 * (fireWeaponInventory.length + 1),
      fireWeaponInventory,
      purchasedWeapon,
      noMoneyWeapon,
      powerfulWeapon()
    ) === "bought"
  ) {
    currentFireWeapon++;
  }
}

function buyWaterWeapon() {
  if (
    buyWeapon(
      currentWaterWeapon,
      waterWeapons,
      40 * (waterWeaponInventory.length + 1),
      waterWeaponInventory,
      purchasedWeapon,
      noMoneyWeapon,
      powerfulWeapon()
    ) === "bought"
  ) {
    currentWaterWeapon++;
  }
}

function buyEarthWeapon() {
  if (
    buyWeapon(
      currentEarthWeapon,
      earthWeapons,
      40 * (earthWeaponInventory.length + 1),
      earthWeaponInventory,
      purchasedWeapon,
      noMoneyWeapon,
      powerfulWeapon()
    ) === "bought"
  ) {
    currentEarthWeapon++;
  }
}

function buyFireMagic() {
  if (
    buyWeapon(
      currentFireMagic,
      fireMagic,
      40 * (learntFireMagic.length + 1),
      learntFireMagic,
      purchasedMagic,
      noMoneyMagic,
      powerfulMagic("fire")
    ) === "bought"
  ) {
    currentFireMagic++;
  }
}

function buyWaterMagic() {
  if (
    buyWeapon(
      currentWaterMagic,
      waterMagic,
      40 * (learntWaterMagic.length + 1),
      learntWaterMagic,
      purchasedMagic,
      noMoneyMagic,
      powerfulMagic("water")
    ) === "bought"
  ) {
    currentWaterMagic++;
  }
}

function buyEarthMagic() {
  if (
    buyWeapon(
      currentEarthMagic,
      earthMagic,
      40 * (learntEarthMagic.length + 1),
      learntEarthMagic,
      purchasedMagic,
      noMoneyMagic,
      powerfulMagic("earth")
    ) === "bought"
  ) {
    currentEarthMagic++;
  }
}

function buyShield() {
  if (
    buyWeapon(
      currentShield,
      shields,
      40 * (shieldInventory.length + 1),
      shieldInventory,
      purchasedShield,
      noMoneyShield,
      powerfulShield()
    ) === "bought"
  ) {
    currentShield++;
  }
}

function purchaseHpPotion() {
  if (gold >= 10 * level) {
    gold -= 10 * level;
    goldText.innerText = gold;
    hpPotions++;
    text.innerText = `You purchased a hp potion, you now have ${hpPotions} hp potions.`;
  } else {
    text.innerText = `You do not have enough gold to buy a hp potion. Each potion costs ${
      10 * level
    } gold, you only have ${gold} gold.`;
  }
}

function purchaseMpPotion() {
  if (gold >= 10 * level) {
    gold -= 10 * level;
    goldText.innerText = gold;
    mpPotions++;
    text.innerText = `You purchased a mp potion, you now have ${mpPotions} mp potions.`;
  } else {
    text.innerText = `You do not have enough gold to buy a mp potion. Each potion costs ${
      10 * level
    } gold, you only have ${gold} gold.`;
  }
}

export {
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
};
