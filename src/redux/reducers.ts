import { createReducer } from 'typesafe-actions';

import {
  resetBoons,
  setBoonActive,
  setBoonProphecyForetold,
  setBoons,
  setCurrentPage,
  setDisplayInfo,
  setGroupRowOrder,
} from './actions';
import { AppState } from './domain';
import initialState, { defaultState } from './state';
import { setUnlocks } from 'utils';

const handleResetBoons = (
  state: AppState,
  { payload }: ReturnType<typeof setBoons>,
): AppState => defaultState;

const handleSetBoonActive = (
  state: AppState,
  { payload }: ReturnType<typeof setBoonActive>,
): AppState => {
  const { boon, active } = payload;

  let newState = {
    ...state,
    boons: {
      ...state.boons,
      [boon]: {
        ...state.boons[boon],
        active,
        ...active && { prophecyForetold: true },
      }
    }
  }

  const { unlocks } = state.boons[boon];
  if (unlocks) {
    newState = setUnlocks(newState, unlocks);
  }
  return newState;
};

const handleSetBoonProphecyForetold = (
  state: AppState,
  { payload }: ReturnType<typeof setBoonProphecyForetold>,
): AppState => {
  const { boon, prophecyForetold } = payload;
  return {
    ...state,
    boons: {
      ...state.boons,
      [boon]: {
        ...state.boons[boon],
        prophecyForetold,
      }
    }
  };
};

const handleSetBoons = (
  state: AppState,
  { payload }: ReturnType<typeof setBoons>,
): AppState => ({
  ...state,
  boons: payload.boons,
});

const handleSetCurrentPage = (
  state: AppState,
  { payload }: ReturnType<typeof setCurrentPage>,
): AppState => ({
  ...state,
  pages: {
    ...state.pages,
    current: payload.currentPage,
  }
});

const handleSetDisplayInfo = (
  state: AppState,
  { payload }: ReturnType<typeof setDisplayInfo>,
): AppState => ({
  ...state,
  display: {
    requiresBoons: payload.requiresBoons || [],
    unlocksBoons: payload.unlocksBoons || [],
  }
});

const handleSetGroupRowOrder = (
  state: AppState,
  { payload }: ReturnType<typeof setGroupRowOrder>,
): AppState => ({
  ...state,
  groups: {
    ...state.groups,
    rowOrder: payload.groupRowOrder,
  }
});

const rootReducer = createReducer(initialState)
.handleAction(resetBoons, handleResetBoons)
.handleAction(setBoonActive, handleSetBoonActive)
.handleAction(setBoonProphecyForetold, handleSetBoonProphecyForetold)
.handleAction(setBoons, handleSetBoons)
.handleAction(setCurrentPage, handleSetCurrentPage)
.handleAction(setDisplayInfo, handleSetDisplayInfo)
.handleAction(setGroupRowOrder, handleSetGroupRowOrder);

export default rootReducer;
