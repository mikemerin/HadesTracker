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
  const color = colors[boonKey];
  const color2 = colors[boonType === BoonTables.Duo ? boonRow : 'background'];

  const { active, unlocked } = boons[individualBoon];

  let backgroundColor = '';
  let backgroundImage = `
    linear-gradient(to right, ${color}, ${colors.background}),
    linear-gradient(to bottom, ${color}, ${color2})
  `;

  if (active) {
      backgroundColor = color + fade;
    } else if (!unlocked) {
    backgroundColor = `#000000${fade}`;
    backgroundImage = '';
  }

  return {
    padding: 0,
    borderRadius: '3px',
    backgroundColor,
    backgroundImage,
    backgroundSize: '100% 2px, 2px 100%, 100% 4px, 1px 400%',
    backgroundOrigin: 'content-box',
    backgroundRepeat: 'no-repeat',
  };
};

export {
  BoonStyles,
};
