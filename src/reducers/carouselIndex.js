import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { CAROUSEL_INDEX_SET } from '../lib/constants/actions';


const defaultState = Map().set('carouselIndex', 0);

export default createReducer(defaultState, {

  [CAROUSEL_INDEX_SET](state, action) {
    return state.set('carouselIndex', action.payload);
  },

});
