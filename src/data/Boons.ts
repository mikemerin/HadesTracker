import {
  Boon,
  BoonTables,
  Gods,
  GroupBoons,
  Image,
  Weapons
} from 'redux/domain';

const generateBoons = (groupBoons: GroupBoons) => {
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
      unlocked: false,
      prophecyForetold: false,
    };
  };

  Object.values(groupBoons).forEach((boonGroupObj) => {
    Object.entries(boonGroupObj).forEach(([boonGroup, boonRowObj]) => {
      let path = paths[boonGroup] || 'boons';
      Object.keys(boonRowObj).forEach((boonRow) => {
        const imageList = [...boonRowObj[boonRow], ...(boons[boonRow] ? [] : [boonRow])];
        imageList.forEach((boon) => boonLoader(path, boon, 'Icon', boonSize));
      });
    });
  });

  Object.values(Weapons).forEach((weapon) => boonLoader('weapons', weapon, 'Symbol', headerSize));
  Object.values(Gods).forEach((god) => boonLoader('gods', god, 'Symbol', headerSize));

  return boons;
};



export {
  generateBoons,
};
