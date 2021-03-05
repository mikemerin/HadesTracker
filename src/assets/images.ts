import { boonList } from 'data/boons';
import { BoonTypes, Gods, Image, SoloBoons } from 'redux/domain';

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

Object.values(boonList).forEach((boonTypeObj) => {
  Object.entries(boonTypeObj).forEach(([boonType, boonRowObj]) => {
    const path = (boonType === BoonTypes.Chaos ? 'chaos' : 'boons');
    Object.keys(boonRowObj).forEach((boonRow) => {
      const imageList = [...boonRowObj[boonRow], ...(images[boonRow] ? [] : [boonRow])];
      imageList.forEach((boon) => imageLoader(path, boon, 'Icon', boonSize));
    });
  });
});

Object.keys(Gods).forEach((god) => imageLoader('gods', god, 'Symbol', '50px'));

export default images;
export {
  fileNameSanitizer,
}
