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
import getCarousel from '../../selectors/carousel';
import findUserById from '../../lib/helpers/userById';
import ProfileCarousel from '../../components/ProfileCarousel';

export class MapScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Map
          setRegion={this.props.setRegion}
          region={this.props.region}
          markers={this.props.markers}
          initialRegion={this.props.userLocation}
        />
        <ProfileCarousel
          markers={this.props.markers}
          setRegion={this.props.setRegion}
          carousel={this.props.carousel}
          setCarousel={this.props.setCarousel}
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
  setCarousel: () => {},
  region: {},
  carousel: {},
};

MapScreen.propTypes = {
  setRegion: PropTypes.func.isRequired,
  setCarousel: PropTypes.func.isRequired,
  region: PropTypes.object.isRequired,
  carousel: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return {
    region: getRegion(store),
    markers: getMarkers(store),
    userLocation: getUserLocation(store),
    carousel: getCarousel(store)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
