import { groupBoons } from 'data/GroupBoons';
import { BoonTables, Gods, Image, Weapons } from 'redux/domain';

const images: {[key: string]: Image} = {};

const fileNameSanitizer = (filename: string): string => {
  return filename.replace(/ /g, '_');
};

const imageLoader = (
  path: string,
  filename: string,
  suffix: string,
  size: string,
) => {
  const src = `${process.env.PUBLIC_URL}/assets/${path}/${fileNameSanitizer(filename)}.png`;
  let alt, title, height, width;
  alt = title = `${filename} ${suffix}`;
  height = width = size;
  images[filename] = { src, alt, title, height, width };
};

const boonSize = '20px';
const headerSize = '50px';

const paths: {[key: string]: string} = {
  [BoonTables.Chaos]: 'chaos',
  [BoonTables.Weapon]: 'daedalus',
};

Object.values(groupBoons).forEach((boonGroupObj) => {
  Object.entries(boonGroupObj).forEach(([boonGroup, boonRowObj]) => {
    let path = paths[boonGroup] || 'boons';
    Object.keys(boonRowObj).forEach((boonRow) => {
      const imageList = [...boonRowObj[boonRow], ...(images[boonRow] ? [] : [boonRow])];
      imageList.forEach((boon) => imageLoader(path, boon, 'Icon', boonSize));
    });
  });
});

Object.values(Weapons).forEach((weapon) => imageLoader('weapons', weapon, 'Symbol', headerSize));
Object.values(Gods).forEach((god) => imageLoader('gods', god, 'Symbol', headerSize));

export {
  fileNameSanitizer,
  images,
}
