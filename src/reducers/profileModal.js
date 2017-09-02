import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { PROFILE_MODAL_SET } from '../lib/constants/actions';


const defaultState = Map().set('profileModal', {properties: {id: -999}});

export default createReducer(defaultState, {

  [PROFILE_MODAL_SET](state, action) {
    return state.set('profileModal', action.payload);
  },

});
