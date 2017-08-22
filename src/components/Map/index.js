import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import markers from '../../lib/mapSeed';
import MarkerCallout from '../MarkerCallout';
import RNGooglePlaces from 'react-native-google-places';

export class Map extends Component {
  constructor(props) {
    super(props);
  }

  openSearchModal() {
    RNGooglePlaces.openPlacePickerModal({
      type: 'establishment',
  	  latitude: 45.521371,
      longitude: -122.673168,
  	  radius: 10
    })
    .then((place) => {
		console.log(place);
		// place represents user's selection from the
		// suggestions and it is a simplified Google Place object.
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }

  onRegionChange(region) {
    this.props.setRegion({ region });
    console.log(region);
  }

  render() {
    return (
      <View >
        <TouchableOpacity
          style={{height: 50}}
          onPress={() => this.openSearchModal()}
        >
          <Text>Pick a Place</Text>
        </TouchableOpacity>
        <MapView
          style={staticStyles.map}
          initialRegion={{
            latitude: 45.521371,
            longitude: -122.673168,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          onRegionChange={this.onRegionChange.bind(this)}
          showsUserLocation={true}
        >
          {markers.map(marker => (
            <MapView.Marker
              key={marker.id}
              image={require('../../lib/images/dev.png')}
              coordinate={marker.coordinates}
              title={marker.title}
            >
              <MapView.Callout>
                < MarkerCallout calloutTitle={marker.title}/>
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
    height: Dimensions.get('window').height
  }
});

export default Map;
