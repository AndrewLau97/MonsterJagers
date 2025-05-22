const purchaseText = {
  weapons: {
    purchased: (newWeapon) => {
      return `You purchased a ${newWeapon}`;
    },
    noMoney: (need, own) => {
      return `You do not have enough gold to buy this weapon. You require ${need} gold, you only have ${own} gold!`;
    },
    strongest: (type) => {
      if (type) {
        return `You already have the most powerful ${type} weapon!`;
      } else {
        return `You already have the most powerful weapon!`;
      }
    },
  },
  magics: {
    purchased: (newMagic) => {
      return `As your fingers trace the runes in the newly acquired spellbook, a faint shimmer stirs the air before you. Arcane energy flickers, and in an instant, knowledge floods your mind—swift, overwhelming, and undeniable. You have learned ${newMagic}`;
    },
    noMoney: (need, own) => {
      return `You do not have enough gold to buy this magic book. The book costs ${need} gold, you only have ${own} gold!`;
    },
    strongest: (type) => {
      return `You already know the most powerful ${type} spell. You have nothing left to learn. Well done`;
    },
  },
  shields: {
    purchased: (shield) => {
      return `You purchased a ${shield}`;
    },
    noMoney: (need, own) => {
      return `You do not have enough gold to buy this shield. You require ${need} gold, you only have ${own} gold!`;
    },
    strongest: () => {
      return `You already have the best shield!`;
    },
  },
  potions: {
    purchased: (type, amount) => {
      let textFiller;
      if (amount === 1) {
        textFiller = "potion";
      } else {
        textFiller = "potions";
      }
      return `You purchased a ${type} potion, you now have ${amount} ${type} ${textFiller}.`;
    },
    noMoney: (cost, gold, type) => {
      return `You do not have enough gold to buy a ${type} potion. Each potion costs ${cost} gold, you only have ${gold} gold.`;
    },
  },
  controls:{
    shop: () => {
    return `The scent of aged wood and faint herbs greets you as you enter. Shelves are lined with curious trinkets and glowing potions. Behind the counter, the shopkeeper offers a practiced smile. 'Welcome, traveler. What catches your eye today?'`;
  },
  blacksmith: () => {
    return `The air warms with the scent of coal and metal as you enter the blacksmith's corner. Tools hang on the walls, and weapons rest on racks, marked by skilled hands. A faint clang echoes from the forge.`;
  },
  enchanted: () => {
    return `You step into a quieter corner where enchanted weapons glow faintly. Crystals pulse with energy, and blades hum softly, their magic woven into the steel. A subtle shimmer dances along the edges, promising power beyond mere craftsmanship.`;
  },
  magic: () => {
    return `You enter a room where the air is heavy with dense arcana, thick and almost tangible. Ancient tomes line the walls behind glass cases, their pages whispering secrets of forgotten spells. Soft light glows from enchanted crystals, casting a gentle shimmer across the room. Which school of magic would you like to explore today?`;
  },
  potions: () => {
    return `You walk into a room with bottles lining the walls, their contents bubbling and glowing softly. The warm air is thick with the scent of herbs and spices. The shopkeeper smiles, asking, 'What potion are you seeking today?'`;
  },
  }
};

export {purchaseText}