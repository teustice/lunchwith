import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import PropTypes from 'prop-types';

export class Restaurants extends Component {
 constructor(props) {
   super(props);
 }

 openSearchModal() {
   RNGooglePlaces.openAutocompleteModal({
     type: 'establishment',
     country: 'USA',
     latitude: 55.544389,
     longitude: -121.490927,
     radius: 10
   })
     .then((place) => {
 		console.log(place);
     return place;
 		// place represents user's selection from the
 		// suggestions and it is a simplified Google Place object.
     })
     .catch(error => console.log(error.message));  // error is a Javascript Error object
 }

 render() {
   return (
     <TouchableOpacity
       onPress={() => this.openSearchModal()}
     >
       <Text style={staticStyles.header}>Suggest <Text style={{color: 'rgb(65,152,240)', fontFamily: 'ProximaNova-Bold'}}>3</Text> Locations near {this.props.profile.name}</Text>
     </TouchableOpacity>
   );
 }
}

const staticStyles = StyleSheet.create({
 touchableContainer: {
   height: 50,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#1c2833'
 },
 text: {
   color: 'white',
 },
 header:{
   fontFamily: 'ProximaNovaT-Thin',
   fontSize: 12,
   paddingTop: 20,
   paddingLeft: 15,
   marginBottom: 10,
   color: 'rgb(10,10,10)',
 },
});

export default Restaurants;
