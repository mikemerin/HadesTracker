import deepmerge from 'deepmerge';

import {
  BoonList,
  BoonGroup,
  BoonRow,
  Gods,
 } from 'redux/domain';
import { generateBoonSolos } from './BoonSolos';
import { generateBoonDuos } from './BoonDuos';
import { generateWeapons } from './Weapons';

const boonSolos: BoonList = generateBoonSolos();
const boonDuos: BoonList = generateBoonDuos();
const weapons: BoonList = generateWeapons();

const boonList: BoonList = deepmerge.all([boonSolos, boonDuos, weapons]) as BoonList;

const boonGroupRows: {[key: string]: string[]} = {
  [BoonGroup.Aspects]: [
    BoonRow.Aspect,
  ],
  [BoonGroup.Chaos]: [
    BoonRow.Blessing,
    BoonRow.Curse,
  ],
  [BoonGroup.CustomerLoyalty]: [
    BoonRow.Item,
  ],
  [BoonGroup.Duo]: [
    Gods.Aphrodite,
    Gods.Ares,
    Gods.Artemis,
    Gods.Athena,
    Gods.Demeter,
    Gods.Dionysus,
    Gods.Poseidon,
  ],
  [BoonGroup.Other]: [
    BoonRow.Other,
    BoonRow.Legendary,
  ],
  [BoonGroup.Solo]: [
    BoonRow.Attack,
    BoonRow.Special,
    BoonRow.Cast,
    BoonRow.Dash,
    BoonRow.Call,
    BoonRow.Other,
    BoonRow.Legendary,
  ],
  [BoonGroup.Weapon]: [
    BoonRow.Daedalus,
  ],
};

export {
  boonList,
  boonGroupRows,
}
