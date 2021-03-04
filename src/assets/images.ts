import { soloBoons } from 'data/boons';
import { SoloBoons, Gods, Image } from 'redux/domain';

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

Object.keys(SoloBoons).forEach((boon) => {
  imageLoader('boons', boon, 'Icon', '30px');

  Object.keys(Gods).forEach((god) => {
    if (god === Gods.Chaos) {
      // TODO add boons and banes here
    } else if (god === Gods.Hermes) {
      // TODO add otherBoons here
    } else {
      const boonName = soloBoons[god][boon];
      boonName && boonName.forEach((individualBoon) => imageLoader('boons', individualBoon, 'Icon', boonSize));
    }
  });
});

Object.keys(Gods).forEach((god) => imageLoader('gods', god, 'Symbol', '50px'));

export default images;
export {
  fileNameSanitizer,
}
