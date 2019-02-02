import { combineReducers } from 'redux';

import list from './list';
import movie from './movie';

const rootReducer = combineReducers({
  list,
  movie,
});

export default rootReducer;
