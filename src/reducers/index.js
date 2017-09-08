import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import title from './title';
import connectivity from './connectivity';
import region from './region';
import markers from './markers';
import user from './user';
import business from './business';
import userLocation from './userLocation';
import carousel from './carousel';
import newUser from './newUser';
import profileModal from './profileModal';
import lunchRadiusMarker from './lunchRadiusMarker';
import lunchRadiusSlider from './lunchRadiusSlider';
import experienceSlider from './experienceSlider';
import clusters from './clusters';
import skills from './skills';
import activeMarker from './activeMarker';
import drawerNav from './drawerNav';
import logInModal from './logInModal';
import currentUser from './currentUser';

export const reducers = {
  title,
  connectivity,
  region,
  markers,
  userLocation,
  user,
  business,
  carousel,
  profileModal,
  lunchRadiusMarker,
  lunchRadiusSlider,
  clusters,
  activeMarker,
  form: formReducer,
  newUser,
  experienceSlider,
  skills,
  drawerNav,
  logInModal,
  currentUser
};

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    ...reducers,
  });
}
