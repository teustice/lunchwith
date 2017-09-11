import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { CURRENT_USER_SET } from '../lib/constants/actions';


const defaultState = Map().set('currentUser', {});

export default createReducer(defaultState, {

  [CURRENT_USER_SET](state, action) {
    return state.set('currentUser', action.payload);
  },

});
