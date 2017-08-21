import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import MapView from 'react-native-maps';

export class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 45.485346,
        longitude: -122.838571,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };
  }

  changeRegion() {
    this.setState({region: {
      latitude: 46.485346,
      longitude: -122.838571,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }})
  }

  render() {
    return (
      <View >
        <Button
          title="click to go somewhere"
          onPress={this.changeRegion.bind(this)}
        />
        <MapView
          style={staticStyles.map}
          region={this.state.region}
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
