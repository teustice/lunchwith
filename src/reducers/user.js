import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { USER_SET } from '../lib/constants/actions';
import seededUsers from '../lib/seeds/userSeed'


const defaultState = Map().set('user', seededUsers);

export default createReducer(defaultState, {

  [USER_SET](state, action) {
    return state.set('user', action.payload);
  },

});
