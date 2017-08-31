import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { NEWUSER_SET } from '../lib/constants/actions';


const defaultState = Map().set('newUser', {
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    lunchRadius: '',
    bio: '',
    skills: [],
    experience: '',
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });

export default createReducer(defaultState, {

  [NEWUSER_SET](state, action) {
    return state.set('region', action.payload);
  },

});
