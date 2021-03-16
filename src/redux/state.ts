import fileDownload from 'js-file-download';

import { AppState, BoonState } from './domain';
import {
  boonInfo,
  colors,
  groupBoons,
  groupRowOrder,
  pageList,
} from 'data';

const localStorageBoons = 'boons';

const getLocalState = (): string | null => localStorage.getItem(localStorageBoons);
const setLocalState = (
  localState: string,
  localStorageName: string = localStorageBoons
): void => localStorage.setItem(localStorageName, localState);

const exportLocalStorage = () => {
  const localState = getLocalState();
  if (localState) {
    const dateString = (new Date()).toISOString().replace(/[:.]/g, '');
    fileDownload(localState, `HadesTracker-${dateString}.json`);
  }
};

const loadState = (): BoonState | undefined => {
  try {
    const localState = getLocalState();
    return localState ? JSON.parse(localState) : undefined;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: BoonState) => {
  try {
    setLocalState(JSON.stringify(state));
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
  exportLocalStorage,
  getLocalState,
  pageList,
  saveState,
  setLocalState,
};
