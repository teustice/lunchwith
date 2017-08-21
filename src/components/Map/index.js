import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import MapView from 'react-native-maps';

export class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 45.521371,
        longitude: -122.673168,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }
  }

  onRegionChange(region) {
    this.setState({ region });
    console.log(region);
  }

  render() {
    return (
      <View >

        <MapView
          style={staticStyles.map}
          initialRegion={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}
          showsUserLocation={true}
          showsMyLocationButton={true}
        />
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
