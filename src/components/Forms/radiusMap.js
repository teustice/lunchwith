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

  milesToMeters(num){
    parsedNum = parseFloat(num);
    return (parsedNum * 1609.344);
  }

  calculateCenter(){
    if(this.props.lunchRadiusMarker.latitude){
      return this.props.lunchRadiusMarker;
    } else {
      return this.props.initialRegion;
    }
  }

  renderMarker(){
    return(
      <View>
        <MapView.Circle
          center={this.calculateCenter()}
          radius={this.milesToMeters(this.props.lunchRadiusSlider)}
          fillColor={'rgba(186,206,220, 0.4)'}
          strokeColor={'rgba(186,206,220, 1)'}
        />
      </View>
    );
  }

  render() {
    return (
      <View >
        <MapView
          ref={'radiusMap'}
          style={staticStyles.map}
          provider={'google'}
          showsBuildings={false}
          showsTraffic={false}
          showsPointsOfInterest={false}
          zoomEnabled={false}
          rotateEnabled={false}
          pitchEnabled={false}
          minZoomLevel={13}
          maxZoomLevel={13}
          initialRegion={this.props.initialRegion}
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
    height: (Dimensions.get('window').height * 2/4),
  },
});

export default RadiusMap;
