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
  Aspect: 'Aspect',
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

export const Pages = {
  Main: {text: 'Main', url: '/Boons/Main'},
  Duo: {text: 'Duo', url: '/Boons/Duo'},
  Other: {text: 'Other', url: '/Boons/Other'},
  Chaos: {text: 'Chaos', url: '/Boons/Chaos'},
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
