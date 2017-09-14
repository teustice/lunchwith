import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import mapStyle from '../../lib/mapStyle';

export class RadiusMap extends Component {
  state = {
    defaultLocation: {
      latitude: 45.521371,
      longitude: -122.673168,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }
  }
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    //set map to users location on mount
    this.refs.radiusMap.animateToRegion(this.state.defaultLocation, 250);
  }

  removeUserMarker(){
    let newMarkers = this.props.markers.slice();
    for(let i=0; i<newMarkers.length; i++){
      if(newMarkers[i].userId == this.props.currentUser.id ){
        newMarkers.splice(i, 1);
      }
    }
    return newMarkers;
  }

  findMarker(){
    for(let i=0; i<this.props.markers.length; i++){
      if(this.props.markers[i].userId === this.props.currentUser.id ){
        return this.props.markers[i].coordinates;
      }
    }
    return false;
  }

  createMarker(location){
    let newMarkers = [];
    newMarkers = this.removeUserMarker();
    let fullLocation = location.coordinate
    fullLocation['latitudeDelta'] = 0.01;
    fullLocation['longitudeDelta'] = 0.01;
    let tempId = `999${this.props.currentUser.id}`
    newMarkers.push({
      id: tempId,
      userId: this.props.currentUser.id,
      coordinates: fullLocation
    });
    this.props.setMarkers(newMarkers);
  }

  milesToMeters(num){
    parsedNum = parseFloat(num);
    return (parsedNum * 1609.344);
  }

  renderMarker(){
    if(this.findMarker()){
      return (
        <View>
          <MapView.Circle
            center={this.findMarker()}
            radius={this.milesToMeters(this.props.currentUser.lunchRadius)}
            fillColor={'rgba(186,206,220, 0.4)'}
            strokeColor={'rgba(186,206,220, 1)'}
          />
        </View>
      )
    }
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
    padding: 10,
  },
  map: {
    width: '100%',
    height: (Dimensions.get('window').height * 1/3),
  },
});

export default RadiusMap;
