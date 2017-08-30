import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import MarkerCallout from '../MarkerCallout';
import users from '../../lib/seeds/userSeed';
import findUserById from '../../lib/helpers/userById';
import mapStyle from '../../lib/mapStyle';

export class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState){
    //only animate region change if the carousel has moved
    if(prevProps.carousel.index != this.props.carousel.index) {
      if(this.props.carousel.regionAnimation === false){
        console.log('no animation');
      } else {
        //manually trigger callout for carousel change
        this.showCallout();
        this.refs.map.animateToRegion(this.props.region, 350);
      }
    }
  }

  showCallout(){
    let refArray = Object.entries(this.refs);
    if(refArray.length >= this.props.markers.length){
      for(let i=0; i < refArray.length; i++){
        //only access marker refs, and compare to current region
        if(refArray[i][1].props.coordinate && refArray[i][1].props.coordinate === this.props.region){
          refArray[i][1].showCallout();
        }
      }
    }
  }

  render() {
    let tempUser = {};
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
          {this.props.markers.map(marker => (
            tempUser = findUserById(marker.userId),
            <MapView.Marker
              key={marker.id}
              ref={`marker${marker.id}`}
              image={require('../../lib/images/pin.png')}
              coordinate={marker.coordinates}
              title={tempUser.name}
              onPress={(event) => {this.props.setCarousel({index: marker.carouselId, regionAnimation: false})} }
            >
              <MapView.Callout>
                <MarkerCallout calloutTitle={tempUser.name} profileImage={tempUser.profileImage}/>
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
    height: Dimensions.get('window').height,
  },
});

export default Map;
