import { combineReducers } from 'redux';

import title from './title';
import connectivity from './connectivity';
import region from './region';
import markers from './markers';
import user from './user';
// redux-form reducer
import { reducer as formReducer } from 'redux-form'

export const reducers = { title, connectivity, region, markers, user, form: formReducer  };

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    ...reducers,
  });
}
