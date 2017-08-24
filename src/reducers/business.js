import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { BUSINESS_SET } from '../lib/constants/actions';


const defaultState = Map().set('company', {name: 'Company'});

export default createReducer(defaultState, {

  [BUSINESS_SET](state, action) {
    return state.set('company', action.payload);
  },

});
