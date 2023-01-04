import { combineReducers, createStore } from 'redux';
import { pageQueue } from './reducer-list';

const rootReducer = combineReducers({
  pages: pageQueue,
});

export const store = createStore(rootReducer);
