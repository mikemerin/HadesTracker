import { compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppState, BoonState } from 'redux/domain';
import { saveState } from 'redux/state';

import rootReducer from './reducers';

const enhancer = compose(
  composeWithDevTools(),
);

const store = createStore(rootReducer, enhancer);

store.subscribe(() => {
  const state: AppState = store.getState() as AppState;
  const boons = state.boons || {} as BoonState;
  saveState(boons);
});

export default store;
