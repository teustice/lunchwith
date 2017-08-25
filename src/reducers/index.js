import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import title from './title';
import connectivity from './connectivity';
import region from './region';
import markers from './markers';
import user from './user';
import business from './business';
import userLocation from './userLocation';
import carouselIndex from './carouselIndex';


export const reducers = { title, connectivity, region, markers, userLocation, user, business, form: formReducer, carouselIndex };

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    ...reducers,
  });
}
