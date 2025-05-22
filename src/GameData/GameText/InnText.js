const innText = {
  basic: {
    enter: () => {
      return `You step through the worn wooden doors of the Hearth and Hammer Inn, greeted by the warm glow of flickering hearth fires and the low murmur of quiet conversations. The scent of spiced ale and roasting meat fills the air. What would you like to do?`;
    },
    noMoney: () => {
      return `You check your pouch and realize you don't have enough coins to rest here. If you choose to camp outside, you might find some respite under the open sky—but beware, the wilderness holds its own dangers after dark.`;
    },
    rest: () => {
      return `The rest has reignited the fire within you. Strength surges through your veins, your spirit unbreakable and your resolve steeled like tempered steel. With eyes blazing and heart steadfast, you stand ready to face any challenge that dares cross your path. What will you do next?`;
    },
    noRestNeeded: () => {
      return `A surge of pure vitality courses through your veins, leaving no trace of fatigue behind. Your body hums with strength, every muscle poised and ready. You feel unstoppable—there's no need to rest now; the fight ahead awaits, and you're more than prepared.`;
    },
  },
  level: {
    statChoice: () => {
      return `You feel a surge of power welling up inside you—earned through every battle fought, every scar endured. Strength, skill, and knowledge pulse just beneath the surface, ready to be shaped. You've grown from the trials you've faced. What would you like to level up?`;
    },
    missingXP: (xpNeededToLevel) => {
      return `You feel the stirrings of growth within you, but it isn't enough—your journey is far from over. You still need ${xpNeededToLevel} more experience to reach the next level. The path forward calls for more trials, more victories. To grow stronger, you must seek out new foes... and strike them down.`;
    },
    levelDef: () => {
      return `A powerful resilience settles into your bones, like iron woven into your very being. Energy surges through every muscle and sinew, fortifying you from within. You feel sturdier, steadier—ready to endure the blows of even the fiercest foes. The next battle won't find you so easily broken.`;
    },
    levelMp: () => {
      return `A current of arcane energy floods through you, electrifying your senses and illuminating your mind. It swirls beneath your skin like a living force, ancient and boundless. You feel your connection to magic deepen—spells once out of reach now dance at your fingertips, ready to be shaped by your will.`;
    },
    levelAtk: () => {
      return `A surge of raw strength erupts from deep within, flooding your limbs with unstoppable power. Your grip tightens, your stance steadies, and every movement feels charged with purpose. You can feel it—your blows will land harder, strike deeper. With this newfound might, even the fiercest enemy would struggle to withstand your wrath.`;
    },
  },
};

export { innText };
