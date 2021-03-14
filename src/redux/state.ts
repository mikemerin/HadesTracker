import { AppState, BoonState } from './domain';
import {
  boonInfo,
  colors,
  groupBoons,
  groupRowOrder,
  pageList,
} from 'data';

const localStorageName = 'boons';

const loadState = (): BoonState | undefined => {
  try {
    const localState = localStorage.getItem(localStorageName);
    return localState ? JSON.parse(localState) : undefined;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: BoonState) => {
  try {
    const localState = JSON.stringify(state);
    localStorage.setItem(localStorageName, localState);
  } catch (err) {}
}

const initialState: AppState = {
  boons: loadState() || boonInfo,
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
  saveState,
};
