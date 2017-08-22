import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
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
        style={{height: 50}}
        onPress={() => this.openSearchModal()}
      >
        <Text>Pick a Place</Text>
      </TouchableOpacity>
    );
  }
}

export default Places;
