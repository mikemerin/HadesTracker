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
import { AnyBoon, AppState, BoonResetTypes, BoonTypes } from './domain';
import initialState, { defaultState } from './state';
import { getBoonStatuses, getRelatedBoons } from 'utils';

const handleResetBoons = (
  state: AppState,
  { payload }: ReturnType<typeof resetBoons>,
): AppState => {
  const { boonResetType } = payload;
  switch(boonResetType) {
    case BoonResetTypes.All:
      return defaultState();
    case BoonResetTypes.Active:
      const allBoons = Object.keys(state.boons) as AnyBoon[];
      return {
        ...state,
        boons: getBoonStatuses(state, allBoons, true),
        pages: {
          ...state.pages,
          current: state.pages.current,
        }
      };
    default:
      return state;
  };
};

const handleSetBoonActive = (
  state: AppState,
  { payload }: ReturnType<typeof setBoonActive>,
): AppState => {
  const { active, boon } = payload;
  const { type } = state.boons[boon];

  let newState = {
    ...state,
    boons: {
      ...state.boons,
      [boon]: {
        ...state.boons[boon],
        active,
        ...(active && type === BoonTypes.Tracked && { prophecyForetold: true }),
        ...(type !== BoonTypes.Icon && {restricted: false}),
      }
    }
  }

  const relatedBoons = getRelatedBoons(state.boons[boon]);
  if (relatedBoons.length) {
    return {
      ...newState,
      boons: getBoonStatuses(newState, relatedBoons),
    }
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
    requiresBoons: payload.requirements || [],
    restrictedByBoons: payload.restrictedBy || [],
    restrictsBoons: payload.restricts || [],
    swapsWithBoons: payload.swapsWith || [],
    unlocksBoons: payload.unlocks || [],
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
