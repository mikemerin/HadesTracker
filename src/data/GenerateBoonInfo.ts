import {
  Boon,
  BoonRequirements,
  BoonState,
  BoonTables,
  Gods,
  GroupBoons,
  Image,
  Requirements,
  Weapons
} from 'redux/domain';
import { nameSanitizer } from 'utils';

type Props = {
  groupBoons: GroupBoons,
  boonRequirements: BoonRequirements[]
};

const generateBoonInfo = ({groupBoons, boonRequirements}: Props) => {
  const boons: BoonState = {};

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
    boons[boon] = {
      image,
      active: false,
      unlocked: true,
      prophecyForetold: false,
    };
  };

  Object.values(groupBoons).forEach((boonGroupObj) => {
    Object.entries(boonGroupObj).forEach(([boonGroup, boonRowObj]) => {
      let path = paths[boonGroup] || 'boons';
      Object.keys(boonRowObj).forEach((boonRow) => {
        const rowBoons = [...boonRowObj[boonRow], ...(boons[boonRow] ? [] : [boonRow])];
        rowBoons.forEach((boon) => boonLoader(path, boon, 'Icon'));
      });
    });
  });

  boonRequirements.forEach(({boon, requirements}) => {
    boons[boon] = {
      ...boons[boon],
      requirements,
      unlocked: false,
    }

    requirements.forEach((requirements: Requirements) => {
      requirements.boons.forEach((requiredBoon: Boon) => {
        boons[requiredBoon] = {
          ...boons[requiredBoon],
          unlocks: [
            ...(boons[requiredBoon].unlocks || []),
            boon,
          ],
        };
      });
    });
  });

  Object.values(Weapons).forEach((weapon) => boonLoader('weapons', weapon, 'Symbol'));
  Object.values(Gods).forEach((god) => boonLoader('gods', god, 'Symbol'));

  return boons;
};



export {
  generateBoonInfo,
};
