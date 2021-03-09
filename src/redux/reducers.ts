import { createReducer } from 'typesafe-actions';

import {
  setBoonActive,
  setBoonProphecyForetold,
  setBoons,
  setCurrentPage,
  setGroupRowOrder,
} from './actions';
import { AppState, Boon } from './domain';
import initialState from './state';
import { setUnlocks } from 'utils';

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
  }
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

const rootReducer = createReducer(initialState)
.handleAction(setBoonActive, handleSetBoonActive)
.handleAction(setBoonProphecyForetold, handleSetBoonProphecyForetold)
.handleAction(setBoons, handleSetBoons)
.handleAction(setGroupRowOrder, handleSetGroupRowOrder)
.handleAction(setCurrentPage, handleSetCurrentPage);

export default rootReducer;
