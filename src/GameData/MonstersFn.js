function fightSlime() {
  background.style.backgroundImage = "url('Background Images/SlimeForest.png')";
  if (Math.random() < 1 / 3) {
    fighting = 0;
    goFight();
  } else if (Math.random() < 2 / 3) {
    fighting = 1;
    goFight();
  } else {
    fighting = 2;
    goFight();
  }
}
function fightWizard() {
  console.log("Do Nothing");
}
function fightElemental() {
  console.log("Do Nothing");
}
function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 4.2);
  xp += Math.floor(monsters[fighting].level * 2.2);
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[14]);
  button4.style.display = "block";
  button4.removeAttribute("disabled");
}

export { fightSlime, fightWizard, fightElemental, defeatMonster };
