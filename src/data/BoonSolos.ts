import {
  BoonGroups,
  BoonRow,
  BoonTable,
  Gods,
} from 'redux/domain';

const generateBoonSolos = (): BoonGroups => ({
  [Gods.Aphrodite]: {
    [BoonTable.Solo]: {
      [BoonRow.Attack]: ['Heartbreak Strike'],
      [BoonRow.Special]: ['Heartbreak Flourish'],
      [BoonRow.Cast]: ['Crush Shot'],
      [BoonRow.Dash]: ['Passion Dash'],
      [BoonRow.Call]: ['Aphrodite\'s Aid'],
      [BoonRow.Other]: [
        'Dying Lament',
        'Wave of Despair',
        'Life Affirmation',
        'Different League',
        'Empty Inside',
        'Broken Resolve',
        'Blown Kiss',
        'Sweet Surrender',
      ],
      [BoonRow.Legendary]: ['Unhealthy Fixation']
    },
  },
  [Gods.Ares]: {
    [BoonTable.Solo]: {
      [BoonRow.Attack]: ['Curse of Agony'],
      [BoonRow.Special]: ['Curse of Pain'],
      [BoonRow.Cast]: ['Slicing Shot'],
      [BoonRow.Dash]: ['Blade Dash'],
      [BoonRow.Call]: ['Ares\' Aid'],
      [BoonRow.Other]: [
        'Curse of Vengeance',
        'Urge to Kill',
        'Blood Frenzy',
        'Battle Rage',
        'Black Metal',
        'Engulfing Vortex',
        'Dire Misfortune',
        'Impending Doom',
      ],
      [BoonRow.Legendary]: ['Vicious Cycle']
    },
  },
  [Gods.Artemis]: {
    [BoonTable.Solo]: {
      [BoonRow.Attack]: ['Deadly Strike'],
      [BoonRow.Special]: ['Deadly Flourish'],
      [BoonRow.Cast]: ['True Shot'],
      [BoonRow.Dash]: ['Hunter Dash'],
      [BoonRow.Call]: ['Artemis\' Aid'],
      [BoonRow.Other]: [
        'Pressure Points',
        'Exit Wounds',
        'Clean Kill',
        'Support Fire',
        'Hide Breaker',
        'Hunter Instinct',
        'Hunter\'s Mark',
      ],
      [BoonRow.Legendary]: ['Fully Loaded']
    },
  },
  [Gods.Athena]: {
    [BoonTable.Solo]: {
      [BoonRow.Attack]: ['Divine Strike'],
      [BoonRow.Special]: ['Divine Flourish'],
      [BoonRow.Cast]: ['Phalanx Shot'],
      [BoonRow.Dash]: ['Divine Dash'],
      [BoonRow.Call]: ['Athena\'s Aid'],
      [BoonRow.Other]: [
        'Holy Shield',
        'Bronze Skin',
        'Deathless Stand',
        'Last Stand',
        'Proud Bearing',
        'Sure Footing',
        'Blinding Flash',
        'Brilliant Riposte',
      ],
      [BoonRow.Legendary]: ['Divine Protection']
    },
  },
  [Gods.Chaos]: {
    [BoonTable.Chaos]: {
      [BoonRow.Blessing]: [
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
      [BoonRow.Curse]: [
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
    [BoonTable.Solo]: {
      [BoonRow.Attack]: ['Frost Strike'],
      [BoonRow.Special]: ['Frost Flourish'],
      [BoonRow.Cast]: ['Crystal Beam'],
      [BoonRow.Dash]: ['Mistral Dash'],
      [BoonRow.Call]: ['Demeter\'s Aid'],
      [BoonRow.Other]: [
        'Snow Burst',
        'Frozen Touch',
        'Rare Crop',
        'Nourished Soul',
        'Ravenous Will',
        'Glacial Glare',
        'Arctic Blast',
        'Killing Freeze',
      ],
      [BoonRow.Legendary]: ['Winter Harvest']
    },
  },
  [Gods.Dionysus]: {
    [BoonTable.Solo]: {
      [BoonRow.Attack]: ['Drunken Strike'],
      [BoonRow.Special]: ['Drunken Flourish'],
      [BoonRow.Cast]: ['Trippy Shot', 'Trippy Flare'],
      [BoonRow.Dash]: ['Drunken Dash'],
      [BoonRow.Call]: ['Dionysus\' Aid'],
      [BoonRow.Other]: [
        'Premium Vintage',
        'After Party',
        'Strong Drink',
        'Positive Outlook',
        'High Tolerance',
        'Bad Influence',
        'Numbing Sensation',
        'Peer Pressure',
      ],
      [BoonRow.Legendary]: ['Black Out']
    },
  },
  [Gods.Hermes]: {
    [BoonTable.Other]: {
      [BoonRow.Other]: [
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
      [BoonRow.Legendary]: ['Greater Recall', 'Bad News']
    }
  },
  [Gods.Poseidon]: {
    [BoonTable.Solo]: {
      [BoonRow.Attack]: ['Tempest Strike'],
      [BoonRow.Special]: ['Tempest Flourish'],
      [BoonRow.Cast]: ['Flood Shot'],
      [BoonRow.Dash]: ['Tidal Dash'],
      [BoonRow.Call]: ['Poseidon\'s Aid'],
      [BoonRow.Other]: [
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
      [BoonRow.Legendary]: ['Second Wave', 'Huge Catch']
    },
  },
  [Gods.Zeus]: {
    [BoonTable.Solo]: {
      [BoonRow.Attack]: ['Lightning Strike'],
      [BoonRow.Special]: ['Thunder Flourish'],
      [BoonRow.Cast]: ['Electric Shot'],
      [BoonRow.Dash]: ['Thunder Dash'],
      [BoonRow.Call]: ['Zeus\' Aid'],
      [BoonRow.Other]: [
        'Billowing Strength',
        'Lightning Reflexes',
        'Heaven\'s Vengeance',
        'Clouded Judgement',
        'High Voltage',
        'Double Strike',
        'Storm Lightning',
        'Static Discharge',
      ],
      [BoonRow.Legendary]: ['Splitting Bolt']
    },
  }
});

export {
  generateBoonSolos,
};
