import { call, put, takeLatest } from 'redux-saga/effects';

import { CLUSTERS_FETCH } from '../lib/constants/actions';
import Api from '../lib/api';
import setClusters from '../actions/set-clusters';
import seededMarkers from '../lib/seeds/mapSeed.js';
import { genericError } from '../actions/errors';

function _createCluster(data) {
  const index = supercluster({
    radius: 60,
    maxZoom: 15, // Default: 16
    nodeSize: 128,
  });
  index.load(data.features);
  return index;
}

//Convert to GeoJSON
function _convertPoints(data) {
  const results = {
    type: 'MapCollection',
    features: [],
  };
  data.map((value, key) => {
    array = {
      type: 'Map',
      properties: {
        id: value.id,
        userId: value.userId,
        carouselId: value.carouselId,
        lat_x: value.coordinates.latitude,
        long_x: value.coordinates.longitude,
      },
      geometry: {
        type: 'Point',
        coordinates: [
          value.coordinates.longitude,
          value.coordinates.latitude,
        ],
      },
    };
    results.features.push(array);
  });
  _createCluster(results);
}

function* fetchClusters(action) {
  try {
    const clusters = yield call(_convertPoints(seededMarkers));
    console.log(clusters);
    yield put(setClusters(clusters));
  } catch (error) {
    console.warn(error);
    yield put(genericError('Failed to fetch clusters'));
  }
}

export default function* watchFetchClusters() {
  yield takeLatest(CLUSTERS_FETCH, fetchClusters);
}
