import deepmerge from 'deepmerge';

import { GroupBoons } from 'redux/domain';
import { generateBoonSolos } from './BoonSolos';
import { generateBoonDuos } from './BoonDuos';
import { generateWeapons } from './Weapons';

const boonSolos: GroupBoons = generateBoonSolos();
const boonDuos: GroupBoons = generateBoonDuos();
const weapons: GroupBoons = generateWeapons();

const groupBoons: GroupBoons = deepmerge.all([boonSolos, boonDuos, weapons]) as GroupBoons;

export {
  groupBoons,
};
