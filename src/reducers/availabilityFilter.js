import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { AVAILABILITY_FILTER_SET } from '../lib/constants/actions';


const defaultState = Map().set('availabilityFilter', {timeStart: '10', timeEnd: '2'});

export default createReducer(defaultState, {

  [AVAILABILITY_FILTER_SET](state, action) {
    return state.set('availabilityFilter', action.payload);
  },

});
