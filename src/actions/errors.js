import { GENERIC_ERROR } from '../lib/constants/actions';

export const genericError = message => ({
  type: GENERIC_ERROR,
  payload: message,
});
