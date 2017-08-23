import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import user from '../../lib/seeds/profileData';
import findUserById from '../../lib/helpers/userById';
import { staticStyles, dynamicStyles } from './styles';

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
      <View >
        <Image
          source={require('../../lib/images/hass.jpeg')}
          style={staticStyles.calloutImage}
        >
        </Image>
        <Text>{tempUser.name}</Text>
        <Text>{tempUser.company}</Text>
      </View>
    );
  }
}


export default Header;
