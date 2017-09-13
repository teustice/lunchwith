import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { SKILL_MODAL_SET } from '../lib/constants/actions';


const defaultState = Map().set('skillModal', {isOpen: false});

export default createReducer(defaultState, {

  [SKILL_MODAL_SET](state, action) {
    return state.set('skillModal', action.payload);
  },

});
