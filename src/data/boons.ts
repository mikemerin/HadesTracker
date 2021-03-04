import { Boons, Gods, SoloBoons } from 'redux/domain';

// TODO: attach SoloBoons, which will require images.ts to be changed
// const soloBoons: {[key: string]: SoloBoons} = {
const soloBoons: {[key: string]: {[key: string]: any}} = {
  [Gods.Aphrodite]: {
    [Boons.Attack]: 'Heartbreak Strike',
    [Boons.Special]: 'Heartbreak Flourish',
    [Boons.Cast]: ['Crush Shot'],
    [Boons.Dash]: 'Passion Dash',
    [Boons.Call]: 'Aphrodite\'s Aid',

    [Boons.Other]: [
      'Dying Lament',
      'Wave of Despair',
      'Life Affirmation',
      'Different League',
      'Empty Inside',
      'Broken Resolve',
      'Blown Kiss',
      'Sweet Surrender',
    ],

    [Boons.Legendary]: ['Unhealthy Fixation']
  },
  [Gods.Ares]: {
    [Boons.Attack]: 'Curse of Agony',
    [Boons.Special]: 'Curse of Pain',
    [Boons.Cast]: ['Slicing Shot'],
    [Boons.Dash]: 'Blade Dash',
    [Boons.Call]: 'Ares\' Aid',

    [Boons.Other]: [
      'Curse of Vengeance',
      'Urge to Kill',
      'Blood Frenzy',
      'Battle Rage',
      'Black Metal',
      'Engulfing Vortex',
      'Dire Misfortune',
      'Impending Doom',
    ],

    [Boons.Legendary]: ['Vicious Cycle']
  },
  [Gods.Artemis]: {
    [Boons.Attack]: 'Deadly Strike',
    [Boons.Special]: 'Deadly Flourish',
    [Boons.Cast]: ['True Shot'],
    [Boons.Dash]: 'Hunter Dash',
    [Boons.Call]: 'Artemis\' Aid',

    [Boons.Other]: [
      'Pressure Points',
      'Exit Wounds',
      'Clean Kill',
      'Support Fire',
      'Hide Breaker',
      'Hunter Instinct',
      'Hunter\'s Mark',
    ],

    [Boons.Legendary]: ['Fully Loaded']
  },
  [Gods.Athena]: {
    [Boons.Attack]: 'Divine Strike',
    [Boons.Special]: 'Divine Flourish',
    [Boons.Cast]: ['Phalanx Shot'],
    [Boons.Dash]: 'Divine Dash',
    [Boons.Call]: 'Athena\'s Aid',

    [Boons.Other]: [
      'Holy Shield',
      'Bronze Skin',
      'Deathless Stand',
      'Last Stand',
      'Proud Bearing',
      'Sure Footing',
      'Blinding Flash',
      'Brilliant Riposte',
    ],

    [Boons.Legendary]: ['Divine Protection']
  },
  [Gods.Demeter]: {
    [Boons.Attack]: 'Frost Strike',
    [Boons.Special]: 'Frost Flourish',
    [Boons.Cast]: ['Crystal Beam'],
    [Boons.Dash]: 'Mistral Dash',
    [Boons.Call]: 'Demeter\'s Aid',

    [Boons.Other]: [
      'Snow Burst',
      'Frozen Touch',
      'Rare Crop',
      'Nourished Soul',
      'Ravenous Will',
      'Glacial Glare',
      'Arctic Blast',
      'Killing Freeze',
    ],

    [Boons.Legendary]: ['Winter Harvest']
  },
  [Gods.Dionysus]: {
    [Boons.Attack]: 'Drunken Strike',
    [Boons.Special]: 'Drunken Flourish',
    [Boons.Cast]: ['Trippy Shot', 'Trippy Flare'],
    [Boons.Dash]: 'Drunken Dash',
    [Boons.Call]: 'Dionysus\' Aid',

    [Boons.Other]: [
      'Premium Vintage',
      'After Party',
      'Strong Drink',
      'Positive Outlook',
      'High Tolerance',
      'Bad Influence',
      'Numbing Sensation',
      'Peer Pressure',
    ],

    [Boons.Legendary]: ['Black Out']
  },
  [Gods.Poseidon]: {
    [Boons.Attack]: 'Tempest Strike',
    [Boons.Special]: 'Tempest Flourish',
    [Boons.Cast]: ['Flood Shot'],
    [Boons.Dash]: 'Tidal Dash',
    [Boons.Call]: 'Poseidon\'s Aid',

    [Boons.Other]: [
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

    [Boons.Legendary]: ['Second Wave', 'Huge Catch']
  },
  [Gods.Zeus]: {
    [Boons.Attack]: 'Lightning Strike',
    [Boons.Special]: 'Thunder Flourish',
    [Boons.Cast]: ['Electric Shot'],
    [Boons.Dash]: 'Thunder Dash',
    [Boons.Call]: 'Zeus\' Aid',

    [Boons.Other]: [
      'Billowing Strength',
      'Lightning Reflexes',
      'Heaven\'s Vengeance',
      'Clouded Judgement',
      'High Voltage',
      'Double Strike',
      'Storm Lightning',
      'Static Discharge',
    ],

    [Boons.Legendary]: ['Splitting Bolt']
  }
}

const otherBoons = {
  [Gods.Hermes]: {
    [Boons.Other]: [
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

    [Boons.Legendary]: ['Greater Recall', 'Bad News']
  },
  [Gods.Hermes]: {

  }
}

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
  otherBoons,
  soloBoons,
}
