import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import MarkerCallout from '../MarkerCallout';
import userSeed from '../../lib/seeds/userSeed';
import ActionCreators from '../../actions/index';
import findUserById from '../../lib/helpers/userById';
import Carousel from 'react-native-snap-carousel';
import ProfileModal from '../ProfileModal';

export class ProfileCarousel extends Component {
  constructor(props) {
    super(props);
  }

  nextItem(carouselIndex, marker) {
    this.refs.carousel.snapToNext(true);
    this.props.setRegion(marker.coordinates);
  }

  _renderItem (marker, index) {
    let user = findUserById(marker.item.userId)
    return (
      <View>
        <Button
        title="NEXT"
        onPress={() => { this.nextItem(this.props.carousel.index, marker.item); }}
        />
        <ProfileModal profile={user}/>
      </View>
    );
  }

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
            onSnapToItem={index=>{this.props.setCarousel({index: index});}}
            autoplay={false}
            enableSnap={true}
            snapOnAndroid={true} //to enable snapping on android
            itemWidth={Dimensions.get('window').width}
            slideStyle={styles.slide} />
      </View>
    );
  }
}

let tempUsers = [];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default ProfileCarousel;
