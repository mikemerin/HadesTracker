import { createReducer } from 'typesafe-actions';

import {
  setBoonUnlocked,
  setBoonProphecyForetold,
  setBoons,
  setCurrentPage,
  setGroupRowOrder,
} from './actions';
import initialState from './state';
import { AppState } from './domain';

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

const handleSetBoonUnlocked = (
  state: AppState,
  { payload }: ReturnType<typeof setBoonUnlocked>,
): AppState => {
  const { boon, unlocked } = payload;
  return {
    ...state,
    boons: {
      ...state.boons,
      [boon]: {
        ...state.boons[boon],
        unlocked,
      }
    }
  }
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
.handleAction(setBoonUnlocked, handleSetBoonUnlocked)
.handleAction(setBoonProphecyForetold, handleSetBoonProphecyForetold)
.handleAction(setBoons, handleSetBoons)
.handleAction(setGroupRowOrder, handleSetGroupRowOrder)
.handleAction(setCurrentPage, handleSetCurrentPage);

export default rootReducer;
