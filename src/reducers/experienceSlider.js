import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { EXPERIENCE_SLIDER_SET } from '../lib/constants/actions';


const defaultState = Map().set('experienceSlider', 0);

export default createReducer(defaultState, {

  [EXPERIENCE_SLIDER_SET](state, action) {
    return state.set('experienceSlider', action.payload);
  },

});
