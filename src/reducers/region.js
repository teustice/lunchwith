import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { REGION_SET } from '../lib/constants/actions';


const defaultState = Map().set('region', {
    latitude: 45.521371,
    longitude: -122.673168,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

export default createReducer(defaultState, {

  [REGION_SET](state, action) {
    return state.set('region', action.payload);
  },

});
