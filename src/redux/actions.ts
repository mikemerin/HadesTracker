import { createAction } from 'typesafe-actions';

import { BoonInfo } from 'redux/domain';

const setGroupRowOrder = createAction(
  '[Groups] Set Group Row Order',
  (groupRowOrder: any) => ({ groupRowOrder }) // todo: GroupRowOrder
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
  (boons: {[key: string]: BoonInfo}) => ({ boons })
)();

const setCurrentPage = createAction(
  '[Pages] Set Current Page',
  (currentPage: string) => ({ currentPage })
)();

export {
  setBoonActive,
  setBoonProphecyForetold,
  setBoons,
  setCurrentPage,
  setGroupRowOrder,
};
