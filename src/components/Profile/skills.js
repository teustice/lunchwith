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
        <Text style={staticStyle.skillsHeader}>Your Top <Text style={{color: 'rgb(65,152,240)', fontFamily: 'ProximaNova-Regular'}}>3 Expertise</Text></Text>
        <View style={staticStyle.skillRow}>
        <Image
          source={require('../../lib/images/skillCircle.png')}
          style={staticStyle.skillImage}
        />
        <Text style={staticStyle.skillNumber}>1</Text>
        <Text style={staticStyle.skillName}>Skill 1</Text>
        </View>
        <View style={staticStyle.skillRow}>
        <Image
          source={require('../../lib/images/skillCircle.png')}
          style={staticStyle.skillImage}
        />
        <Text style={staticStyle.skillNumberB}>2</Text>
        <Text style={staticStyle.skillName}>Skill 2</Text>
        </View>
        <View style={staticStyle.skillRow}>
        <Image
          source={require('../../lib/images/skillCircle.png')}
          style={staticStyle.skillImage}
        />
        <Text style={staticStyle.skillNumberB}>3</Text>
        <Text style={staticStyle.skillName}>- - - -</Text>
        </View>
        <Text style={staticStyle.skillsExplanation}>Let people know what you are willing to talk about over lunch!</Text>
      </View>
    );
  }
}

const staticStyle = StyleSheet.create({
  skillsHeader:{
    fontFamily: 'ProximaNovaT-Thin',
    fontSize: 12,
    paddingTop: 20,
    paddingLeft: 15,
    marginBottom: 10,
    color: 'rgb(10,10,10)',
  },
  skillImage: {
    height: 40,
    width: 40,
    marginLeft: 15,
  },
  skillRow: {
    height: 40,
    width: '100%',
    marginTop: 5,
  },
  skillsExplanation: {
    fontFamily: 'ProximaNova-Regular',
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 20,
    color: 'grey',
    fontSize: 10,
  },
  skillNumber: {
    marginTop: -25.5,
    paddingRight: 40,
    paddingLeft: 32.5,
    fontFamily: 'ProximaNova-Regular',
    fontSize: 10,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  skillNumberB: {
    marginTop: -25.5,
    paddingRight: 40,
    paddingLeft: 32,
    fontFamily: 'ProximaNova-Regular',
    fontSize: 10,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  skillName: {
    marginTop: -13,
    paddingLeft: 65,
    backgroundColor: 'rgba(255,255,255,0)',
    color:'rgb(10,10,10)',
    fontFamily: 'ProximaNovaT-Thin',
    fontSize: 12,
  }
});


export default Skills;
