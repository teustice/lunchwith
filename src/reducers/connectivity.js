import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer'
import { CONNECTIVITY_SET } from '../lib/constants/actions'


const defaultState = Map().set('connectivity', true);
export default createReducer(defaultState, {

  [CONNECTIVITY_SET](state, action) {
    return state.set('connectivity', action.payload);
  },

});
