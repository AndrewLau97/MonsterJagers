const combatText = {
  encounters: {
    slimes: (monsterName) => {
      return `You step into an open field, the tall grass swaying gently in the breeze. For a moment, the scene feels peaceful—until a strange, wet squelch breaks the silence. A ${monsterName} suddenly bounces into your path, its form quivering with intent.`;
    },
    wizards: (monsterName) => {
      return `As you approach the dark silhouette of the tower rising against the sky, the air grows thick and heavy, charged with a subtle arcane energy. A figure steps from the tower’s arched doorway, robes billowing in the unnatural stillness.
      The ${monsterName} before you speaks, voice laced with power: "You are trespassing in my domain. Leave now, or face the consequences."`;
    },
    elementals: (monsterName) => {
      return `The earth trembles beneath your feet as you step into a vast, otherworldly plain. Before you, a raging river cuts its way between crimson cliffs, its waters churning with untamed energy. In the distance, a massive volcano roars, casting fire and smoke into the twilight sky. A sudden shift in the air makes your skin crawl—you feel a presence behind you. You turn slowly... and come face to face with a hulking ${monsterName}.`;
    },
    bandits: (monsterName) => {
      return `Before you, the bandits form a rough semicircle, their eyes gleaming with greed and malice. ${monsterName} steps forward, muscles coiled like a predator's, fingers tightening around the hilt of a jagged blade. The air crackles with hostility as their snarling challenge fills the space between you.`;
    },
    wolves: (monsterName) => {
      return `The wolves move with lethal grace, their sleek forms blending seamlessly with the underbrush. ${monsterName} snarls low, hackles raised, eyes burning with primal hunger. The pack tightens its circle, the scent of fear heavy in the cold air as their silent growls signal the imminent attack.`;
    },
    mimics: (monsterName) => {
      return `You spot a seemingly ordinary chest nestled in the corner of the dimly lit room. Its wood looks worn, and the metal hinges are tarnished, inviting you to approach. But as you reach out, the chest suddenly twists and snarls—it's a ${monsterName} waiting to catch the unwary.`;
    },
  },
  playersTurn: {
    weapon: {
      standard: {
        attacks: (monsterName, weapon) => {
          return ` You tighten your grip around your ${weapon} and dash forward, delivering a clean and powerful swing that lands solidly against the ${monsterName}`;
        },
        misses: (monsterName, weapon) => {
          return ` You tighten your grip around your ${weapon} and dash forward, delivering a clean and powerful swing that lands solidly against the ${monsterName}`;
        },
      },
      element: {
        attacks: (monsterName, weapon, type) => {
          const elementMelee = {
            fire: ` You lunge forward, your ${weapon} ablaze, and slash at the ${monsterName}. Fire trails behind your strike, the searing heat forces it backward`,
            water: ` You dash in, your ${weapon} shimmering with swirling currents, and deliver a fluid,wave-like strike that crashes down on the ${monsterName} like a tsunami`,
            earth: ` You charge ahead, empowered by the strength of the earth. With a roar, you bring down your ${weapon}, landing a crushing blow on the ${monsterName}—the force of a mountain behind it, as the ground quakes beneath your feet.`,
          };
          return elementMelee[type];
        },
        misses: (monsterName, weapon, type) => {
          const elementMissed = {
            fire: ` You lunge forward, your ${weapon} ablaze, slashing at the ${monsterName} - but it sidesteps just in time. Flames trail harmlessly through the air, scorching the ground where it once stood.`,
            water: ` You dash in, your ${weapon} shimmering with swirling currents, and unleash a wave-like strike - but the ${monsterName} slips away, and your attack crashes down with a splash against the earth, missing its mark.`,
            earth: ` You charge ahead, empowered by the strength of the earth. With a roar, you bring down your ${weapon}, but the ${monsterName} evades the blow. The ground quakes from the impact, but the force lands on empty space.`,
          };
          return elementMissed[type];
        },
        noElement: () => {
          return `Your fingers close around nothing but thin air—no spark, no steel, no hum of power. The truth settles in: you do not possess a weapon of this kind. Perhaps another will heed your call`;
        },
      },
    },
    magic: {
      element: {
        attacks: (monsterName, magic, type) => {
          const elementMagic = {
            fire: ` You thrust your hands forward, unleashing a blazing ${magic} that hurtles towards the ${monsterName}, engulfing it in roaring flames and sending waves of scorching heat that makes it stagger back.`,
            water: ` You chant softly, arcane energy swirling in your hand as the very air around you shifts to water. You gather this energy into a ${magic} then hurl it at the ${monsterName} with the force of a tidal wave, drenching it and knocking them down.`,
            earth: ` You slam your hand to the ground, and the earth answers your call. Your ${magic} tears through the soil and surges toward the ${monsterName}, erupting beneath them and causing them to writhe in pain.`,
          };
          return elementMagic[type];
        },
        misses: (monsterName, magic, type) => {
          const magicMissed = {
            fire: ` You thrust your hands forward, releasing a blazing ${magic} that streaks toward the ${monsterName}—but it dives aside at the last moment. The flames erupt in a fiery blast, searing the ground but missing their target entirely.`,
            water: ` You whisper an incantation, arcane energy spiraling into a ${magic}. You launch it at the ${monsterName}, but it evades the attack, and the ${magic} strikes the ground harmlessly behind it.`,
            earth: ` You press your palm to the ground, summoning the force of the earth. Your ${magic} surges beneath the surface and bursts upward—but without missing a beat, the ${monsterName} reacts swiftly, sidestepping the ${magic} with ease.`,
          };
          return magicMissed[type];
        },
        noMagic: () => {
          return `You search your memory, sifting through the incantations you've learned—but nothing stirs. No glyphs ignite, no arcane words come to your lips. You know no magic of this element. Perhaps another school of magic lies within your grasp.`;
        },
        noMana: () => {
          return `A mere flicker of arcane energy sparks at your fingertips, but it's quickly scattered by an unseen wind. Your mana is too depleted to shape the spell. Perhaps it's wiser to reach for steel this time`;
        },
      },
    },
    attackStandard: (monsterName, weapon) => {
      return `You tighten your grip around your ${weapon} and dash forward, delivering a clean and powerful swing that lands solidly against the ${monsterName}`;
    },
    missStandard: (monsterName, weapon) => {
      return `You tighten your grip around your ${weapon} and dash forward, delivering a clean and powerful swing—only for the ${monsterName} to dodge at the last moment, your strike cutting through empty air.`;
    },
    attackElement: (monsterName, weapon, type) => {
      const elementMelee = {
        fire: `You lunge forward, your ${weapon} ablaze, and slash at the ${monsterName}. Fire trails behind your strike, the searing heat forces it backward`,
        water: `You dash in, your ${weapon} shimmering with swirling currents, and deliver a fluid,wave-like strike that crashes down on the ${monsterName} like a tsunami`,
        earth: `You charge ahead, empowered by the strength of the earth. With a roar, you bring down your ${weapon}, landing a crushing blow on the ${monster}—the force of a mountain behind it, as the ground quakes beneath your feet.`,
      };
      return elementMelee[type];
    },
    missElement: (monsterName, weapon, type) => {
      const elementMissed = {
        fire: `You lunge forward, your ${weapon} ablaze, slashing at the ${monsterName} - but it sidesteps just in time. Flames trail harmlessly through the air, scorching the ground where it once stood.`,
        water: `You dash in, your ${weapon} shimmering with swirling currents, and unleash a wave-like strike - but the ${monsterName} slips away, and your attack crashes down with a splash against the earth, missing its mark.`,
        earth: `You charge ahead, empowered by the strength of the earth. With a roar, you bring down your ${weapon}, but the ${monsterName} evades the blow. The ground quakes from the impact, but the force lands on empty space.`,
      };
      return elementMissed[type];
    },
    noElement: () => {
      return `Your fingers close around nothing but thin air—no spark, no steel, no hum of power. The truth settles in: you do not possess a weapon of this kind. Perhaps another will heed your call`;
    },
    attackMagic: (monsterName, magic, type) => {
      const elementMagic = {
        fire: `You thrust your hands forward, unleashing a blazing ${magic} that hurtles towards the ${monsterName}, engulfing it in roaring flames and sending waves of scorching heat that makes it stagger back.`,
        water: `You chant softly, arcane energy swirling in your hand as the very air around you shifts to water. You gather this energy into a ${magic} then hurl it at the ${monsterName} with the force of a tidal wave, drenching it and knocking them down.`,
        earth: `You slam your hand to the ground, and the earth answers your call. Your ${magic} tears through the soil and surges toward the ${monsterName}, erupting beneath them and causing them to writhe in pain.`,
      };
      return elementMagic[type];
    },
    missMagic: (monsterName, magic, type) => {
      const magicMissed = {
        fire: `You thrust your hands forward, releasing a blazing ${magic} that streaks toward the ${monsterName}—but it dives aside at the last moment. The flames erupt in a fiery blast, searing the ground but missing their target entirely.`,
        water: `You whisper an incantation, arcane energy spiraling into a ${magic}. You launch it at the ${monsterName}, but it evades the attack, and the ${magic} strikes the ground harmlessly behind it.`,
        earth: `You press your palm to the ground, summoning the force of the earth. Your ${magic} surges beneath the surface and bursts upward—but without missing a beat, the ${monsterName} reacts swiftly, sidestepping the ${magic} with ease.`,
      };
      return magicMissed[type];
    },
    noMagic: () => {
      return `You search your memory, sifting through the incantations you've learned—but nothing stirs. No glyphs ignite, no arcane words come to your lips. You know no magic of this element. Perhaps another school of magic lies within your grasp.`;
    },
    noMana: () => {
      return `A mere flicker of arcane energy sparks at your fingertips, but it's quickly scattered by an unseen wind. Your mana is too depleted to shape the spell. Perhaps it's wiser to reach for steel this time`;
    },
    dealDamage: (resistance, damage) => {
      const resistanceText = {
        immune:
          " The monster is immune to your attack, try another element type.",
        resistant: ` The monster is resistant to your attack, you only deal ${damage} damage. Try another element type.`,
        weakness: ` The monster is weak to your attack, you deal ${damage} damage!`,
        neutral: ` You deal ${damage} damage.`,
      };
      return resistanceText[resistance];
    },
  },
  potions: {
    healthMax: () => {
      return `You reach for a potion, but stop short—your body feels unscathed, your pulse steady and strong. There's no need to use a healing draught when you're already at your peak.`;
    },
    manaMax: () => {
      return `Your hand hovers over your satchel, seeking a mana vial—but the arcane current within you is full and steady. Your mind is clear, your magical reserves untapped. There's no need to restore what hasn't been spent.`;
    },
    recoverHealth: () => {
      return `The bitter liquid burns slightly as it slides down your throat, but you drink deeply without hesitation. A soothing warmth spreads through your chest and limbs, easing pain and mending wounds. Strength returns steadily to your body, fueling you to stand firm and continue the fight ahead.`;
    },
    recoverMana: () => {
      return `A surge of shimmering arcane energy pulses through your veins as the potion takes hold. Your thoughts sharpen, the fog in your mind lifting, while your magical reserves refill with vibrant power. Renewed and focused, you feel ready to unleash your spells once more.`;
    },
    noPotion: (type) => {
      return `You reach into your bag, searching for a ${type} potion, but your fingers close around empty space. It seems you don't have any of those potions in your supplies.`;
    },
  },
  monstersTurn: {
    slimes: {
      attacks: (monsterName) => {
        return `The ${monsterName} lunges across the field, its body rippling with eerie speed. A tendril lashes out grabbing your led and pulling you to the ground.`;
      },
      misses: (monsterName) => {
        return `With a sudden burst of motion, the ${monsterName} lunges forward. Its tendrils lash out, slicing through the air — missing your leg by mere inches — as you dive aside, the ground erupting in a spray of dirt beneath your boots.`;
      },
    },
    wizards: {
      attacks: (monsterName) => {
        return `The ${monsterName} chants, eyes glowing, as a bolt of arcane energy crackles through the air before slamming into your chest.`;
      },
      misses: (monsterName) => {
        return `The ${monsterName} chants aloud, eyes glowing with power, as a bolt of arcane energy crackles through the air - only to streak past you, exploding harmlessly against the ground behind`;
      },
    },
    elementals: {
      attacks: (monsterName) => {
        return `The ground trembles as the ${monsterName} rises. It lunges forward, slamming its massive fist into your chest. You're sent a few feet back before hitting the ground.`;
      },
      misses: (monsterName) => {
        return `The ${monsterName} charges at you and slams its massive fists down—but you roll aside just in time, and the blow crashes into the earth, carving a deep crater where you stood seconds ago.`;
      },
    },

    takeDamage: (damage) => {
      return ` You have taken ${damage} damage.`;
    },
  },
  controls: {
    meleeChoice: () => {
      return `You choose to fight. Will you take up your unenchanted weapon, or reach for one imbued with elemental power?`;
    },
    elementChoice: () => {
      return `You choose not to wield your unenchanted weapon. Instead, you reach toward your back, hoping to draw one that hums with elemental power. Which do you draw?`;
    },
    magicChoice: () => {
      return `You close your eyes briefly, centering yourself and recalling the spells you've mastered. Which spell will you cast?`;
    },
    potionChoice: () => {
      return `You reach into your pack, unsure of what you might find. Your hand brushes over worn leather, cool glass, and the faint scent of herbs rises. What item will you pull out to use—if any remains?`;
    },
    goBackChoice: () => {
      return `You pull back at the last moment, your decision unresolved. Your return to your options before you. Will you strike with a weapon, unleash a spell, or try something else?`;
    },
  },
  defeat: {
    playersDefeat: () => {
      return `Your strength fades, each breath slipping further from reach.
Your eyelids grow heavy, and the world around you begins to blur.
Darkness embraces you—silent, still, and final.
Will you rise once more and begin your journey anew?`;
    },
    monstersDefeat: (monsterName, gold, xp, damageDealt) => {
      return `You deal ${damageDealt} damage, delivering the final blow to the ${monsterName}.
It collapses, defeated. You gain ${gold} gold and ${xp} XP.
Where would you like to go next?`;
    },
    rebirth: () => {
      return `A strange sense awakens as you pass through the town gates—a heavy wave of déjà vu. The streets feel hauntingly familiar, as if you’ve walked them before… but will you choose the same path this time? Each step stirs memories of what was lost, and you wonder: can you change your fate, or are you doomed to repeat it all again?`;
    },
  },
};

export { combatText };
