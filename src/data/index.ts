import deepmerge from 'deepmerge';

import { BoonState, GroupBoons } from 'redux/domain';

import { boonDuos } from './BoonDuos';
import { boonSolos } from './BoonSolos';

import { colors } from './Colors';
import { generateBoonInfo } from './GenerateBoonInfo';
import { groupRowOrder } from './GroupRowOrder';
import { items } from './Items';
import { pageList } from './PageList';
import { weapons } from './Weapons';

const groupBoons: GroupBoons = deepmerge.all([boonSolos, boonDuos, items, weapons]) as GroupBoons;
const boonInfoUnsorted = generateBoonInfo(groupBoons);
const boonInfo = Object.keys(boonInfoUnsorted).sort().reduce((acc, boon) => {
  acc[boon] = boonInfoUnsorted[boon];
  return acc;
}, {} as BoonState);

export {
  boonDuos,
  boonSolos,
  boonInfo,
  colors,
  groupBoons,
  groupRowOrder,
  pageList,
  weapons,
};
