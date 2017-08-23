import React from 'react';
import { connect } from 'react-redux';
import { TabNavigator, addNavigationHelpers } from 'react-navigation';

import Splash from './containers/Splash';
import MapScreen from './containers/MapScreen';
import Profile from './containers/Profile';
import routesNames from './lib/constants/routes';
import Icon from 'react-native-vector-icons/FontAwesome'

const routes = {
  [routesNames.MapScreen]: {
    screen: MapScreen,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'map' } color={ tintColor }/>
    },
  },
  [routesNames.Splash]: {
    screen: Splash,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'cutlery' } color={ tintColor }/>
    },
  },
  [routesNames.Profile]: {
    screen: Profile,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'user' } color={ tintColor }/>
    }
  }
};

const AppNavigator = TabNavigator(routes);

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
