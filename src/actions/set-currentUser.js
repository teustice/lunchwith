import { CURRENT_USER_SET } from '../lib/constants/actions';

export default payload => ({
  type: CURRENT_USER_SET,
  payload,
});
