import { soloBoons } from 'data/boons';
import { Boons, Gods, Image } from 'redux/domain';

const fileNameSanitizer = (filename: string): string => {
  return filename.replace(/ /g, '_');
};

const images: {[key: string]: Image} = {};

['Other_Empty', ...Object.keys(Boons)].forEach((boon) => {
  const src = `${process.env.PUBLIC_URL}/assets/boons/${boon}.png`;
  let alt, title, height, width;
  alt = title = `${boon} Icon`;
  height = width = '30px';
  images[boon] = { src, alt, title, height, width };

  Object.keys(Gods).forEach((god) => {
    if (god === Gods.Chaos) {
      // TODO add boons and banes here
    } else if (god === Gods.Hermes) {
      // TODO add otherBoons here
    } else {
      const boonName = soloBoons[god][boon];
      if (boonName) {
        if (Array.isArray(boonName)) {
          boonName.forEach((individualBoon) => {
            const src = `${process.env.PUBLIC_URL}/assets/boons/${fileNameSanitizer(individualBoon)}.png`;
            let alt, title, height, width;
            alt = title = `${individualBoon} Icon`;
            height = width = '30px';
            images[individualBoon] = { src, alt, title, height, width };
          });
        } else {
          const src = `${process.env.PUBLIC_URL}/assets/boons/${fileNameSanitizer(boonName)}.png`;
          let alt, title, height, width;
          alt = title = `${boonName} Icon`;
          height = width = '30px';
          images[boonName] = { src, alt, title, height, width };
        }
      }
    }
  });
});

// TODO: src, alt/title suffix, height/width # size

Object.keys(Gods).forEach((god) => {
  const src = `${process.env.PUBLIC_URL}/assets/gods/${god}_reward.png`;
  let alt, title, height, width;
  alt = title = `${god} Symbol`;
  height = width = '50px';
  images[god] = { src, alt, title, height, width };
});

export default images;
export {
  fileNameSanitizer,
}
