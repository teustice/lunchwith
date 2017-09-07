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
import getDrawerNav from '../../selectors/drawerNav';
import getClusters from '../../selectors/clusters';
import getActiveMarker from '../../selectors/activeMarker';
import findUserById from '../../lib/helpers/userById';
import ProfileCarousel from '../../components/ProfileCarousel';
import DrawerNav from '../../components/DrawerNav/index';
import LogIn from '../../components/LogIn/index';

export class MapScreen extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, maximumAge: 1000 },
    );
  }

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
          userLocation={this.props.userLocation}
        />
      )
    }
  }

  navBlur(){
    if(this.props.drawerNav.drawerOpen) {
      return(
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={2}
        />
      )
    }
  }

  pageRender(){
    if(this.props.userLocation.latitude){
      console.log(this.props.userLocation);
      return(
        <View>
          <StatusBar hidden={true} />
          <Map
            carousel={this.props.carousel}
            setCarousel={this.props.setCarousel}
            setRegion={this.props.setRegion}
            region={this.props.region}
            markers={this.props.markers}
            userLocation={this.props.userLocation}
            clusters={this.props.clusters}
            setClusters={this.props.setClusters}
            activeMarker={this.props.activeMarker}
            setActiveMarker={this.props.setActiveMarker}
          />
          {this.renderCarousel()}
          {this.navBlur()}
          <View style={styles.drawerIcon}>
            <DrawerNav
              navigation={this.props.navigation}
              drawerNav={this.props.drawerNav}
              setDrawerNav={this.props.setDrawerNav}
            />
          </View>
          <LogIn />

        </View>
      )
    }
  }

  render() {
    return (
      <View>
        {this.pageRender()}
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
    clusters: getClusters(store),
    drawerNav: getDrawerNav(store)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
