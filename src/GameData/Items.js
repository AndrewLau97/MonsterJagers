const gameItems={
  standardWeapon:[
    { name: "stick", power: 5, attribute: "normal", price: 0 },
    { name: "dagger", power: 30, attribute: "normal", price: 60 },
    { name: "sword", power: 60, attribute: "normal", price: 90 },
  ],
  fireWeapon:[
    { name: "Crimson Dagger", power: 30, attribute: "fire", price: 70 },
    { name: "Blazing Edge", power: 60, attribute: "fire", price: 110 },
  ],
  waterWeapon:[
    { name: "Ice Needle", power: 30, attribute: "water", price: 70 },
    { name: "Riptide", power: 60, attribute: "water", price: 110 },
  ],
  earthWeapon:[
    { name: "Razorpine", power: 30, attribute: "earth", price: 70 },
    { name: "Meteorite Sword", power: 60, attribute: "earth", price: 110 },
  ],
  fireMagic:[
    { name: "Fireball", power: 60, attribute: "fire", manaCost: 20, price: 90 },
  ],
  waterMagic:[
    {
      name: "Water Bolt",
      power: 60,
      attribute: "water",
      manaCost: 20,
      price: 90,
    },
  ],
  earthMagic:[
    {
      name: "Winding Vines",
      power: 60,
      attribute: "earth",
      manaCost: 20,
      price: 90,
    },
  ],
  shield:[
    { name: "No Shield", defence: 0, price: 0 },
    { name: "Gilded Iron Buckler", defence: 10, price: 40 },
    { name: "Kite Shield", defence: 30, price: 60 },
    { name: "Golden Greatshield", defence: 50, price: 80 },
    { name: "Dragonskin", defence: 80, price: 100 },
  ]
}

export {
  gameItems
};
