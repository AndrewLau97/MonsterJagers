const gameItems={
  standardWeapon:[
    { name: "stick", power: 5, attribute: "normal", price: 0 },
    { name: "dagger", power: 15, attribute: "normal", price: 60 },
    { name: "sword", power: 30, attribute: "normal", price: 90 },
  ],
  fireWeapon:[
    { name: "Crimson Dagger", power: 15, attribute: "fire", price: 70 },
    { name: "Blazing Edge", power: 30, attribute: "fire", price: 110 },
  ],
  waterWeapon:[
    { name: "Ice Needle", power: 15, attribute: "water", price: 70 },
    { name: "Riptide", power: 30, attribute: "water", price: 110 },
  ],
  earthWeapon:[
    { name: "Razorpine", power: 15, attribute: "earth", price: 70 },
    { name: "Meteorite Sword", power: 30, attribute: "earth", price: 110 },
  ],
  fireMagic:[
    { name: "Fireball", power: 30, attribute: "fire", manaCost: 20, price: 90 },
  ],
  waterMagic:[
    {
      name: "Water Bolt",
      power: 30,
      attribute: "water",
      manaCost: 20,
      price: 90,
    },
  ],
  earthMagic:[
    {
      name: "Winding Vines",
      power: 30,
      attribute: "earth",
      manaCost: 20,
      price: 90,
    },
  ],
  shield:[
    { name: "No Shield", defence: 0, price: 0 },
    { name: "Gilded Iron Buckler", defence: 5, price: 40 },
    { name: "Kite Shield", defence: 10, price: 60 },
    { name: "Golden Greatshield", defence: 15, price: 80 },
    { name: "Dragonskin", defence: 25, price: 100 },
  ]
}

export {
  gameItems
};
