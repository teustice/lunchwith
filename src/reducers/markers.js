import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { MARKERS_SET } from '../lib/constants/actions';
import seededMarkers from '../lib/seeds/mapSeed.js';


const defaultState = Map().set('markers', seededMarkers);

export default createReducer(defaultState, {

  [MARKERS_SET](state, action) {
    return state.set('markers', action.payload);
  },

});
