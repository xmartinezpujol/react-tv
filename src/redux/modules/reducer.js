import { combineReducers } from 'redux';

import list from './list';
import movie from './movie';
import recommendations from './recommendations';
import streaming from './streaming';

const rootReducer = combineReducers({
  list,
  movie,
  recommendations,
  streaming,
});

export default rootReducer;
