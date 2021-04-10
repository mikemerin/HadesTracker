import deepmerge from 'deepmerge';

import { BoonState, GroupBoons } from 'redux/domain';

import { boonDuos } from './BoonDuos';
import { boonSolos } from './BoonSolos';

import { colors } from './Colors';
import { generateBoonInfo } from './GenerateBoonInfo';
import { groupRowOrder } from './GroupRowOrder';
import { extras, items } from './Items';
import { pageList } from './PageList';
import { weapons } from './Weapons';

const groupBoons: GroupBoons = deepmerge.all([boonSolos, boonDuos, extras, weapons, items]) as GroupBoons;
const { boonRestrictionGroups, boonState } = generateBoonInfo(groupBoons);
const boonInfo = Object.keys(boonState).sort().reduce((acc, boon) => {
  acc[boon] = boonState[boon];
  return acc;
}, {} as BoonState);

export {
  boonDuos,
  boonRestrictionGroups,
  boonSolos,
  boonInfo,
  colors,
  groupBoons,
  groupRowOrder,
  pageList,
  weapons,
};
