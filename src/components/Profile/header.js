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
    let tempUser = findUserById(1);
    return (
      <View>
        <Text style={staticStyles.closeTitle}>{tempUser.name}</Text>
      </View>
    );
  }
}


const staticStyles = StyleSheet.create({
  closeTitle: {
    color: 'white',
    marginTop: 14,
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
  },
});

export default Header;
