import store from 'redux/store';
import {
  AppState,
  BoonTables,
} from 'redux/domain';

export type BoonStyle = {
  padding:  number,
  borderRadius: string,
  backgroundColor: string | undefined,
  backgroundImage: string | undefined,
  backgroundSize: string | undefined,
  backgroundOrigin: string,
  backgroundPosition: string,
  backgroundRepeat: string,
};

type Props = {
  boonKey: string,
  boonRow: string,
  boonType: string,
  individualBoon: string,
};

const { colors } = store.getState() as AppState;
const fade = 60;

const BoonStyles = ({
  boonKey,
  boonRow,
  boonType,
  individualBoon,
}: Props): BoonStyle => {
  const { boons } = store.getState() as AppState;
  const isDuo = (boonType === BoonTables.Duo);
  const color = colors[boonKey];
  const color2 = colors[isDuo ? boonRow : 'background'];

  const { active, restricted, unlocked } = boons[individualBoon];

  let backgroundColor;
  let backgroundImage;
  let backgroundSize;

  if (!unlocked) {
    backgroundColor = `#000000${fade}`;
  } else if (restricted) {
    backgroundImage = `repeating-linear-gradient( to top left, #00000060 15%, #00000030 30%, #00000060 45% )`;
  } else {
    if (active) {
      backgroundImage = `linear-gradient(35deg, ${color}, ${color2})`;
    } else {
      backgroundImage = `
        linear-gradient(to right, ${color}, ${color2}),
        linear-gradient(to top, ${color}, ${color2})
      `
      backgroundSize = '100% 2px, 2px 100%';
    }
  }

  return {
    padding: 0,
    borderRadius: '3px',
    backgroundColor,
    backgroundImage,
    backgroundSize,
    backgroundOrigin: 'content-box',
    backgroundPosition: 'bottom left',
    backgroundRepeat: 'no-repeat',
  };
};

export {
  BoonStyles,
};
