import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import MarkerCallout from '../MarkerCallout';
import users from '../../lib/seeds/userSeed';
import findUserById from '../../lib/helpers/userById';
import mapStyle from '../../lib/mapStyle';
import supercluster from 'supercluster';

const pinActive = require('../../lib/images/pinActive.png');
const pin = require('../../lib/images/pin.png');

export class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempMarkers: [],
      activeMarker: {}
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

  findChildren(marker){
    this.props.setActiveMarker(marker);
    if(marker.properties.cluster_id){
      this.props.setClusters(this.state.tempMarkers.getLeaves(marker.properties.cluster_id, this._getZoomLevel()));
    } else if(marker.properties.id){
      this.props.setClusters(marker);
    }
  }

  //returns the alternate pin image for active pin
  isActive(marker) {
    if(marker.properties.id){
      if(marker.properties.id === this.props.activeMarker.properties.id){
        return pinActive;
      } else {
        return pin;
      }
    } else if(marker.properties.cluster_id){
      if(marker.properties.cluster_id === this.props.activeMarker.properties.cluster_id){
        return pinActive;
      } else {
        return pin;
      }
    }
  }

  renderMarkers(marker){
    return(
      <MapView.Marker
        key={marker.properties.id || (`cluster${marker.properties.cluster_id}`)}
        ref={`marker${marker.properties.id}`}
        onPress={e => this.findChildren(marker)}
        coordinate={{latitude: marker.geometry.coordinates[1], longitude: marker.geometry.coordinates[0]}}
      >
        <Image
          source={this.isActive(marker)}
          style={{ height: 25, width: 25 }}
        >
          <Text style={staticStyles.markerText}>{marker.properties.point_count}</Text>
        </Image>
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
          region={this.props.region}
          initialRegion={this.props.initialRegion}
          onRegionChangeComplete={region=>{this.props.setRegion(region);}}
          showsUserLocation={false}
          zoomEnabled={false}
          rotateEnabled={false}
          pitchEnabled={false}
          minZoomLevel={13}
          maxZoomLevel={13}
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
    height: Dimensions.get('window').height + 40,
  },
  markerText: {
    color: 'white',
    marginLeft: 8,
    marginTop: 3,
  }
});

export default Map;
