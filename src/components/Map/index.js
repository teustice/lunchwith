import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import MarkerCallout from '../MarkerCallout';
import users from '../../lib/seeds/userSeed';
import findUserById from '../../lib/helpers/userById';

export class Map extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let tempUser = {}
    return (
      <View >
        <MapView
          provider={'google'}
          style={staticStyles.map}
          initialRegion={{
            latitude: 45.521371,
            longitude: -122.673168,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          onRegionChange={region=>{this.props.setRegion({region});}}
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
    height: (Dimensions.get('window').height)
  }
});

export default Map;
