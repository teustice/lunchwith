import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import user from '../../lib/seeds/profileData';
import findUserById from '../../lib/helpers/userById';

export class Skills extends Component {
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
        <Text style={staticStyle.bioHeader}>Show me some skills</Text>
      </View>
    );
  }
}

const staticStyle = StyleSheet.create({
  bioHeader:{
    fontFamily: 'ProximaNova-Regular',
    paddingLeft: 10,
    color: 'grey',
  }
});


export default Skills;
