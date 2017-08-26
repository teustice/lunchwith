import setTitle from './set-title';
import fetchTitle from './fetch-title';
import setRegion from './set-region';
import fetchRegion from './fetch-region';
import setMarkers from './set-markers';
import fetchMarkers from './fetch-markers';
import fetchUserLocation from './fetch-userLocation';
import setUserLocation from './set-userLocation';
import setConnectivity from './set-connectivity';
import setBusiness from './set-business';
import fetchBusiness from './fetch-business';
import setCarousel from './set-carousel';
import fetchCarousel from './fetch-carousel';
import { genericError } from './errors';

const ActionCreators = {
  setRegion,
  fetchRegion,
  setTitle,
  fetchTitle,
  fetchUserLocation,
  setUserLocation,
  setMarkers,
  fetchMarkers,
  setConnectivity,
  genericError,
  fetchBusiness,
  setBusiness,
  setCarousel,
  fetchCarousel,
};

export default ActionCreators;
