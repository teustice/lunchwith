import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import MapView from 'react-native-maps';
import markers from '../../lib/mapSeed';

export class Map extends Component {
  constructor(props) {
    super(props);
  }

  onRegionChange(region) {
    this.props.setRegion({ region });
    console.log(region);
  }

  render() {
    return (
      <View >
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
        {console.log(markers)}
          {markers.map(marker => (
            <MapView.Marker
              key={marker.key}
              coordinate={marker.coordinates}
              title={marker.title}
            />
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
