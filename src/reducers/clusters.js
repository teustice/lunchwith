import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { CLUSTERS_SET } from '../lib/constants/actions';


const defaultState = Map().set('clusters', {});

export default createReducer(defaultState, {

  [CLUSTERS_SET](state, action) {
    return state.set('clusters', action.payload);
  },

});
