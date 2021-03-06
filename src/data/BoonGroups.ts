import deepmerge from 'deepmerge';

import {
  BoonGroups,
  BoonRow,
  BoonTable,
  Gods,
 } from 'redux/domain';
import { generateBoonSolos } from './BoonSolos';
import { generateBoonDuos } from './BoonDuos';
import { generateWeapons } from './Weapons';

const boonSolos: BoonGroups = generateBoonSolos();
const boonDuos: BoonGroups = generateBoonDuos();
const weapons: BoonGroups = generateWeapons();

const boonGroups: BoonGroups = deepmerge.all([boonSolos, boonDuos, weapons]) as BoonGroups;

const boonGroupRows: {[key: string]: string[]} = {
  [BoonTable.Aspects]: [
    BoonRow.Aspect,
  ],
  [BoonTable.Chaos]: [
    BoonRow.Blessing,
    BoonRow.Curse,
  ],
  [BoonTable.CustomerLoyalty]: [
    BoonRow.Item,
  ],
  [BoonTable.Duo]: [
    Gods.Aphrodite,
    Gods.Ares,
    Gods.Artemis,
    Gods.Athena,
    Gods.Demeter,
    Gods.Dionysus,
    Gods.Poseidon,
  ],
  [BoonTable.Other]: [
    BoonRow.Other,
    BoonRow.Legendary,
  ],
  [BoonTable.Solo]: [
    BoonRow.Attack,
    BoonRow.Special,
    BoonRow.Cast,
    BoonRow.Dash,
    BoonRow.Call,
    BoonRow.Other,
    BoonRow.Legendary,
  ],
  [BoonTable.Weapon]: [
    BoonRow.Daedalus,
  ],
};

export {
  boonGroups,
  boonGroupRows,
}
