import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { USER_LOCATION_SET } from '../lib/constants/actions';


const defaultState = Map().set('userLocation', {
    latitude: 45.521371,
    longitude: -122.673168,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

export default createReducer(defaultState, {

  [USER_LOCATION_SET](state, action) {
    return state.set('userLocation', action.payload);
  },

});
