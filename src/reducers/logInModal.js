import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { LOG_IN_MODAL_SET } from '../lib/constants/actions';


const defaultState = Map().set('logInModal', false);

export default createReducer(defaultState, {

  [LOG_IN_MODAL_SET](state, action) {
    return state.set('logInModal', action.payload);
  },

});
