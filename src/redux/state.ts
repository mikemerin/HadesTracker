import fileDownload from 'js-file-download';

import { AnyBoon, AppState, BoonState } from './domain';
import {
  boonInfo,
  boonRestrictionGroups,
  colors,
  groupBoons,
  groupRowOrder,
  pageList,
} from 'data';
import { getBoonStatuses } from 'utils';

type LocalState = {
  boons: string | null,
  version: string | null,
};

const stateVersion: number = 2;
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

    if (parsedVersion === 1 && stateVersion === 2) {
      return retainLoggedBoons();
    } else if (parsedVersion !== stateVersion || parsedVersion < 1) {
      return undefined;
    }

    return parsedBoons;
  } catch (err) {
    return undefined;
  }
};

const retainLoggedBoons = (): BoonState => {
  let defaultBoons = defaultState().boons;
  const localBoons = JSON.parse(localStorage.getItem(localStorageBoons) || '{}');
  Object.keys(defaultBoons).forEach((boon) => {
    let { active, prophecyForetold } = localBoons[boon];
    if (active) {
        defaultBoons[boon].active = active;
    }
    if (prophecyForetold) {
        defaultBoons[boon].prophecyForetold = prophecyForetold;
    }
  });
  return getBoonStatuses(defaultState(), Object.keys(defaultBoons) as AnyBoon[]);
}

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
    restrictedByBoons: [], // TODO: make set, and delimit more complex
    restrictsBoons: [], // TODO: make set, and delimit more complex
    swapsWithBoons: [], // TODO: make set, and delimit more complex
    unlocksBoons: [], // TODO: make set
  },
  groups: {
    boons: groupBoons,
    restrictions: boonRestrictionGroups,
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
