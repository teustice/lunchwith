import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image } from 'react-native';
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
          {markers.map(marker => (
            <MapView.Marker
              key={marker.id}
              image={require('../../lib/images/dev.png')}
              coordinate={marker.coordinates}
              title={marker.title}
            >
              <MapView.Callout>
                <View
                  style={{
                    height: 100,
                    width: 100,
                  }}
                >
                  <Image
                    source={require('../../lib/images/hass.jpeg')}
                    style={{height: 90, width: 100}}
                  >
                  </Image>
                  <Text style={{color: 'black', alignItems:'center'}}>{marker.title}</Text>
                </View>
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
