import { createAction } from 'typesafe-actions';

import { Boon, BoonGroups } from 'redux/domain';

const setBoonGroups = createAction(
  '[Groups] Set Boon Groups',
  (boonGroups: BoonGroups) => ({ boonGroups })
)();

const setBoonUnlocked = createAction(
  '[Boons] Set Boon Unlocked',
  (boon: string, unlocked: boolean) => ({ boon, unlocked })
)();

const setBoonProphecyForetold = createAction(
  '[Boons] Set Boon Prophecy Unlocked',
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
  setBoonGroups,
  setBoonUnlocked,
  setBoonProphecyForetold,
  setBoons,
  setCurrentPage,
};
