import deepmerge from 'deepmerge';

import { GroupBoons } from 'redux/domain';

import { boonDuos } from './BoonDuos';
import { boonSolos } from './BoonSolos';
import { generateBoons } from './Boons';
import { colors } from './Colors';
import { groupRowOrder } from './GroupRowOrder';
import { pageList } from './PageList';
import { weapons } from './Weapons';

const groupBoons: GroupBoons = deepmerge.all([boonSolos, boonDuos, weapons]) as GroupBoons;
const boons = generateBoons(groupBoons);

export {
  boonDuos,
  boonSolos,
  boons,
  colors,
  groupBoons,
  groupRowOrder,
  pageList,
  weapons,
};
