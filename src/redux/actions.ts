import { createAction } from 'typesafe-actions';

const setCurrentPage = createAction(
  'Set Current Page',
  (currentPage: string) => ({ currentPage })
)();

export {
  setCurrentPage,
};
