import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { DRAWER_NAV_SET } from '../lib/constants/actions';


const defaultState = Map().set('drawerNav', {drawerOpen: false});

export default createReducer(defaultState, {

  [DRAWER_NAV_SET](state, action) {
    return state.set('drawerNav', action.payload);
  },

});
