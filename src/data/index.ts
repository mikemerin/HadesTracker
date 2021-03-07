import deepmerge from 'deepmerge';

import { GroupBoons } from 'redux/domain';

import { boonDuos } from './BoonDuos';
import { boonSolos } from './BoonSolos';
import { boonRequirements } from './BoonRequirements';
import { generateBoonInfo } from './GenerateBoonInfo';
import { colors } from './Colors';
import { groupRowOrder } from './GroupRowOrder';
import { pageList } from './PageList';
import { weapons } from './Weapons';

const groupBoons: GroupBoons = deepmerge.all([boonSolos, boonDuos, weapons]) as GroupBoons;
const boonInfo = generateBoonInfo({groupBoons, boonRequirements});

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
