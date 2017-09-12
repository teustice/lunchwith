import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { AVAILABILITY_MODAL_SET } from '../lib/constants/actions';


const defaultState = Map().set('availabilityModal', {isOpen: true});

export default createReducer(defaultState, {

  [AVAILABILITY_MODAL_SET](state, action) {
    return state.set('availabilityModal', action.payload);
  },

});
