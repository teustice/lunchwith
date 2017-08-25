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
import getCarouselIndex from '../../selectors/carouselIndex';
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
          carouselIndex={this.props.carouselIndex}
          setCarouselIndex={this.props.setCarouselIndex}
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
  setCarouselIndex: () => {},
  region: {},
};

MapScreen.propTypes = {
  setRegion: PropTypes.func.isRequired,
  setCarouselIndex: PropTypes.func.isRequired,
  region: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return {
    region: getRegion(store),
    markers: getMarkers(store),
    userLocation: getUserLocation(store),
    carouselIndex: getCarouselIndex(store)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
