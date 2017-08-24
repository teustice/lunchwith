import setTitle from './set-title';
import fetchTitle from './fetch-title';
import setRegion from './set-region';
import fetchRegion from './fetch-region';
import setMarkers from './set-markers';
import fetchMarkers from './fetch-markers';
import setConnectivity from './set-connectivity';
import setBusiness from './set-business';
import fetchBusiness from './fetch-business';
import { genericError } from './errors';

const ActionCreators = {
  setRegion,
  fetchRegion,
  setTitle,
  fetchTitle,
  setMarkers,
  fetchMarkers,
  setConnectivity,
  genericError,
  fetchBusiness,
  setBusiness, 
};

export default ActionCreators;
