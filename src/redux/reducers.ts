import { createReducer } from 'typesafe-actions';

import {
  setBoonActive,
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

const handleSetBoonActive = (
  state: AppState,
  { payload }: ReturnType<typeof setBoonActive>,
): AppState => {
  // TODO: logic here to set unlocks
  const { boon, active } = payload;
  return {
    ...state,
    boons: {
      ...state.boons,
      [boon]: {
        ...state.boons[boon],
        active,
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
.handleAction(setBoonActive, handleSetBoonActive)
.handleAction(setBoonProphecyForetold, handleSetBoonProphecyForetold)
.handleAction(setBoons, handleSetBoons)
.handleAction(setGroupRowOrder, handleSetGroupRowOrder)
.handleAction(setCurrentPage, handleSetCurrentPage);

export default rootReducer;
