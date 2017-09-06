import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { ACTIVE_MARKER_SET } from '../lib/constants/actions';


const defaultState = Map().set('activeMarker', {properties: {id: -999}});

export default createReducer(defaultState, {

  [ACTIVE_MARKER_SET](state, action) {
    return state.set('activeMarker', action.payload);
  },

});
