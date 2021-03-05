export enum BoonGroup {
  Aspects = 'Aspects',
  Chaos = 'Chaos',
  CustomerLoyalty = 'CustomerLoyalty',
  Duo = 'Duo',
  Other = 'Other',
  Solo = 'Solo',
  Weapon = 'Weapon',
}

export enum BoonRow {
  Attack = 'Attack',
  Aspect = 'Aspect',
  Blessing = 'Blessing',
  Call = 'Call',
  Cast = 'Cast',
  Curse = 'Curse',
  Daedalus = 'Daedalus Upgrades',
  Dash = 'Dash',
  Item = 'Item',
  Other = 'Other',
  Special = 'Special',
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
  // boonKey, eg.: Gods.___, Weapons.___, etc.
  [key: string]: {
    // boonType: eg.: BoonGroup.___
    [key: string]: {
      // boonRow, eg.: BoonRow.___
      [key: string]: string[]
    }
  }
};
