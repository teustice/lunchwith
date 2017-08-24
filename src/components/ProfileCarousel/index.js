import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import MarkerCallout from '../MarkerCallout';
import userSeed from '../../lib/seeds/userSeed';
import findUserById from '../../lib/helpers/userById';
import Carousel from 'react-native-snap-carousel';
import Drawer from '../../lib/react-native-bottom-drawer';

export class ProfileCarousel extends Component {
  constructor(props) {
    super(props);
  }
  _renderItem (user, index) {
    // lib/react-native-bottom-drawer to style drawer
    return (
      <View style={styles.contentContainer}>
        <Drawer customStyles={styles.drawer} teaserHeight={200}>
          <Text>{user.item.name}</Text>
        </Drawer>
      </View>
    );
  }

  render() {
    return (
      <View>
         <Carousel
            ref={'carousel'}
            data={this.props.users}
            renderItem={this._renderItem.bind(this)}
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
    marginTop: ((Dimensions.get('window').height) * 9/10),
    minHeight:((Dimensions.get('window').height)*1/4),
  },
	slide: {
    flexDirection: 'column',
    width: Dimensions.get('window').width,
	},
  content: {
  },
  drawer: {
    backgroundColor: 'white'
  }
});

export default ProfileCarousel;
