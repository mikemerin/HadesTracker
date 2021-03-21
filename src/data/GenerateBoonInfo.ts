import {
  Boon,
  BoonRow,
  BoonState,
  BoonTables,
  Gods,
  GroupBoons,
  Image,
  Requirements,
  Weapons
} from 'redux/domain';
import { boonRequirements } from './BoonRequirements';
import { boonRestrictionGroups } from './BoonRestrictionGroups';
import { nameSanitizer } from 'utils';

const generateBoonInfo = (groupBoons: GroupBoons) => {
  const boonState: BoonState = {};
  const restrictedBoonList: {[key: string]: Boon[]} = {};
  boonRestrictionGroups.forEach((boonRestrictionGroup) => restrictedBoonList[boonRestrictionGroup] = []);

  const paths: {[key: string]: string} = {
    [BoonTables.Aspects]: 'aspects',
    [BoonTables.Chaos]: 'chaos',
    [BoonTables.Items]: 'items',
    [BoonTables.Weapon]: 'daedalus',
  };

  const boonLoader = (
    path: string,
    boon: string,
    suffix: string,
  ): void => {
    const src = `${process.env.PUBLIC_URL}/assets/${path}/${nameSanitizer(boon)}.png`;
    const alt = `${boon} ${suffix}`;
    const image: Image = { src, alt };
    boonState[boon] = {
      image,
      active: false,
      unlocked: true,
      restricted: false,
      prophecyForetold: false,
    };
  };

  Object.values(groupBoons).forEach((boonGroupObj) => {
    Object.entries(boonGroupObj).forEach(([boonGroup, boonRowObj]) => {
      let path = paths[boonGroup] || 'boons';
      Object.keys(boonRowObj).forEach((boonRow) => {
        const rowBoons: Boon[] = [...boonRowObj[boonRow], ...(boonState[boonRow] ? [] : [boonRow])] as Boon[];
        rowBoons.forEach((boon) => {
          boonLoader(path, boon, 'Icon');
          if (boonRestrictionGroups.has(boonRow as BoonRow) && boon !== boonRow) {
            restrictedBoonList[boonRow].push(boon);
          }
        });
      });
    });
  });

  boonRequirements.forEach(({boon, requirements}) => {
    boonState[boon] = {
      ...boonState[boon],
      requirements,
      unlocked: false,
    }

  requirements.forEach((requirements: Requirements) => {
      requirements.boons.forEach((requiredBoon: Boon) => {
        boonState[requiredBoon] = {
          ...boonState[requiredBoon],
          unlocks: [
            ...(boonState[requiredBoon].unlocks || []),
            boon,
          ],
        };
      });
    });
  });

  Object.values(Weapons).forEach((weapon) => boonLoader('weapons', weapon, 'Symbol'));
  Object.values(Gods).forEach((god) => boonLoader('gods', god, 'Symbol'));

  Object.values(restrictedBoonList).forEach((boons) => {
    boons.forEach((boon, index) => {
      boonState[boon].restrictions = [...boons.slice(0, index), ...boons.slice(index + 1)];
    });
  });

  return boonState;
};



export {
  generateBoonInfo,
};
