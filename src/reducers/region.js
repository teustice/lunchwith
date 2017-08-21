import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { REGION_SET } from '../lib/constants/actions';


const defaultState = Map().set('title', 'title from default state');

export default createReducer(defaultState, {

  [REGION_SET](state, action) {
    return state.set('region', action.payload);
  },

});
