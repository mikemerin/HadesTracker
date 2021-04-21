import deepmerge from 'deepmerge';

import { BoonState, GroupBoons } from 'redux/domain';

import { boonDuos } from './BoonDuos';
import { boonSolos } from './BoonSolos';

import { colors } from './Colors';
import { extras } from './Extras';
import { generateBoonInfo } from './GenerateBoonInfo';
import { groupRowOrder } from './GroupRowOrder';
import { icons } from './Icons';
import { keepsakes } from './Keepsakes';
import { pageList } from './PageList';
import { talents } from './Talents';
import { weapons } from './Weapons';

const groupBoons: GroupBoons = deepmerge.all([
  boonDuos,
  boonSolos,
  extras,
  icons,
  keepsakes,
  talents,
  weapons,
]) as GroupBoons;
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
