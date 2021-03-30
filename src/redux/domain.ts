import { Boons, ChaosBoons } from './domain/boons';

export type Boon = typeof Boons[keyof typeof Boons];
export type ChaosBoon = typeof ChaosBoons[keyof typeof ChaosBoons];

export const BoonTables = {
  Aspects: 'Aspects',
  Chaos: 'Chaos',
  CustomerLoyalty: 'CustomerLoyalty',
  Duo: 'Duo',
  Extras: 'Extras',
  Items: 'Items',
  Other: 'Other',
  Solo: 'Solo',
  Weapon: 'Weapon',
} as const;

export type BoonTable = typeof BoonTables[keyof typeof BoonTables];

export const BoonRows = {
  Attack: 'Attack',
  Aspect: 'Titan Blood',
  Blessing: 'Blessing',
  Call: 'Call',
  Cast: 'Cast',
  Curse: 'Curse',
  Daedalus: 'Daedalus Hammer',
  Dash: 'Dash',
  Extras: 'Extras',
  Item: 'Item',
  Keepsakes: 'Keepsakes',
  Legendary: 'Legendary',
  Other: 'Other',
  Special: 'Special',
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
  Adamant_Rail: 'Adamant Rail',
  Eternal_Spear: 'Eternal Spear',
  Heart_Seeker_Bow: 'Heart Seeker Bow',
  Shield_of_Chaos: 'Shield of Chaos',
  Stygian_Blade: 'Stygian Blade',
  Twin_Fists: 'Twin Fists',
} as const;

export type Weapon = typeof Weapons[keyof typeof Weapons];

export const Aspects = {
  Aspect_of_Arthur: 'Aspect of Arthur',
  Aspect_of_Nemesis: 'Aspect of Nemesis',
  Aspect_of_Poseidon: 'Aspect of Poseidon',
  Aspect_of_Zagreus_Blade: 'Aspect of Zagreus (Blade)',
  Aspect_of_Chiron: 'Aspect of Chiron',
  Aspect_of_Hera: 'Aspect of Hera',
  Aspect_of_Rama: 'Aspect of Rama',
  Aspect_of_Zagreus_Bow: 'Aspect of Zagreus (Bow)',
  Aspect_of_Demeter: 'Aspect of Demeter',
  Aspect_of_Gilgamesh: 'Aspect of Gilgamesh',
  Aspect_of_Talos: 'Aspect of Talos',
  Aspect_of_Zagreus_Fists: 'Aspect of Zagreus (Fists)',
  Aspect_of_Eris: 'Aspect of Eris',
  Aspect_of_Hestia: 'Aspect of Hestia',
  Aspect_of_Lucifer: 'Aspect of Lucifer',
  Aspect_of_Zagreus_Rail: 'Aspect of Zagreus (Rail)',
  Aspect_of_Beowulf: 'Aspect of Beowulf',
  Aspect_of_Chaos: 'Aspect of Chaos',
  Aspect_of_Zagreus_Shield: 'Aspect of Zagreus (Shield)',
  Aspect_of_Zeus: 'Aspect of Zeus',
  Aspect_of_Achilles: 'Aspect of Achilles',
  Aspect_of_Guan_Yu: 'Aspect of Guan Yu',
  Aspect_of_Hades: 'Aspect of Hades',
  Aspect_of_Zagreus_Spear: 'Aspect of Zagreus (Spear)',
} as const;

export type Aspect = typeof Aspects[keyof typeof Aspects];

export const Items = {
  Active: 'Active',
  Ambrosia: 'Ambrosia',
  Ammo: 'Ammo',
  Anvil_of_Fates: 'Anvil of Fates',
  Attack: 'Attack',
  Blessing: 'Blessing',
  Call: 'Call',
  Cast: 'Cast',
  Centaur_Heart: 'Centaur Heart',
  Charons_Obol: 'Charon\'s Obol',
  Chthonic_Key: 'Chthonic Key',
  Codex_Locked: 'Codex Locked',
  Contractor_Item: 'Contractor Item',
  Curse: 'Curse',
  Daedalus_Hammer: 'Daedalus Hammer',
  Darkness: 'Darkness',
  Dash: 'Dash',
  Diamond: 'Diamond',
  Extreme_Measures: 'Extreme Measures',
  Fated_List: 'Fated List',
  Gemstone: 'Gemstone',
  Heat: 'Heat',
  Inactive: 'Inactive',
  Infernal_Gate: 'Infernal Gate',
  Infernal_Soul: 'Infernal Soul',
  Item: 'Item',
  Keepsakes: 'Keepsakes',
  Lambent_Plume: 'Lambent Plume', // TODO: make keepsakes
  Legendary: 'Legendary',
  Loyalty_Card: 'Loyalty Card',
  Nectar: 'Nectar',
  Other: 'Other',
  Pom_of_Power: 'Pom of Power',
  Prophecy_Foretold: 'Prophecy Foretold',
  Prophecy_Not_Foretold: 'Prophecy Not Foretold',
  Restricted: 'Restricted',
  Rod_of_Fishing: 'Rod of Fishing',
  Skeleton_Key: 'Skeleton Key',
  Special: 'Special',
  Status_Curse: 'Status Curse',
  Stygian_Soul: 'Stygian Soul',
  Titan_Blood: 'Titan Blood',
  Trove_Tracker: 'Trove Tracker',
} as const;

export type Item = typeof Items[keyof typeof Items];

// export const Talents = { // TODO
//   ResetRun: 'Reset Run',
// } as const;
//
// export type Talent = typeof Talents[keyof typeof Talents];

export const Pages = {
  Main: {text: 'Main Gods', url: '/Boons/Main'},
  Other: {text: 'Other Gods', url: '/Boons/Other'},
  Weapons: {text: 'Infernal Arms', url: '/Boons/Weapons'},
} as const;

export type Page = typeof Pages[keyof typeof Pages];

export const DataActions = {
  Export: 'Export Data',
  Import: 'Import Data',
  ResetAll: 'Reset ALL Data',
  ResetRun: 'Reset Run',
} as const;

export type DataAction = typeof DataActions[keyof typeof DataActions];

export type Image = {
  src: string,
  alt: string,
  title?: string,
};

export type Requirements = {
  number: number,
  boons: Boon[],
}

export type BoonRequirements = {
  boon: Boon,
  requirements: Requirements[],
};

export type BoonInfo = {
  active: boolean,
  image: Image,
  owners: string[],
  prophecyForetold: boolean,
  requirements?: Requirements[],
  restricted: boolean,
  restrictions?: Boon[],
  unlocked: boolean,
  unlocks?: Boon[],
}

export const BoonResetTypes = {
  Active: 'active',
  All: 'all',
  Boons: 'boons',
} as const;

export type BoonResetType = typeof BoonResetTypes[keyof typeof BoonResetTypes];

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

export type Display = {
  requiresBoons: Requirements[],
  restrictsBoons: Boon[], // TODO: make Set<Boon>
  unlocksBoons: string[], // TODO: make Set<Boon>
}

export type AppState = {
  boons: BoonState,
  colors: {[key: string]: string},
  display: Display,
  groups: {
    boons: GroupBoons,
    rowOrder: GroupRowOrder,
  },
  pages: {
    current: string,
    list: Page[],
  },
  version: number,
};

export {
  Boons,
  ChaosBoons,
};
