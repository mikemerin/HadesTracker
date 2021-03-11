import { AppState } from './domain';
import {
  boonInfo,
  colors,
  groupBoons,
  groupRowOrder,
  pageList,
} from 'data';

const initialState: AppState = {
  boons: boonInfo,
  colors,
  display: {
    requiresBoons: [], // TODO: make set, and delimit more complex
    unlocksBoons: [], // TODO: make set
  },
  groups: {
    boons: groupBoons,
    rowOrder: groupRowOrder,
  },
  pages: {
    current: pageList.find(({url}) => url === window.location.pathname)?.text || 'Main Boons',
    list: pageList,
  },
};

export default initialState;
export {
  pageList,
};
