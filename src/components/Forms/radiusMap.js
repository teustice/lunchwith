import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import mapStyle from '../../lib/mapStyle';

export class RadiusMap extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    //don't re-render if lunchRadiusMarker is undefined
    //implemented because clicking markers removed them
    if(nextProps.lunchRadiusMarker){
      return true;
    } else {
      return false;
    }
  }

  createMarker(location){
    this.props.setLunchRadiusMarker(location.coordinate)
  }

  renderMarker(){
    console.log('attempting render');
    if(this.props.lunchRadiusMarker && this.props.lunchRadiusMarker.latitude){
      console.log('rendering marker');
      return(
        <View>
          <MapView.Marker
            coordinate={this.props.lunchRadiusMarker}
            title={'lunch spot'}
          />
          <MapView.Circle
            center={this.props.lunchRadiusMarker}
            radius={500}
            fillColor={'rgba(100,100,200, 0.3)'}
          />
        </View>
      );
    }
  }

  render() {
    return (
      <View >
        <MapView
          ref={'map'}
          style={staticStyles.map}
          provider={'google'}
          showsBuildings={false}
          showsTraffic={false}
          showsPointsOfInterest={false}
          initialRegion={this.props.initialRegion}
          showsUserLocation={true}
          customMapStyle={mapStyle}
          onPress={e => this.createMarker(e.nativeEvent)}
        >
        {this.renderMarker()}
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
    height: 200,
  },
});

export default RadiusMap;
