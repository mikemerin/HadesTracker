import { BoonResetTypes, DataActions } from './domain/actions';
import { Boons } from './domain/boons';
import { ChaosBoons } from './domain/chaosBoons';
import { BoonRows, BoonTables, Pages } from './domain/displays';
import { Gods } from './domain/gods';
import { Items } from './domain/items';
import { Aspects, Upgrades, Weapons } from './domain/weapons';

export type Aspect = typeof Aspects[keyof typeof Aspects];
export type Boon = typeof Boons[keyof typeof Boons];
export type BoonResetType = typeof BoonResetTypes[keyof typeof BoonResetTypes];
export type BoonRow = typeof BoonRows[keyof typeof BoonRows];
export type BoonTable = typeof BoonTables[keyof typeof BoonTables];
export type ChaosBoon = typeof ChaosBoons[keyof typeof ChaosBoons];
export type DataAction = typeof DataActions[keyof typeof DataActions];
export type God = typeof Gods[keyof typeof Gods];
export type Item = typeof Items[keyof typeof Items];
export type Page = typeof Pages[keyof typeof Pages];
export type Upgrade = typeof Upgrades[keyof typeof Upgrades];
export type Weapon = typeof Weapons[keyof typeof Weapons];

export type Image = {
  src: string,
  alt: string,
  title?: string,
};

export type AnyBoon = Aspect | Boon | ChaosBoon | Item;

export type BoonRestrictions = {
  boon: AnyBoon,
  restricts: AnyBoon[],
}

export type GroupRestrictions = {
  // [key: string]: Set<AnyBoon>
  [key: string]: AnyBoon[], // TODO: make set (doesn't store correctly in Redux store atm)
}

export type Requirements = {
  number: number,
  boons: AnyBoon[],
};

export type BoonRequirements = {
  boon: AnyBoon,
  requirements: Requirements[],
};

export type BoonInfo = {
  active: boolean,
  boonRow?: BoonRow,
  image: Image,
  owners: string[],

  prophecyForetold: boolean,

  restricted: boolean,
  unlocked: boolean,
  swappable?: boolean,

  requirements?: Requirements[],
  restrictedBy?: AnyBoon[],
  restricts?: AnyBoon[],
  swapsWith?: AnyBoon[],
  unlocks?: AnyBoon[],
};

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
  restrictedByBoons: AnyBoon[], // TODO: make Set<AnyBoon>
  restrictsBoons: AnyBoon[], // TODO: make Set<AnyBoon>
  swapsWithBoons: AnyBoon[], // TODO: make Set<AnyBoon>
  unlocksBoons: string[], // TODO: make Set<AnyBoon>
}

export type AppState = {
  boons: BoonState,
  colors: {[key: string]: string},
  display: Display,
  groups: {
    boons: GroupBoons,
    restrictions: GroupRestrictions
    rowOrder: GroupRowOrder,
  },
  pages: {
    current: string,
    list: Page[],
  },
  version: number,
};

export {
  Aspects,
  Boons,
  BoonResetTypes,
  BoonRows,
  BoonTables,
  ChaosBoons,
  DataActions,
  Gods,
  Items,
  Pages,
  Upgrades,
  Weapons,
};
