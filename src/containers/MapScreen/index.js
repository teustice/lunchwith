import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, TouchableWithoutFeedback } from 'react-native';
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
import getLogInModal from '../../selectors/logInModal';
import getCarousel from '../../selectors/carousel';
import getProfileModal from '../../selectors/profileModal';
import getDrawerNav from '../../selectors/drawerNav';
import getClusters from '../../selectors/clusters';
import getActiveMarker from '../../selectors/activeMarker';
import getCurrentUser from '../../selectors/currentUser';
import getAvailabilityModal from '../../selectors/availabilityModal';
import getAvailabilityFilter from '../../selectors/availabilityFilter';
import findUserById from '../../lib/helpers/userById';
import ProfileCarousel from '../../components/ProfileCarousel';
import DrawerNav from '../../components/DrawerNav/index';
import LogIn from '../../components/LogIn/index';
import NewUser from '../../components/LogIn/newUser';
import MapFilter from './filter';

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
          currentUser={this.props.currentUser}
          navigation={this.props.navigation}

        />
      )
    }
  }

  navBlur(){
    if(this.props.drawerNav.drawerOpen) {
      return(
        <TouchableWithoutFeedback onPress={() => this.props.setDrawerNav({drawerOpen: false})}>
          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={2}
          />
        </TouchableWithoutFeedback>
      )
    }
  }

  existsInArray(array, element){
    for(let i=0; i<array.length; i++){
      if(element.id === array[i].id){
        return true;
      }
    }
  }

  filterMap(){
    let tempUser = {};
    let newMarkers= [];
    let startTime = parseInt(this.props.availabilityFilter.timeStart);
    let endTime = parseInt(this.props.availabilityFilter.timeEnd);
    if(startTime == 1){
      startTime += 12;
    }
    if(endTime == 1 || endTime == 2){
      endTime += 12;
    }
    for(let i=0; i<this.props.markers.length; i++){
      tempUser = findUserById(this.props.markers[i].userId);
      for(let x=0; x<tempUser.availability.length; x++){
        if(this.existsInArray(newMarkers, this.props.markers[i])){
        } else {
          if(tempUser.availability[x].time == 1) {
            if(startTime <= (tempUser.availability[x].time + 12) && (tempUser.availability[x].time + 12) <= endTime){
              newMarkers.push(this.props.markers[i]);
            }
          } else if(startTime <= (tempUser.availability[x].time) && (tempUser.availability[x].time) <= endTime) {
            newMarkers.push(this.props.markers[i]);
          }
        }
      }
    }
    return newMarkers;
  }

  pageRender(){
    if(this.props.userLocation.latitude){
      return(
        <View>
          <StatusBar hidden={true} />
          <Map
            carousel={this.props.carousel}
            setCarousel={this.props.setCarousel}
            setRegion={this.props.setRegion}
            region={this.props.region}
            markers={this.filterMap()}
            userLocation={this.props.userLocation}
            clusters={this.props.clusters}
            setClusters={this.props.setClusters}
            activeMarker={this.props.activeMarker}
            setActiveMarker={this.props.setActiveMarker}
            currentUser={this.props.currentUser}

          />
          <MapFilter
            availabilityFilter={this.props.availabilityFilter}
            setAvailabilityFilter={this.props.setAvailabilityFilter}
          />
          {this.renderCarousel()}
          {this.navBlur()}
          <View style={styles.drawerIcon}>
            <DrawerNav
              navigation={this.props.navigation}
              drawerNav={this.props.drawerNav}
              setDrawerNav={this.props.setDrawerNav}
              setLogInModal={this.props.setLogInModal}
              currentUser={this.props.currentUser}
              setCurrentUser={this.props.setCurrentUser}
              setAvailabilityModal={this.props.setAvailabilityModal}
            />
          </View>
          <LogIn
            currentUser={this.props.currentUser}
            setCurrentUser={this.props.setCurrentUser}
            logInModal={this.props.logInModal}
            setLogInModal={this.props.setLogInModal}
          />
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
  setAvailabilityModal: () => {},
  setAvailabilityFilter: () => {},
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
    drawerNav: getDrawerNav(store),
    logInModal: getLogInModal(store),
    currentUser: getCurrentUser(store),
    availabilityModal: getAvailabilityModal(store),
    availabilityFilter: getAvailabilityFilter(store),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
