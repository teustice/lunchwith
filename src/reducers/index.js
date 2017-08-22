import { combineReducers } from 'redux';

import title from './title';
import connectivity from './connectivity';
import region from './region';
import markers from './markers';

export const reducers = { title, connectivity, region, markers };

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    ...reducers,
  });
}
