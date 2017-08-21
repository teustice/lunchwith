import setTitle from './set-title';
import setRegion from './set-region';
import fetchRegion from './fetch-region';
import fetchTitle from './fetch-title';
import setConnectivity from './set-connectivity';
import { genericError } from './errors';

const ActionCreators = {
  setRegion,
  fetchRegion,
  setTitle,
  fetchTitle,
  setConnectivity,
  genericError,
};

export default ActionCreators;
