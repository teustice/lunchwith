import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { SKILLS_SET } from '../lib/constants/actions';


const defaultState = Map().set('skills', []);

export default createReducer(defaultState, {

  [SKILLS_SET](state, action) {
    return state.set('skills', action.payload);
  },

});
