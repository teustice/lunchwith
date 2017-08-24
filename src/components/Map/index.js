import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import MarkerCallout from '../MarkerCallout';
import users from '../../lib/seeds/userSeed';
import findUserById from '../../lib/helpers/userById';
import ProfileCarousel from '../../components/ProfileCarousel';

export class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tempUser = {}
    return (
      <View >

        <MapView
          style={staticStyles.map}
          provider={'google'}
          showsBuildings={false}
          showsTraffic={false}
          showsPointsOfInterest={false}
          initialRegion={this.props.initialRegion}
          onRegionChangeComplete={region=>{this.props.setRegion({region});}}
          showsUserLocation={true}
        >
          {this.props.markers.map(marker => (
            tempUser = findUserById(marker.userId),
            <MapView.Marker
              key={marker.id}
              image={require('../../lib/images/pin.png')}
              coordinate={marker.coordinates}
              title={tempUser.name}
            >
              <MapView.Callout>
                <MarkerCallout calloutTitle={tempUser.name} profileImage={tempUser.profileImage}/>
              </MapView.Callout>
            </MapView.Marker>
          ))}

        </MapView>
        <ProfileCarousel firstItem={2}/>
      </View>
    );
  }
}


const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height),
    position: 'absolute',
         top: 0,
         bottom: 0,
         left: 0,
         right: 0,
  },

});

export default Map;
