import fileDownload from 'js-file-download';


import { AppState, BoonState } from './domain';
import {
  boonInfo,
  colors,
  groupBoons,
  groupRowOrder,
  pageList,
} from 'data';

const localStorageName = 'boons';

const getLocalState = (): string | null => localStorage.getItem(localStorageName);
const setLocalState = (localState: string): void => localStorage.setItem(localStorageName, localState);

const copyLocalStorage = () => {
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
  copyLocalStorage,
  pageList,
  saveState,
};
