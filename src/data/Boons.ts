import {
  Boon,
  BoonTables,
  BoonRequirements,
  Gods,
  GroupBoons,
  Image,
  Weapons
} from 'redux/domain';

type Props = {
  groupBoons: GroupBoons,
  boonRequirements: BoonRequirements[]
};

const generateBoons = ({groupBoons, boonRequirements}: Props) => {
  const boons: {[key: string]: Boon} = {};

  const fileNameSanitizer = (filename: string): string => {
    return filename.replace(/ /g, '_');
  };

  const boonSize = '20px';
  const headerSize = '50px';

  const paths: {[key: string]: string} = {
    [BoonTables.Chaos]: 'chaos',
    [BoonTables.Weapon]: 'daedalus',
  };

  const boonLoader = (
    path: string,
    boon: string,
    suffix: string,
    size: string,
  ): void => {
    const src = `${process.env.PUBLIC_URL}/assets/${path}/${fileNameSanitizer(boon)}.png`;
    let alt, title, height, width;
    alt = title = `${boon} ${suffix}`;
    height = width = size;
    const image: Image = { src, alt, title, height, width };
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
        rowBoons.forEach((boon) => boonLoader(path, boon, 'Icon', boonSize));
      });
    });
  });

  boonRequirements.forEach(({boon, requirements}) => {
    boons[boon] = {
      ...boons[boon],
      requirements,
      unlocked: false,
    }
  });

  Object.values(Weapons).forEach((weapon) => boonLoader('weapons', weapon, 'Symbol', headerSize));
  Object.values(Gods).forEach((god) => boonLoader('gods', god, 'Symbol', headerSize));

  return boons;
};



export {
  generateBoons,
};
