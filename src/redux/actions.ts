import { createAction } from 'typesafe-actions';

import { Boon } from 'redux/domain';

const setGroupRowOrder = createAction(
  '[Groups] Set Group Row Order',
  (groupRowOrder: any) => ({ groupRowOrder }) // todo: GroupRowOrder
)();

const setBoonUnlocked = createAction(
  '[Boons] Set Boon Unlocked',
  (boon: string, unlocked: boolean) => ({ boon, unlocked })
)();

const setBoonProphecyForetold = createAction(
  '[Boons] Set Boon Prophecy Foretold',
  (boon: string, prophecyForetold: boolean) => ({ boon, prophecyForetold })
)();

const setBoons = createAction(
  '[Boons] Set Boons',
  (boons: {[key: string]: Boon}) => ({ boons })
)();

const setCurrentPage = createAction(
  '[Pages] Set Current Page',
  (currentPage: string) => ({ currentPage })
)();

export {
  setBoonUnlocked,
  setBoonProphecyForetold,
  setBoons,
  setCurrentPage,
  setGroupRowOrder,
};
