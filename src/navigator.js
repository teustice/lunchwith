import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import Splash from './containers/Splash';
import MapScreen from './containers/MapScreen';
import Profile from './containers/Profile';
import Onboard from './containers/Onboard';
import Lunch from './containers/Lunch';
import routesNames from './lib/constants/routes';
import Icon from 'react-native-vector-icons/FontAwesome'

const routes = {
  [routesNames.MapScreen]: {
    screen: MapScreen,
    navigationOptions: {
      header: null,
    },
  },
  [routesNames.Splash]: {
    screen: Splash,
    navigationOptions: {
      header: null,
    },
  },
  [routesNames.Profile]: {
    screen: Profile,
    navigationOptions: {
      header: null,
    }
  },
  [routesNames.Onboard]: {
    screen: Onboard,
    navigationOptions: {
      header: null,
    }
  },
  [routesNames.Lunch]: {
    screen: Lunch,
    navigationOptions: {
      header: null,
    }
  }
};

const AppNavigator = StackNavigator(routes);

const AppWithoutNavigationState = props => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav,
    })}
  />
);

function mapNavToProps(store) {
  return store;
}

const AppWithNavigationState = connect(mapNavToProps)(AppWithoutNavigationState);

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default { AppWithNavigationState, navReducer };
