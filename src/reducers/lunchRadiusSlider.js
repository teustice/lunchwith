import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { LUNCH_RADIUS_SLIDER_SET } from '../lib/constants/actions';


const defaultState = Map().set('lunchRadiusSlider', 0.5);

export default createReducer(defaultState, {

  [LUNCH_RADIUS_SLIDER_SET](state, action) {
    return state.set('lunchRadiusSlider', action.payload);
  },

});
