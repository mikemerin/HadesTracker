import {
  BoonList,
  BoonTypes,
  ChaosBoons,
  Gods,
  SoloBoons
} from 'redux/domain';

const boonList: BoonList = {
  [Gods.Aphrodite]: {
    [BoonTypes.Solo]: {
      [SoloBoons.Attack]: ['Heartbreak Strike'],
      [SoloBoons.Special]: ['Heartbreak Flourish'],
      [SoloBoons.Cast]: ['Crush Shot'],
      [SoloBoons.Dash]: ['Passion Dash'],
      [SoloBoons.Call]: ['Aphrodite\'s Aid'],
      [SoloBoons.Other]: [
        'Dying Lament',
        'Wave of Despair',
        'Life Affirmation',
        'Different League',
        'Empty Inside',
        'Broken Resolve',
        'Blown Kiss',
        'Sweet Surrender',
      ],
      [SoloBoons.Legendary]: ['Unhealthy Fixation']
    },
  },
  [Gods.Ares]: {
    [BoonTypes.Solo]: {
      [SoloBoons.Attack]: ['Curse of Agony'],
      [SoloBoons.Special]: ['Curse of Pain'],
      [SoloBoons.Cast]: ['Slicing Shot'],
      [SoloBoons.Dash]: ['Blade Dash'],
      [SoloBoons.Call]: ['Ares\' Aid'],
      [SoloBoons.Other]: [
        'Curse of Vengeance',
        'Urge to Kill',
        'Blood Frenzy',
        'Battle Rage',
        'Black Metal',
        'Engulfing Vortex',
        'Dire Misfortune',
        'Impending Doom',
      ],
      [SoloBoons.Legendary]: ['Vicious Cycle']
    },
  },
  [Gods.Artemis]: {
    [BoonTypes.Solo]: {
      [SoloBoons.Attack]: ['Deadly Strike'],
      [SoloBoons.Special]: ['Deadly Flourish'],
      [SoloBoons.Cast]: ['True Shot'],
      [SoloBoons.Dash]: ['Hunter Dash'],
      [SoloBoons.Call]: ['Artemis\' Aid'],
      [SoloBoons.Other]: [
        'Pressure Points',
        'Exit Wounds',
        'Clean Kill',
        'Support Fire',
        'Hide Breaker',
        'Hunter Instinct',
        'Hunter\'s Mark',
      ],
      [SoloBoons.Legendary]: ['Fully Loaded']
    },
  },
  [Gods.Athena]: {
    [BoonTypes.Solo]: {
      [SoloBoons.Attack]: ['Divine Strike'],
      [SoloBoons.Special]: ['Divine Flourish'],
      [SoloBoons.Cast]: ['Phalanx Shot'],
      [SoloBoons.Dash]: ['Divine Dash'],
      [SoloBoons.Call]: ['Athena\'s Aid'],
      [SoloBoons.Other]: [
        'Holy Shield',
        'Bronze Skin',
        'Deathless Stand',
        'Last Stand',
        'Proud Bearing',
        'Sure Footing',
        'Blinding Flash',
        'Brilliant Riposte',
      ],
      [SoloBoons.Legendary]: ['Divine Protection']
    },
  },
  [Gods.Chaos]: {
    [BoonTypes.Chaos]: {
      [ChaosBoons.Blessing]: [
        'Affluence',
        'Ambush',
        'Assault',
        'Defiance',
        'Eclipse',
        'Favor',
        'Flourish',
        'Grasp',
        'Lunge',
        'Shot',
        'Soul',
        'Strike',
      ],
      [ChaosBoons.Curse]: [
        'Abyssal',
        'Addled',
        'Atrophic',
        'Caustic',
        'Enshrouded',
        'Excruciating',
        'Flayed',
        'Halting',
        'Maimed',
        'Pauper',
        'Roiling',
        'Slippery',
        'Slothful',
      ],
    },
  },
  [Gods.Demeter]: {
    [BoonTypes.Solo]: {
      [SoloBoons.Attack]: ['Frost Strike'],
      [SoloBoons.Special]: ['Frost Flourish'],
      [SoloBoons.Cast]: ['Crystal Beam'],
      [SoloBoons.Dash]: ['Mistral Dash'],
      [SoloBoons.Call]: ['Demeter\'s Aid'],
      [SoloBoons.Other]: [
        'Snow Burst',
        'Frozen Touch',
        'Rare Crop',
        'Nourished Soul',
        'Ravenous Will',
        'Glacial Glare',
        'Arctic Blast',
        'Killing Freeze',
      ],
      [SoloBoons.Legendary]: ['Winter Harvest']
    },
  },
  [Gods.Dionysus]: {
    [BoonTypes.Solo]: {
      [SoloBoons.Attack]: ['Drunken Strike'],
      [SoloBoons.Special]: ['Drunken Flourish'],
      [SoloBoons.Cast]: ['Trippy Shot', 'Trippy Flare'],
      [SoloBoons.Dash]: ['Drunken Dash'],
      [SoloBoons.Call]: ['Dionysus\' Aid'],
      [SoloBoons.Other]: [
        'Premium Vintage',
        'After Party',
        'Strong Drink',
        'Positive Outlook',
        'High Tolerance',
        'Bad Influence',
        'Numbing Sensation',
        'Peer Pressure',
      ],
      [SoloBoons.Legendary]: ['Black Out']
    },
  },
  [Gods.Hermes]: {
    [BoonTypes.Other]: {
      [SoloBoons.Other]: [
        'Quick Reload',
        'Auto Reload',
        'Greatest Reflex',
        'Side Hustle',
        'Greater Evasion',
        'Swift Flourish',
        'Second Wind',
        'Swift Strike',
        'Greater Haste',
        'Flurry Cast',
        'Quick Favor',
        'Quick Recovery',
        'Hyper Sprint',
        'Rush Delivery',
      ],
      [SoloBoons.Legendary]: ['Greater Recall', 'Bad News']
    }
  },
  [Gods.Poseidon]: {
    [BoonTypes.Solo]: {
      [SoloBoons.Attack]: ['Tempest Strike'],
      [SoloBoons.Special]: ['Tempest Flourish'],
      [SoloBoons.Cast]: ['Flood Shot'],
      [SoloBoons.Dash]: ['Tidal Dash'],
      [SoloBoons.Call]: ['Poseidon\'s Aid'],
      [SoloBoons.Other]: [
        'Boiling Point',
        'Hydraulic Might',
        'Sunken Treasure',
        'Ocean\'s Bounty',
        'Typhoon\'s Fury',
        'Wave Pounding',
        'Rip Current',
        'Breaking Wave',
        'Razor Shoals',
      ],
      [SoloBoons.Legendary]: ['Second Wave', 'Huge Catch']
    },
  },
  [Gods.Zeus]: {
    [BoonTypes.Solo]: {
      [SoloBoons.Attack]: ['Lightning Strike'],
      [SoloBoons.Special]: ['Thunder Flourish'],
      [SoloBoons.Cast]: ['Electric Shot'],
      [SoloBoons.Dash]: ['Thunder Dash'],
      [SoloBoons.Call]: ['Zeus\' Aid'],
      [SoloBoons.Other]: [
        'Billowing Strength',
        'Lightning Reflexes',
        'Heaven\'s Vengeance',
        'Clouded Judgement',
        'High Voltage',
        'Double Strike',
        'Storm Lightning',
        'Static Discharge',
      ],
      [SoloBoons.Legendary]: ['Splitting Bolt']
    },
  },
};

const boons = {
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
}

export {
  boons,
  boonList,
}
