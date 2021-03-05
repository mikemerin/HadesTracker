const boonInfo = {
    'Black Metal': {
      type: 'Single',
      requirements: {
        single: ['Slicing Shot', 'Blade Dash', 'Ares\' Aid']
      }
    },
    'Engulfing Vortex': {
      type: 'Single',
      requirements: {
        single: ['Slicing Shot', 'Blade Dash', 'Ares\' Aid']
      }
    },
    'Dire Misfortune': {
      type: 'Single',
      requirements: {
        single: ['Curse of Agony', 'Curse of Pain']
      }
    },
    'Impending Doom': {
      type: 'Single',
      requirements: {
        single: ['Curse of Agony', 'Curse of Pain', 'Curse of Vengeance']
      }
    },
    'Vicious Cycle': {
      type: 'Legendary',
      requirements: {
        single: ['Black Metal', 'Engulfing Vortex']
      }
    },
    'Hunting Blades': {
      type: 'Duo',
      gods: ['Ares', 'Artemis'],
      requirements: {
        Ares: ['Slicing Shot'],
        Artemis: ['Deadly Strike', 'Deadly Flourish', 'Hunter Dash', 'Artemis\' Aid']
      }
    },
};

export {
  boonInfo
};
