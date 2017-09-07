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
        <Text style={staticStyle.skillsHeader}>Your Top <Text style={{color: 'rgb(65,152,240)'}}>3 Expertise</Text></Text>
        <Image
          source={require('../../lib/images/skillCircle.png')}
          style={staticStyle.skillImage}
        />
        <Image
          source={require('../../lib/images/skillCircle.png')}
          style={staticStyle.skillImage}
        />
        <Image
          source={require('../../lib/images/skillCircle.png')}
          style={staticStyle.skillImage}
        />
        <Text style={staticStyle.skillsExplanation}>Let people know what you are willing to talk about over lunch!</Text>
      </View>
    );
  }
}

const staticStyle = StyleSheet.create({
  skillsHeader:{
    fontFamily: 'ProximaNova-Regular',
    paddingTop: 20,
    paddingLeft: 15,
    marginBottom: 10,
    color: 'grey',
  },
  skillsExplanation: {
    fontFamily: 'ProximaNova-Regular',
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 20,
    color: 'grey',
    fontSize: 10,
  },
  skillImage: {
    height: 40,
    width: 40,
    marginLeft: 15,
    marginTop: 5,
  }
});


export default Skills;
