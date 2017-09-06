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

  componentDidMount(){
    //generate carouselId in markers for region snapping
    // for(let i=0; i < this.props.markers.length; i++) {
    //   markers[i]['carouselId'] = i;
    // };
  }

  _renderItem (marker, index) {
    let user = findUserById(marker.item.userId)
    return (
      <View >
        <View style={styles.contentContainer}>
          <View style={styles.viewContainer}>
          <ProfileModal
            profile={user}
            profileModal={this.props.profileModal}
            setProfileModal={this.props.setProfileModal}
            userLocation={this.props.userLocation}
          />
        </View>
        </View>
      </View>
    );
  }

  // onSnap(index) {
  //   this.props.setCarousel({index: index});
  //   for(let i = 0; i < this.props.markers.length; i++){
  //     if (this.props.markers[i].carouselId === index ){
  //       this.props.setRegion(this.props.markers[i].coordinates);
  //     }
  //   }
  // }

  render() {
    return (
      <View style={styles.carousel}>
         <Carousel
            ref={'carousel'}
            data={this.props.markers}
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

let carouselCounter = 0;

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
