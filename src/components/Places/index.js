import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import PropTypes from 'prop-types';

export class Places extends Component {
  constructor(props) {
    super(props);
  }

  openSearchModal() {
    RNGooglePlaces.openPlacePickerModal({
      type: 'establishment',
  	  latitude: 45.521371,
      longitude: -122.673168,
  	  radius: 10
    })
    .then((place) => {
		console.log(place);
		// place represents user's selection from the
		// suggestions and it is a simplified Google Place object.
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }

  render() {
    return (
      <TouchableOpacity
        style={staticStyles.touchableContainer}
        onPress={() => this.openSearchModal()}
      >
        <Text style={staticStyles.text}>Find a restaurant</Text>
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
  }
});

export default Places;
