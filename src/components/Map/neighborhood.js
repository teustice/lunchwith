import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import mapStyle from '../../lib/mapStyle';

export class Neighborhood extends Component {
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

  renderMarker(){
    return(
      <View>
        <MapView.Circle
          center={this.props.neighborhood}
          radius={this.milesToMeters(this.props.radius)}
          fillColor={'rgba(186,206,220, 0.4)'}
          strokeColor={'rgba(186,206,220, 1)'}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={staticStyles.container}>
        <MapView
          ref={'neighborhood'}
          style={staticStyles.map}
          provider={'google'}
          showsBuildings={false}
          showsTraffic={false}
          showsPointsOfInterest={false}
          region={this.props.neighborhood}
          customMapStyle={mapStyle}
          cacheEnabled={true}
          scrollEnabled={false}
          pitchEnabled={false}
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
    width: (Dimensions.get('window').width * 0.90),
    height: 150,
  },
});

export default Neighborhood;
