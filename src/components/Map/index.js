import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import MarkerCallout from '../MarkerCallout';
import users from '../../lib/seeds/userSeed';
import findUserById from '../../lib/helpers/userById';
import mapStyle from '../../lib/mapStyle';
import supercluster from 'supercluster';

export class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempMarkers: []
    }
  }

  _createCluster(data) {
    const index = supercluster({
      radius: 60,
      maxZoom: 15, // Default: 16
      nodeSize: 128,
    });
    index.load(data.features);
    return index;
  }

  //Convert to GeoJSON
  _convertPoints(data) {
    const results = {
      type: 'MapCollection',
      features: [],
    };
    data.map((value, key) => {
      array = {
        type: 'Map',
        properties: {
          id: value.id,
          userId: value.userId,
          carouselId: value.carouselId,
          lat_x: value.coordinates.latitude,
          long_x: value.coordinates.longitude,
        },
        geometry: {
          type: 'Point',
          coordinates: [
            value.coordinates.longitude,
            value.coordinates.latitude,
          ],
        },
      };
      results.features.push(array);
    });
    return results;
  }

  _getZoomLevel(region = this.props.region) {
    const angle = region.longitudeDelta;
    const level = Math.round(Math.log(360 / angle) / Math.LN2);
    return level;
  }


  _createRegions() {
    const padding = 0;
    const markers = this.state.tempMarkers.getClusters([
      this.props.region.longitude - (this.props.region.longitudeDelta * (0.5 + padding)),
      this.props.region.latitude - (this.props.region.latitudeDelta * (0.5 + padding)),
      this.props.region.longitude + (this.props.region.longitudeDelta * (0.5 + padding)),
      this.props.region.latitude + (this.props.region.latitudeDelta * (0.5 + padding)),
    ], this._getZoomLevel());
    return markers.map(marker => this.renderMarkers(marker));
  }

  // componentDidUpdate(prevProps, prevState){
  //   //only animate region change if the carousel has moved
  //   if(prevProps.carousel.index != this.props.carousel.index) {
  //     if(this.props.carousel.regionAnimation === false){
  //       console.log('no animation');
  //     } else {
  //       //manually trigger callout for carousel change
  //       this.showCallout();
  //       this.refs.map.animateToRegion(this.props.region, 350);
  //     }
  //   }
  // }

  // showCallout(){
  //   let refArray = Object.entries(this.refs);
  //   if(refArray.length >= this.props.markers.length){
  //     for(let i=0; i < refArray.length; i++){
  //       //only access marker refs, and compare to current region
  //       if(refArray[i][1].props.coordinate && refArray[i][1].props.coordinate === this.props.region){
  //         refArray[i][1].showCallout();
  //       }
  //     }
  //   }
  // }

  renderMarkers(marker){
    console.log(marker);
    return(
        <MapView.Marker
          key={marker.properties.id || (marker.properties.cluster_id + 100000)}
          ref={`marker${marker.properties.id}`}
          image={require('../../lib/images/pin.png')}
          coordinate={{latitude: marker.geometry.coordinates[1], longitude: marker.geometry.coordinates[0]}}
          onPress={(event) => {this.props.setCarousel({index: marker.properties.carouselId, regionAnimation: false})}}
        >
        <Text style={staticStyles.markerText}>{marker.properties.point_count}</Text>
        </MapView.Marker>
    )
  }

  render() {
    let convertedMarkers = this._convertPoints(this.props.markers)
    this.state.tempMarkers = this._createCluster(convertedMarkers);
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
          onRegionChangeComplete={region=>{this.props.setRegion(region);}}
          showsUserLocation={true}
          customMapStyle={mapStyle}
        >
        {this._createRegions()}
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
    height: Dimensions.get('window').height,
  },
  markerText: {
    color: 'white',
    marginLeft: 8,
    marginTop: 3,
  }
});

export default Map;
