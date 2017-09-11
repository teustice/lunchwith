import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { USER_LOCATION_SET } from '../lib/constants/actions';


const defaultState = Map().set('userLocation', {});

export default createReducer(defaultState, {

  [USER_LOCATION_SET](state, action) {
    return state.set('userLocation', action.payload);
  },

});
