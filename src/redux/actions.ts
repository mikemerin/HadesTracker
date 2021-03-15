import { createAction } from 'typesafe-actions';

import {
  BoonState,
  GroupRowOrder,
  Requirements,
} from 'redux/domain';

const resetBoons = createAction(
  '[Boons] Reset Boons',
)();

const setBoonActive = createAction(
  '[Boons] Set Boon Active',
  (boon: string, active: boolean) => ({ boon, active })
)();

const setBoonProphecyForetold = createAction(
  '[Boons] Set Boon Prophecy Foretold',
  (boon: string, prophecyForetold: boolean) => ({ boon, prophecyForetold })
)();

const setBoons = createAction(
  '[Boons] Set Boons',
  (boons: BoonState) => ({ boons })
)();

const setCurrentPage = createAction(
  '[Pages] Set Current Page',
  (currentPage: string) => ({ currentPage })
)();

const setDisplayInfo = createAction(
  '[Display] Set Display Info',
  (requiresBoons: Requirements[], unlocksBoons: string[]) => ({ requiresBoons, unlocksBoons })
)();

const setGroupRowOrder = createAction(
  '[Groups] Set Group Row Order',
  (groupRowOrder: GroupRowOrder) => ({ groupRowOrder }) // todo: GroupRowOrder
)();

export {
  resetBoons,
  setBoonActive,
  setBoonProphecyForetold,
  setBoons,
  setCurrentPage,
  setDisplayInfo,
  setGroupRowOrder,
};
