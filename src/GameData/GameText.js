function purchasedWeapon(newWeapon) {
  text.innerText = "You purchased a " + newWeapon + ".";
}
function purchasedMagic(newMagic) {
  text.innerText = "You have now learnt " + newMagic + ".";
}
function purchasedShield(shield) {
  text.innerText = "You purchased " + shield + ".";
}
function noMoneyWeapon(need, own) {
  text.innerText = `You do not have enough gold to buy this weapon. You require ${need} gold, you only have ${own} gold!`;
}
function noMoneyShield(need, own) {
  text.innerText = `You do not have enough gold to buy this shield. You require ${need} gold, you only have ${own} gold!`;
}
function noMoneyMagic(need, own) {
  text.innerText = `You do not have enough gold to learn this magic. You require ${need} gold, you only have ${own} gold!`;
}
function powerfulWeapon() {
  text.innerText = "You already have the most powerful weapon!";
}
function powerfulMagic(type) {
  text.innerText = `You already know the most powerful ${type} spell,you have nothing left to learn. Well done.`;
}
function powerfulShield() {
  text.innerText = "You already have the best shield!";
}

export default {
  purchasedMagic,
  purchasedWeapon,
  purchasedShield,
  noMoneyMagic,
  noMoneyShield,
  noMoneyWeapon,
  powerfulMagic,
  powerfulShield,
  powerfulWeapon,
};
