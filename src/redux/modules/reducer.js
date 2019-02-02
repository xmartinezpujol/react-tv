import { combineReducers } from 'redux';

import list from './list';
import movie from './movie';
import recommendations from './recommendations';

const rootReducer = combineReducers({
  list,
  movie,
  recommendations,
});

export default rootReducer;
