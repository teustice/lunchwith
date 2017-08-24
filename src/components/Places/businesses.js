import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import PropTypes from 'prop-types';

export class Businesses extends Component {
  constructor(props) {
    super(props);
  }

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
      .then((place) => {
  		console.log(place);
      this.props.setBusiness(place);

      })
      .catch(error => console.log(error.message));  // error is a Javascript Error object
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.openSearchModal()}
      >
        <Text>{this.props.company}</Text>
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



export default Businesses;
