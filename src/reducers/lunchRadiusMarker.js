import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { LUNCH_RADIUS_MARKER_SET } from '../lib/constants/actions';


const defaultState = Map().set('lunchRadiusMarker', {});

export default createReducer(defaultState, {

  [LUNCH_RADIUS_MARKER_SET](state, action) {
    return state.set('lunchRadiusMarker', action.payload);
  },

});
