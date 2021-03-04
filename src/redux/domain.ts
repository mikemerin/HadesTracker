export enum Boons {
  Attack = 'Attack',
  Special = 'Special',
  Dash = 'Dash',
  Cast = 'Cast',
  Call = 'Call',
  Other = 'Other',
  Legendary = 'Legendary',
}

export enum ChaosBoons {
  Blessing = 'Blessing',
  Curse = 'Curse',
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
  Blade = 'Stygian_Blade',
  Bow = 'Heart-Seeker_Bow',
  Fists = 'Twin_Fists',
  Rail = 'Adamant_Rail',
  Shield = 'Shield_of_Chaos',
  Spear = 'Eternal_Spear',
}

export type Page = {
  text: string,
  url: string,
}

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
}

export type SoloBoons = {
  [Boons.Attack]: string;
  [Boons.Special]: string;
  [Boons.Cast]: string[];
  [Boons.Dash]: string;
  [Boons.Call]: string;
  [Boons.Other]: string[];
  [Boons.Legendary]: string[];
}
