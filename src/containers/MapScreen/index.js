import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Map from '../../components/Map/index';
import { connect } from 'react-redux';
import ActionCreators from '../../actions/index';
import getRegion from '../../selectors/region';
import getUser from '../../selectors/user';
import getMarkers from '../../selectors/markers';
import getUserLocation from '../../selectors/userLocation';
import getCarousel from '../../selectors/carousel';
import getProfileModal from '../../selectors/profileModal';
import getClusters from '../../selectors/clusters';
import findUserById from '../../lib/helpers/userById';
import ProfileCarousel from '../../components/ProfileCarousel';

export class MapScreen extends Component {
  render() {
    console.log(this.props.clusters);
    return (
      <View>
        <Map
          carousel={this.props.carousel}
          setCarousel={this.props.setCarousel}
          setRegion={this.props.setRegion}
          region={this.props.region}
          markers={this.props.markers}
          initialRegion={this.props.userLocation}
          clusters={this.props.clusters}
        />
        <ProfileCarousel
          setMarkers={this.props.setMarkers}
          markers={this.props.markers}
          users={this.props.users}
          setRegion={this.props.setRegion}
          carousel={this.props.carousel}
          setCarousel={this.props.setCarousel}
          profileModal={this.props.profileModal}
          setProfileModal={this.props.setProfileModal}
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
  setMarkers: () => {},
  setProfileModal: () => {},
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
    carousel: getCarousel(store),
    profileModal: getProfileModal(store),
    users: getUser(store),
    clusters: getClusters(store)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
