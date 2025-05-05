import { gameItems } from "./Items";

import {
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
} from "./GameText";

import updateData from "./UpdateDataBase";
// import supabase from "../config/supabaseClient";

// const updateData = async (saveFile) => {
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();
//   const { data } = await supabase
//     .from("users")
//     .update({ saveData: saveFile })
//     .eq("id", user.id);
// };

function buyWeapon(saveFile, inventoryType, setGameText) {
  const { inventory } = saveFile;
  const purchasableItems = gameItems[inventoryType].filter(
    (item) => !inventory[inventoryType].includes(item.name)
  );

  if (purchasableItems.length) {
    if (purchasableItems[0].price <= saveFile.gold) {
      saveFile.gold -= purchasableItems[0].price;
      saveFile.inventory[inventoryType].unshift(purchasableItems[0].name);
      updateData(saveFile);
      if (inventoryType.includes("Weapon")) {
        setGameText(purchasedWeapon(purchasableItems[0].name));
      } else if (inventoryType.includes("Magic")) {
        setGameText(purchasedMagic(purchasableItems[0].name));
      } else if (inventoryType.includes("shield")) {
        setGameText(purchasedShield(purchasableItems[0].name));
      }
    } else {
      if (inventoryType.includes("Weapon")) {
        setGameText(noMoneyWeapon(purchasableItems[0].price, saveFile.gold));
      } else if (inventoryType.includes("Magic")) {
        setGameText(noMoneyMagic(purchasableItems[0].price, saveFile.gold));
      } else if (inventoryType.includes("shield")) {
        setGameText(noMoneyShield(purchasableItems[0].price, saveFile.gold));
      }
    }
  } else {
    if (inventoryType.includes("Weapon")) {
      const weaponType = inventoryType.replace("Weapon", "");
      if (weaponType === "standard") {
        setGameText(powerfulWeapon());
      } else {
        setGameText(powerfulWeapon(weaponType));
      }
    } else if (inventoryType.includes("Magic")) {
      setGameText(powerfulMagic(inventoryType.replace("Magic", "")));
    } else if (inventoryType.includes("shield")) {
      setGameText(powerfulShield());
    }
  }
}

function buyStandardWeapon(_location, saveFile, setGameText) {
  const inventoryType = "standardWeapon";
  buyWeapon(saveFile, inventoryType, setGameText);
}

function buyFireWeapon(_location, saveFile, setGameText) {
  const inventoryType = "fireWeapon";
  buyWeapon(saveFile, inventoryType, setGameText);
}

function buyWaterWeapon(_location, saveFile, setGameText) {
  const inventoryType = "waterWeapon";
  buyWeapon(saveFile, inventoryType, setGameText);
}

function buyEarthWeapon(_location, saveFile, setGameText) {
  const inventoryType = "earthWeapon";
  buyWeapon(saveFile, inventoryType, setGameText);
}

function buyFireMagic(_location, saveFile, setGameText) {
  const inventoryType = "fireMagic";
  buyWeapon(saveFile, inventoryType, setGameText);
}

function buyWaterMagic(_location, saveFile, setGameText) {
  const inventoryType = "waterMagic";
  buyWeapon(saveFile, inventoryType, setGameText);
}

function buyEarthMagic(_location, saveFile, setGameText) {
  const inventoryType = "earthMagic";
  buyWeapon(saveFile, inventoryType, setGameText);
}

function buyShield(_location, saveFile, setGameText) {
  const inventoryType = "shield";
  buyWeapon(saveFile, inventoryType, setGameText);
}

function purchasePotion(saveFile, setGameText, potionType) {
  const potionCost=10*saveFile.level
  if (saveFile.gold >= potionCost) {
    saveFile.gold-=potionCost;
    saveFile.potions[potionType]++;
    updateData(saveFile);
    setGameText(buyPotion(potionType,saveFile.potions[potionType]))
  }else{
    setGameText(noMoneyPotion(potionCost, saveFile.gold, potionType))
  }
}

function purchaseHpPotion(_location, saveFile, setGameText) {
  const potionType = "hp";
  purchasePotion(saveFile, setGameText, potionType);
}

function purchaseMpPotion(_location, saveFile, setGameText) {
  const potionType = "mp";
  purchasePotion(saveFile, setGameText, potionType);
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
