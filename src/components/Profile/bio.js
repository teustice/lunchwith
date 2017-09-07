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
    fontSize: 12,
    paddingLeft: 15,
    color: 'grey',

  },
  input: {
    marginHorizontal: 15,
    marginTop: 13,
    borderBottomColor: 'rgb(65,152,240)',
    borderBottomWidth: 0.5,
    color: 'grey',
    fontSize: 12,
    fontFamily: 'ProximaNova-Regular',
  },

  bioExplanation: {
    fontFamily: 'ProximaNova-Regular',
    paddingTop: 5,
    paddingLeft: 15,
    paddingBottom: 20,
    color: 'grey',
    fontSize: 10,
  }
});


export default Bio;
