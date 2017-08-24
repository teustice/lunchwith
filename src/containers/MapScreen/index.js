import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Map from '../../components/Map/index';
import { connect } from 'react-redux';
import ActionCreators from '../../actions/index';
import getRegion from '../../selectors/region';
import getMarkers from '../../selectors/markers';
import getUserLocation from '../../selectors/userLocation';
import findUserById from '../../lib/helpers/userById';

export class MapScreen extends Component {
  render() {
    return (
      <View>
        <Map
          setRegion={this.props.setRegion}
          region={this.props.region}
          markers={this.props.markers}
          initialRegion={this.props.userLocation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

MapScreen.defaultProps = {
  setRegion: () => {},
  region: {},
};

MapScreen.propTypes = {
  setRegion: PropTypes.func.isRequired,
  region: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { region: getRegion(store), markers: getMarkers(store), userLocation: getUserLocation(store) };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
