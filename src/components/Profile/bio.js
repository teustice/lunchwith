import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import user from '../../lib/seeds/profileData';
import findUserById from '../../lib/helpers/userById';

export class Bio extends Component {
  constructor(props) {
    super(props);
  }

  onRegionChange(region) {
    this.props.setRegion({ region });
  }

  render() {
    let tempUser = findUserById(1);
    return (
      <View >
        <Text style={staticStyle.bioHeader}>A Little About Yourself</Text>
        <TextInput style={staticStyle.input}></TextInput>
        <Text style={staticStyle.bioExplanation}>This is all about your interests or pet peeves!</Text>
      </View>
    );
  }
}

const staticStyle = StyleSheet.create({
  bioHeader:{
    fontFamily: 'ProximaNova-Regular',
    paddingLeft: 10,
    color: 'grey',
  },
  input: {
    marginHorizontal: 10,
    marginTop: 10,
    borderBottomColor: 'rgb(65,152,240)',
    borderBottomWidth: 1,
  },

  bioExplanation: {
    fontFamily: 'ProximaNova-Regular',
    paddingTop: 5,
    paddingLeft: 10,
    color: 'grey',
    fontSize: 10,
  }
});


export default Bio;
