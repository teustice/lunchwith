import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import MarkerCallout from '../MarkerCallout';
import userSeed from '../../lib/seeds/userSeed';
import markers from '../../lib/seeds/mapSeed';
import ActionCreators from '../../actions/index';
import findUserById from '../../lib/helpers/userById';
import Carousel from 'react-native-snap-carousel';
import ProfileModal from '../ProfileModal';

export class ProfileCarousel extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem (marker, index) {
    let user = findUserById(marker.item.properties.userId)
    let neighborhood = {
      latitude: marker.item.properties.lat_x,
      longitude: marker.item.properties.long_x,
      longitudeDelta: 0.05,
      latitudeDelta: 0.05
    }
    return (
      <View >
        <View style={styles.contentContainer}>
          <View style={styles.viewContainer}>
          <ProfileModal
            profile={user}
            neighborhood={neighborhood}
            profileModal={this.props.profileModal}
            setProfileModal={this.props.setProfileModal}
            userLocation={this.props.userLocation}
            currentUser={this.props.currentUser}
          />
        </View>
        </View>
      </View>
    );
  }

  markerOrCluster(){
    if(this.props.clusters[0]) {
      return this.props.clusters
    } else {
      return [this.props.clusters] //single user
    }
  }

  render() {
    return (
      <View style={styles.carousel}>
         <Carousel
            ref={'carousel'}
            data={this.markerOrCluster()}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={Dimensions.get('window').width}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={this.props.carousel.index}
            autoplay={false}
            enableSnap={true}
            snapOnAndroid={true} //to enable snapping on android
            enableMomentum={false}
            itemWidth={((Dimensions.get('window').width)*8/10)}
            sliderWidth={(Dimensions.get('window').width)}
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
  },
  carousel: {
    position: 'absolute',
    bottom: 30,
  },
  contentContainer: {
    width: (Dimensions.get('window').width),
    marginRight: -((Dimensions.get('window').width) * 2/10),
  },
  viewContainer: {
	},
  qaContainer:{
    backgroundColor: 'crimson',
  },
	slide: {
    flexDirection: 'column',
    width: (Dimensions.get('window').width ),
	},
});

export default ProfileCarousel;
