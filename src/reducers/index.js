import { combineReducers } from 'redux';

import title from './title';
import connectivity from './connectivity';

export const reducers = { title, connectivity };

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    ...reducers,
  });
}
