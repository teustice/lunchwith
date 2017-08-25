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
  _renderItem (marker, index) {
    let user = findUserById(marker.item.userId)
    return (
      <View style={styles.contentContainer}>
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
            renderItem={this._renderItem}
            sliderWidth={Dimensions.get('window').width}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={(this.props.firstItem) - 1}
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
ProfileCarousel.defaultProps = {
  users: userSeed,
};

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
  contentContainer:{
  },
	slide: {
    flexDirection: 'column',
    width: Dimensions.get('window').width,
	},
  content: {
  }

});

export default ProfileCarousel;
