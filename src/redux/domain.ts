import { Boons } from './domainBoons';

export type Boon = typeof Boons[keyof typeof Boons];

export const BoonTables = {
  Aspects: 'Aspects',
  Chaos: 'Chaos',
  CustomerLoyalty: 'CustomerLoyalty',
  Duo: 'Duo',
  Other: 'Other',
  Solo: 'Solo',
  Weapon: 'Weapon',
} as const;

export type BoonTable = typeof BoonTables[keyof typeof BoonTables];

export const BoonRows = {
  Attack: 'Attack',
  Aspect: 'Aspect Unlocks',
  Blessing: 'Blessing',
  Call: 'Call',
  Cast: 'Cast',
  Curse: 'Curse',
  Daedalus: 'Daedalus Upgrades',
  Dash: 'Dash',
  Item: 'Item',
  Other: 'Other',
  Special: 'Special',
  Legendary: 'Legendary',
} as const;

export type BoonRow = typeof BoonRows[keyof typeof BoonRows];

export const Gods = {
  Aphrodite: 'Aphrodite',
  Ares: 'Ares',
  Artemis: 'Artemis',
  Athena: 'Athena',
  Chaos: 'Chaos',
  Demeter: 'Demeter',
  Dionysus: 'Dionysus',
  Hermes: 'Hermes',
  Poseidon: 'Poseidon',
  Zeus: 'Zeus',
} as const;

export type God = typeof Gods[keyof typeof Gods];

export const Weapons = {
  Blade: 'Stygian Blade',
  Bow: 'Heart-Seeker Bow',
  Fists: 'Twin Fists',
  Rail: 'Adamant Rail',
  Shield: 'Shield of Chaos',
  Spear: 'Eternal Spear',
} as const;

export type Weapon = typeof Weapons[keyof typeof Weapons];

export const Aspects = {
  Blade_Arthur: 'Aspect of Arthur',
  Blade_Nemesis: 'Aspect of Nemesis',
  Blade_Poseidon: 'Aspect of Poseidon',
  Blade_Zagreus: 'Aspect of Zagreus (Blade)',
  Bow_Chiron: 'Aspect of Chiron',
  Bow_Hera: 'Aspect of Hera',
  Bow_Rama: 'Aspect of Rama',
  Bow_Zagreus: 'Aspect of Zagreus (Bow)',
  Fists_Demeter: 'Aspect of Demeter',
  Fists_Gilgamesh: 'Aspect of Gilgamesh',
  Fists_Talos: 'Aspect of Talos',
  Fists_Zagreus: 'Aspect of Zagreus (Fists)',
  Rail_Eris: 'Aspect of Eris',
  Rail_Hestia: 'Aspect of Hestia',
  Rail_Lucifer: 'Aspect of Lucifer',
  Rail_Zagreus: 'Aspect of Zagreus (Rail)',
  Shield_Beowulf: 'Aspect of Beowulf',
  Shield_Chaos: 'Aspect of Chaos',
  Shield_Zagreus: 'Aspect of Zagreus (Shield)',
  Shield_Zeus: 'Aspect of Zeus',
  Spear_Achilles: 'Aspect of Achilles',
  Spear_Guan_Yu: 'Aspect of Guan Yu',
  Spear_Hades: 'Aspect of Hades',
  Spear_Zagreus: 'Aspect of Zagreus (Spear)',
} as const;

export type Aspect = typeof Aspects[keyof typeof Aspects];

export const Pages = {
  Main: {text: 'Main Gods', url: '/Boons/Main'},
  Other: {text: 'Other Gods', url: '/Boons/Other'},
  Weapons: {text: 'Infernal Arms', url: '/Boons/Weapons'},
  About: {text: 'About', url: '/About'}
} as const;

export type Page = typeof Pages[keyof typeof Pages];

export type Image = {
  src: string,
  alt: string,
  title: string,
};

export type Requirements = {
  number: number,
  boons: string[],
}

export type BoonRequirements = {
  boon: string,
  requirements: Requirements[],
};

export type BoonInfo = {
  image: Image,
  requirements?: Requirements[],
  active: boolean,
  unlocked: boolean,
  prophecyForetold: boolean,
}

export type GroupBoons = {
  // boonGroup: eg.: Gods.___, Weapons.___, etc.
  [key: string]: {
    // boonTable, eg.: BoonTables.___
    [key: string]: {
      // boonRow, eg.: BoonRows.___
      [key: string]: string[]
    }
  }
};

export type GroupRowOrder = {
  [key: string]: (BoonRow | God)[]
};

export type BoonState = {
  [key: string]: BoonInfo
};

export type AppState = {
  boons: BoonState,
  colors: {[key: string]: string},
  groups: {
    boons: GroupBoons,
    rowOrder: GroupRowOrder,
  },
  pages: {
    current: string,
    list: Page[],
  },
};

export {
  Boons,
};
