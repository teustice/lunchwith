import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { CAROUSEL_SET } from '../lib/constants/actions';


const defaultState = Map().set('carousel', {index: 1});

export default createReducer(defaultState, {

  [CAROUSEL_SET](state, action) {
    return state.set('carousel', action.payload);
  },

});
