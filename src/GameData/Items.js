const standardWeapons = [
  { name: "stick", power: 5, attribute: "none", price: 0 },
  { name: "dagger", power: 30, attribute: "none", price: 60 },
  { name: "sword", power: 60, attribute: "none", price: 90 },
];
const fireWeapons = [
  { name: "Crimson Dagger", power: 30, attribute: "fire", price: 70 },
  { name: "Blazing Edge", power: 60, attribute: "fire", price: 110 },
];
const waterWeapons = [
  { name: "Ice Needle", power: 30, attribute: "water", price: 70 },
  { name: "Riptide", power: 60, attribute: "water", price: 110 },
];
const earthWeapons = [
  { name: "Razorpine", power: 30, attribute: "earth", price: 70 },
  { name: "Meteorite Sword", power: 60, attribute: "earth", price: 110 },
];
const fireMagic = [
  { name: "Fireball", power: 60, attribute: "fire", manaCost: 20, price: 90 },
];
const waterMagic = [
  {
    name: "Water Bolt",
    power: 60,
    attribute: "water",
    manaCost: 20,
    price: 90,
  },
];
const earthMagic = [
  {
    name: "Winding Vines",
    power: 60,
    attribute: "earth",
    manaCost: 20,
    price: 90,
  },
];
const shields = [
  { name: "No Shield", defence: 0, price: 0 },
  { name: "Gilded Iron Buckler", defence: 10, price: 40 },
  { name: "Kite Shield", defence: 30, price: 60 },
  { name: "Golden Greatshield", defence: 50, price: 80 },
  { name: "Dragonskin", defence: 80, price: 100 },
];

export {
  standardWeapons,
  fireWeapons,
  waterWeapons,
  earthWeapons,
  fireMagic,
  waterMagic,
  earthMagic,
  shields,
};
