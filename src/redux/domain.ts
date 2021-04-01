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
