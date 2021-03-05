export enum BoonTypes {
  Augments = 'Augments',
  Chaos = 'Chaos',
  CustomerLoyalty = 'CustomerLoyalty',
  Duo = 'Duo',
  Other = 'Other',
  Solo = 'Solo',
}

export enum ChaosBoons {
  Blessing = 'Blessing',
  Curse = 'Curse',
}

export enum OtherBoons {
  Other = 'Other',
  Legendary = 'Legendary',
}

export enum SoloBoons {
  Attack = 'Attack',
  Special = 'Special',
  Dash = 'Dash',
  Cast = 'Cast',
  Call = 'Call',
  Other = 'Other',
  Legendary = 'Legendary',
}

export enum Gods {
  Aphrodite = 'Aphrodite',
  Ares = 'Ares',
  Artemis = 'Artemis',
  Athena = 'Athena',
  Chaos = 'Chaos',
  Demeter = 'Demeter',
  Dionysus = 'Dionysus',
  Hermes = 'Hermes',
  Poseidon = 'Poseidon',
  Zeus = 'Zeus',
}

export enum Weapons {
  Blade = 'Stygian Blade',
  Bow = 'Heart-Seeker Bow',
  Fists = 'Twin Fists',
  Rail = 'Adamant Rail',
  Shield = 'Shield of Chaos',
  Spear = 'Eternal Spear',
}

export type Page = {
  text: string,
  url: string,
};

export type AppState = {
  currentPage: string,
  pageList: Page[],
};

export type Image = {
  src: string,
  alt: string,
  title: string,
  height: string,
  width: string,
};

export type BoonList = {
  // boonKey, eg: Gods.___, Weapons.___, etc.
  [key: string]: {
    // boonType: BoonTypes
    [key: string]: {
      // boonRow, eg.: SoloBoons.___
      [key: string]: string[]
    }
  }
};
