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

  nextItem(carouselIndex, marker) {
    this.refs.carousel.snapToNext();
    this.props.setRegion(marker.coordinates);
  }

  previousItem(carouselIndex, marker) {
    this.refs.carousel.snapToPrev();
    this.props.setRegion(marker.coordinates);
  }

  _renderItem (marker, index) {
    // console.log(marker.index);
    if (carouselCounter <= this.props.markers.length) {
      marker.item['carouselId'] = marker.index;
      tempMarkers.push(marker.item)
      carouselCounter += 1;
    } else if (carouselCounter === this.props.markers.length) {
      this.props.setMarkers(tempMarkers);
      carouselCounter = 0;
      tempMarkers = [];
    }
    // console.log(this.props.markers);
    let user = findUserById(marker.item.userId)
    return (
      <View>
        <View style={{ flexDirection: 'row', alignSelf:'center'}}>
          <ProfileModal profile={user}/>
        </View>
      </View>
    );
  }

  onSnap(index) {
    this.props.setCarousel({index: index});
    for(let i = 0; i < this.props.markers.length; i++){
      if (this.props.markers[i].carouselId === index ){
        this.props.setRegion(this.props.markers[i].coordinates);
      }
    }
  }

  render() {
    return (
      <View style={styles.carousel}>
         <Carousel
            ref={'carousel'}
            data={markers}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={Dimensions.get('window').width}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={this.props.carousel.index}
            onSnapToItem={this.onSnap.bind(this)}
            autoplay={false}
            enableSnap={true}
            snapOnAndroid={true} //to enable snapping on android
            itemWidth={Dimensions.get('window').width}
            slideStyle={styles.slide} />
      </View>
    );
  }
}

let tempMarkers = [];
let carouselCounter = 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center'
	},
  qaContainer:{
    backgroundColor: 'crimson',
  },
	slide: {
    flexDirection: 'column',
    width: Dimensions.get('window').width,
	},
	nextButton: {

	},
	prevButton: {

	},
});

export default ProfileCarousel;
