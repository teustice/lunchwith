import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import user from '../../lib/seeds/profileData';
import findUserById from '../../lib/helpers/userById';

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  onRegionChange(region) {
    this.props.setRegion({ region });
  }

  render() {
    return (
      <View>
        <Text style={staticStyles.closeTitle}>{this.props.profile.name}</Text>
      </View>
    );
  }
}


const staticStyles = StyleSheet.create({
  closeTitle: {
    color: 'white',
    marginTop: 8,
    paddingTop: 8,
    marginBottom: -3,
    fontFamily: 'ProximaNova-Regular',
    fontSize: 20,
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
  },
});

export default Header;
