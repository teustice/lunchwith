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
import setNewUser from './set-newUser';
import fetchNewUser from './fetch-newUser';
import setProfileModal from './set-profileModal';
import fetchProfileModal from './fetch-profileModal';
import setLunchRadiusMarker from './set-lunchRadiusMarker';
import fetchLunchRadiusMarker from './fetch-lunchRadiusMarker';
import setLunchRadiusSlider from './set-lunchRadiusSlider';
import fetchLunchRadiusSlider from './fetch-lunchRadiusSlider';
import fetchClusters from './fetch-clusters';
import setClusters from './set-clusters';
import fetchActiveMarker from './fetch-activeMarker';
import setActiveMarker from './set-activeMarker';
import fetchExperienceSlider from './fetch-experienceSlider';
import setExperienceSlider from './set-experienceSlider';
import fetchSkills from './fetch-skills';
import setSkills from './set-skills';
import fetchDrawerNav from './fetch-drawerNav';
import setDrawerNav from './set-drawerNav';
import fetchLogInModal from './fetch-logInModal';
import setLogInModal from './set-logInModal';
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
  setNewUser,
  fetchNewUser,
  setProfileModal,
  fetchProfileModal,
  setLunchRadiusMarker,
  fetchLunchRadiusMarker,
  setLunchRadiusSlider,
  fetchClusters,
  setClusters,
  fetchActiveMarker,
  setActiveMarker,
  fetchLunchRadiusSlider,
  fetchLunchRadiusSlider,
  setExperienceSlider,
  fetchExperienceSlider,
  setSkills,
  fetchDrawerNav,
  setDrawerNav,
  fetchSkills,
  fetchLogInModal,
  setLogInModal
};

export default ActionCreators;
