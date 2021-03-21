import fileDownload from 'js-file-download';

import { AppState, BoonState } from './domain';
import {
  boonInfo,
  colors,
  groupBoons,
  groupRowOrder,
  pageList,
} from 'data';

type LocalState = {
  boons: string | null,
  version: string | null,
};

const stateVersion = 1;
const localStorageBoons = 'boons';
const localStorageVersion = 'version';

const getLocalState = (): LocalState => ({
  boons: localStorage.getItem(localStorageBoons),
  version: localStorage.getItem(localStorageVersion),
});

const setLocalState = (
  localState: string,
  localStorageName: string = localStorageBoons
): void => {
  localStorage.setItem(localStorageName, localState);
  localStorage.setItem(localStorageVersion, stateVersion.toString());
};

const exportLocalStorage = () => {
  const { boons, version } = getLocalState();
  if (boons) {
    const dateString = (new Date()).toISOString().replace(/[:.]/g, '');
    fileDownload(boons, `HadesTracker-V${version}-${dateString}.json`);
  }
};

const loadState = (): BoonState | undefined => {
  try {
    const { boons, version } = getLocalState();
    if (!boons) {
      return undefined;
    }

    const parsedBoons = JSON.parse(boons);
    const parsedVersion = parseInt(version || '0');

    if (parsedVersion !== stateVersion) {
      if (parsedVersion < 1) {
        const defaultBoons = defaultState().boons;
        Object.keys(defaultBoons).forEach((boon) => {
          if (!parsedBoons[boon]) {
            parsedBoons[boon] = defaultBoons[boon];
          }

          parsedBoons[boon].restricted = false;
          const { restrictions } = defaultBoons[boon];
          if (restrictions) {
              parsedBoons[boon].restrictions = restrictions;
          }
        });
      }
    }

    return parsedBoons;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: BoonState) => {
  try {
    setLocalState(JSON.stringify(state));
  } catch (err) {}
}

const defaultState = (): AppState => ({
  boons: boonInfo,
  colors,
  display: {
    requiresBoons: [], // TODO: make set, and delimit more complex
    restrictsBoons: [], // TODO: make set, and delimit more complex
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
  version: stateVersion
});

const initialState: AppState = {
  ...defaultState(),
  ...(loadState() && {boons: loadState()}),
};

export default initialState;
export {
  defaultState,
  exportLocalStorage,
  getLocalState,
  pageList,
  saveState,
  setLocalState,
};
