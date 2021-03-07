import deepmerge from 'deepmerge';

import { GroupBoons } from 'redux/domain';

import { boonDuos } from './BoonDuos';
import { boonSolos } from './BoonSolos';
import { groupRowOrder } from './GroupRowOrder';
import { pageList } from './PageList';
import { weapons } from './Weapons';

const groupBoons: GroupBoons = deepmerge.all([boonSolos, boonDuos, weapons]) as GroupBoons;

export {
  boonDuos,
  boonSolos,
  groupBoons,
  groupRowOrder,
  pageList,
  weapons,
};
