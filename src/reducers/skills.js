import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { SKILLS_SET } from '../lib/constants/actions';
import skillSeed from '../lib/seeds/skillSeed';

const defaultState = Map().set('skills', skillSeed);

export default createReducer(defaultState, {

  [SKILLS_SET](state, action) {
    return state.set('skills', action.payload);
  },

});
