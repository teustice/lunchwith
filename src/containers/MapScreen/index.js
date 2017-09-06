import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { BlurView } from 'react-native-blur';

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
import getActiveMarker from '../../selectors/activeMarker';
import findUserById from '../../lib/helpers/userById';
import ProfileCarousel from '../../components/ProfileCarousel';
import DrawerNav from '../../components/DrawerNav/index';

export class MapScreen extends Component {
  renderCarousel(){
    if(this.props.clusters[0] || this.props.clusters.properties){
      return(
        <ProfileCarousel
          setMarkers={this.props.setMarkers}
          markers={this.props.markers}
          clusters={this.props.clusters}
          users={this.props.users}
          setRegion={this.props.setRegion}
          carousel={this.props.carousel}
          setCarousel={this.props.setCarousel}
          profileModal={this.props.profileModal}
          setProfileModal={this.props.setProfileModal}
        />
      )
    }
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <StatusBar hidden={true} />
        <Map
          carousel={this.props.carousel}
          setCarousel={this.props.setCarousel}
          setRegion={this.props.setRegion}
          region={this.props.region}
          markers={this.props.markers}
          initialRegion={this.props.userLocation}
          clusters={this.props.clusters}
          setClusters={this.props.setClusters}
          activeMarker={this.props.activeMarker}
          setActiveMarker={this.props.setActiveMarker}
        />
        {this.renderCarousel()}
        <View style={styles.drawerIcon}>
          <DrawerNav navigation={this.props.navigation}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerIcon: {
    position: 'absolute',
    top: 10,
    right: 50,
  },
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },
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
    activeMarker: getActiveMarker(store),
    users: getUser(store),
    clusters: getClusters(store)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
