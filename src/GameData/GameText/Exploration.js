const explorationText = {
  baseTown: {
    returnTown: () => {
      return `You make your way back to the familiar gates of town, weary from your journey. The bustle of merchants, the scent of baked bread, and the distant clang of a blacksmith's hammer greet you. What will you do now amidst the safety of these walls?`;
    },
    continueThroughTown: () => {
      return `You stroll through the bustling streets, the sounds of chatter and merchants' calls filling the air. As you take it all in, you weigh your options—hunt the wilds for glory, explore unknown paths for secrets, or rest to regain your strength. What will you do next?`;
    },
    chooseHunt: () => {
      return `You choose to hunt, but first, you must decide where to test your skills—will it be the dense, shadowy forest, the rugged mountain passes, or the wide-open plains? Each territory holds its own dangers and rewards.`;
    },
  },
  camp: {
    campOutside: (timeRested) => {
      const amountRested = {
        1: `You awaken beneath a canopy of stars fading by the light of dawn, the chill of the night is replaced by the warmth of the sunlight. The crackle of your campfire and the scent of the pine lingers in the air. You feel well-rested and ready for a new day.`,
        0.5: `The wind howled through the trees all night, the damp chill clung to your cloak like a second skin. Sleep did not come easy for you, only in the form of restless fragments. You rise, groggy, sore and already longing for a warm hearth.`,
        0.25: `Every rustle in the underbrush and distant howls kepy your eyes wide and your hand on your blade. By dawn, you managed only moments of sleeps, with your nerves frayed and mind foggy, you get up wanting the day to end once more.`,
      };
      return amountRested[timeRested];
    },
    wolfAmbush: () => {
      return `A low growl pierced your uneasy sleep. With your eyes snapping open, you see a dark shapes dashing between the trees - wolves, their eyes gleaming from your campfire. You bolt up with your blade drawn as the beasts leap towards you. What would you like to do?`;
    },
    banditAmbush: () => {
      return `The sharp twang of a bowstring jerks you awake, followed by a thud of an arrow burying itself inches from your face. Shadows move fast beyond the reach of your campfire - bandits. Steel flashes before you as you scramble to your feet. The leader comes forth. Bandit Leader: 'Money or Death?' What would you like to do?`;
    },
    payBandits: () => {
      return `You paid off the bandits—scum who prey on the weak. The moment replays in your mind: the weight of the coin in your hands, the silence that followed. You chose survival. Not everyone gets that choice… or lives to make it again. Now, back in town, the dust still clinging to your boots. What would you like to do next?`;
    },
    escapeWolves: () => {
      return `The bustling market streets replace the sounds of the forest—the snapping branches, the growls of wolves at your heels. They almost had you. You check yourself: a few scrapes, a torn sleeve, and your coin pouch feels lighter than before. But you're safe now. You exhale, steadying your breath. What would you like to do next?`;
    },
  },
  exploreOutTown: {
    findChest: () => {
      return `You venture off into the forests, your boots crunching over fallen leaves. A glimmer catches your eye - a weathered wooden chest nested inside the trunk of a willow tree`;
    },
    treasureChest: (gold, hpPot, mpPot) => {
      let text = `You kneel beside the chest and pry it open. The lid creaks open, revealing a modest stash someone left behind. You gain ${gold} gold`;
      if (hpPot > 0 && mpPot === 0) {
        text += ` and ${hpPot} hp potions.`;
      } else if (hpPot > 0 && mpPot > 0) {
        text += `, ${hpPot} hp potions and ${mpPot} mp potions.`;
      } else if (mpPot > 0) {
        text += ` and ${mpPot} mp potions.`;
      } else {
        text += `.`;
      }
      return text;
    },
    ignoreChest: () => {
      return `You cast a wary glance towards the old chest. Something about its placement feels too convenient - too easy. You've seen enough traps and mimics to trust your  instincts. Without another glance you move onwards.`;
    },
    findNothing: () => {
      return `You drift through the thick forest, each step muffled by the soft rustle of leaves beneath your boots. The air is cool and still, broken only by the distant cry of an unseen bird echoing through the canopy. No monsters lurk, no travelers pass—only trees stretching endlessly in all directions, their shadows long and quiet. It's as if the forest is holding its breath, watching… waiting.`;
    },
  },
};

export { explorationText };
