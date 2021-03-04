import { createReducer } from 'typesafe-actions';

import { setCurrentPage } from './actions';
import initialState from './state';
import { AppState } from './domain';

const handleSetCurrentPage = (
  state: AppState,
  { payload }: ReturnType<typeof setCurrentPage>,
): AppState => {
  const { currentPage } = payload;
  return {
    ...state,
    currentPage,
  };
}

const rootReducer = createReducer(initialState)
.handleAction(setCurrentPage, handleSetCurrentPage);

export default rootReducer;
