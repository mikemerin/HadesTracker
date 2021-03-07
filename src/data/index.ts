import deepmerge from 'deepmerge';

import { BoonState, GroupBoons } from 'redux/domain';

import { boonDuos } from './BoonDuos';
import { boonSolos } from './BoonSolos';
import { boonRequirements } from './BoonRequirements';
import { generateBoonInfo } from './GenerateBoonInfo';
import { colors } from './Colors';
import { groupRowOrder } from './GroupRowOrder';
import { pageList } from './PageList';
import { weapons } from './Weapons';

const groupBoons: GroupBoons = deepmerge.all([boonSolos, boonDuos, weapons]) as GroupBoons;
const boonInfoUnsorted = generateBoonInfo({groupBoons, boonRequirements});
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
