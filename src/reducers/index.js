import { combineReducers } from 'redux';

import title from './title';
import connectivity from './connectivity';
import region from './region';

export const reducers = { title, connectivity, region };

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    ...reducers,
  });
}
