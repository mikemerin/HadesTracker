import {
  GroupBoons,
  BoonRows,
  BoonTables,
  Gods,
} from 'redux/domain';

const boonSolos: GroupBoons = {
  [Gods.Aphrodite]: {
    [BoonTables.Solo]: {
      [BoonRows.Attack]: ['Heartbreak Strike'],
      [BoonRows.Special]: ['Heartbreak Flourish'],
      [BoonRows.Cast]: ['Crush Shot'],
      [BoonRows.Dash]: ['Passion Dash'],
      [BoonRows.Call]: ['Aphrodite\'s Aid'],
      [BoonRows.Other]: [
        'Dying Lament',
        'Wave of Despair',
        'Life Affirmation',
        'Different League',
        'Empty Inside',
        'Broken Resolve',
        'Blown Kiss',
        'Sweet Surrender',
      ],
      [BoonRows.Legendary]: ['Unhealthy Fixation']
    },
  },
  [Gods.Ares]: {
    [BoonTables.Solo]: {
      [BoonRows.Attack]: ['Curse of Agony'],
      [BoonRows.Special]: ['Curse of Pain'],
      [BoonRows.Cast]: ['Slicing Shot'],
      [BoonRows.Dash]: ['Blade Dash'],
      [BoonRows.Call]: ['Ares\' Aid'],
      [BoonRows.Other]: [
        'Curse of Vengeance',
        'Urge to Kill',
        'Blood Frenzy',
        'Battle Rage',
        'Black Metal',
        'Engulfing Vortex',
        'Dire Misfortune',
        'Impending Doom',
      ],
      [BoonRows.Legendary]: ['Vicious Cycle']
    },
  },
  [Gods.Artemis]: {
    [BoonTables.Solo]: {
      [BoonRows.Attack]: ['Deadly Strike'],
      [BoonRows.Special]: ['Deadly Flourish'],
      [BoonRows.Cast]: ['True Shot'],
      [BoonRows.Dash]: ['Hunter Dash'],
      [BoonRows.Call]: ['Artemis\' Aid'],
      [BoonRows.Other]: [
        'Pressure Points',
        'Exit Wounds',
        'Clean Kill',
        'Support Fire',
        'Hide Breaker',
        'Hunter Instinct',
        'Hunter\'s Mark',
      ],
      [BoonRows.Legendary]: ['Fully Loaded']
    },
  },
  [Gods.Athena]: {
    [BoonTables.Solo]: {
      [BoonRows.Attack]: ['Divine Strike'],
      [BoonRows.Special]: ['Divine Flourish'],
      [BoonRows.Cast]: ['Phalanx Shot'],
      [BoonRows.Dash]: ['Divine Dash'],
      [BoonRows.Call]: ['Athena\'s Aid'],
      [BoonRows.Other]: [
        'Holy Shield',
        'Bronze Skin',
        'Deathless Stand',
        'Last Stand',
        'Proud Bearing',
        'Sure Footing',
        'Blinding Flash',
        'Brilliant Riposte',
      ],
      [BoonRows.Legendary]: ['Divine Protection']
    },
  },
  [Gods.Chaos]: {
    [BoonTables.Chaos]: {
      [BoonRows.Blessing]: [
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
      [BoonRows.Curse]: [
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
    [BoonTables.Solo]: {
      [BoonRows.Attack]: ['Frost Strike'],
      [BoonRows.Special]: ['Frost Flourish'],
      [BoonRows.Cast]: ['Crystal Beam'],
      [BoonRows.Dash]: ['Mistral Dash'],
      [BoonRows.Call]: ['Demeter\'s Aid'],
      [BoonRows.Other]: [
        'Snow Burst',
        'Frozen Touch',
        'Rare Crop',
        'Nourished Soul',
        'Ravenous Will',
        'Glacial Glare',
        'Arctic Blast',
        'Killing Freeze',
      ],
      [BoonRows.Legendary]: ['Winter Harvest']
    },
  },
  [Gods.Dionysus]: {
    [BoonTables.Solo]: {
      [BoonRows.Attack]: ['Drunken Strike'],
      [BoonRows.Special]: ['Drunken Flourish'],
      [BoonRows.Cast]: ['Trippy Shot', 'Trippy Flare'],
      [BoonRows.Dash]: ['Drunken Dash'],
      [BoonRows.Call]: ['Dionysus\' Aid'],
      [BoonRows.Other]: [
        'Premium Vintage',
        'After Party',
        'Strong Drink',
        'Positive Outlook',
        'High Tolerance',
        'Bad Influence',
        'Numbing Sensation',
        'Peer Pressure',
      ],
      [BoonRows.Legendary]: ['Black Out']
    },
  },
  [Gods.Hermes]: {
    [BoonTables.Other]: {
      [BoonRows.Other]: [
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
      [BoonRows.Legendary]: ['Greater Recall', 'Bad News']
    }
  },
  [Gods.Poseidon]: {
    [BoonTables.Solo]: {
      [BoonRows.Attack]: ['Tempest Strike'],
      [BoonRows.Special]: ['Tempest Flourish'],
      [BoonRows.Cast]: ['Flood Shot'],
      [BoonRows.Dash]: ['Tidal Dash'],
      [BoonRows.Call]: ['Poseidon\'s Aid'],
      [BoonRows.Other]: [
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
      [BoonRows.Legendary]: ['Second Wave', 'Huge Catch']
    },
  },
  [Gods.Zeus]: {
    [BoonTables.Solo]: {
      [BoonRows.Attack]: ['Lightning Strike'],
      [BoonRows.Special]: ['Thunder Flourish'],
      [BoonRows.Cast]: ['Electric Shot'],
      [BoonRows.Dash]: ['Thunder Dash'],
      [BoonRows.Call]: ['Zeus\' Aid'],
      [BoonRows.Other]: [
        'Billowing Strength',
        'Lightning Reflexes',
        'Heaven\'s Vengeance',
        'Clouded Judgement',
        'High Voltage',
        'Double Strike',
        'Storm Lightning',
        'Static Discharge',
      ],
      [BoonRows.Legendary]: ['Splitting Bolt']
    },
  }
};

export {
  boonSolos,
};
