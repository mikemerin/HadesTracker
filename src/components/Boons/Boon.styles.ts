import store from 'redux/store';
import {
  AppState,
  BoonTables,
} from 'redux/domain';

type Props = {
  boonKey: string,
  boonRow: string,
  boonType: string,
  individualBoon: string,
};

const { colors } = store.getState() as AppState;
const fade = '30';

const BoonStyles = ({
  boonKey,
  boonRow,
  boonType,
  individualBoon,
}: Props): any => {
  const { boons } = store.getState() as AppState;
  const isDuo = (boonType === BoonTables.Duo);
  const color = colors[boonKey];
  const color2 = colors[isDuo ? boonRow : 'background'];

  const { active, unlocked } = boons[individualBoon];

  let backgroundColor;
  let backgroundImage;
  let backgroundSize;

  if (!unlocked) {
    backgroundColor = `#000000${fade}`;
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
