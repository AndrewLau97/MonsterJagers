function isHit() {
  return Math.random() > 0.05;
}
function isMonsterHit() {
  return Math.random() > 0.1 || health < 20;
}
function monstersAtk(level) {
  const hit =
    level * 5 -
    stats.def ** 3 -
    (shields[currentShield].defence > 0 ? shields[currentShield].defence : 0);
  return hit > 0 ? hit : 0;
}
function useNormalWeapon() {
  text.innerText = `The ${monsters[fighting].name} attacks.`;
  text.innerText += `You attack the ${monsters[fighting].name} with your ${standardWeapons[currentStandardWeapon].name}.`;
  if (isHit()) {
    health -= monstersAtk(monsters[fighting].level);
    console.log(1);
  } else {
    text.innerText += "You managed to dodge the attack.";
    console.log(2);
  }
  if (isMonsterHit()) {
    if (monsters.immune === "normal") {
      text.innerText +=
        "The monster is immune to your attack, try another element type.";
      console.log(3);
    } else if (monsters.resistant === "normal") {
      monsterHealth -=
        standardWeapons[currentStandardWeapon].power * 0.5 + stats.atk ** 3;
      text.innerText +=
        "The monster is resistant to your attack, try another element type.";
      console.log(4);
    } else if (monsters.weakness === "normal") {
      monsterHealth -=
        standardWeapons[currentStandardWeapon].power * 1.5 + stats.atk ** 3;
      text.innerText += "The monster is weak to your attack.";
      console.log(5);
    } else {
      monsterHealth -=
        standardWeapons[currentStandardWeapon].power + stats.atk ** 3;
      text.innerText += "You hit";
      console.log(6);
    }
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    defeatMonster();
  }
}
function useElementalWeapon() {
  update(locations[10]);
  button4.style.display = "block";
  button4.removeAttribute("disabled");
}
function useFireWeapon() {
  console.log("Do Nothing");
}
function useWaterWeapon() {
  console.log("Do Nothing");
}
function useEarthWeapon() {
  console.log("Do Nothing");
}
function goAttack() {
  update(locations[9]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
  button4.style.display = "none";
  button4.setAttribute("disabled", "");
}
function useMagic() {
  console.log("Do Nothing");
}
function useFireMagic() {
  console.log("Do Nothing");
}
function useWaterMagic() {
  console.log("Do Nothing");
}
function useEarthMagic() {
  console.log("Do Nothing");
}
function useItems() {
  console.log("Do Nothing");
}
function useHpPotion() {
  console.log("Do Nothing");
}
function useMpPotion() {
  console.log("Do Nothing");
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
};
