import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import user from '../../lib/seeds/profileData';
import findUserById from '../../lib/helpers/userById';

export class Availability extends Component {
  constructor(props) {
    super(props);
  }

  onRegionChange(region) {
    this.props.setRegion({ region });
  }

  availabilityLength(){
    return this.props.currentUser.availability.length
  }

  availabilitySample(){
    let availabilityList = [];
    for(let i=0; i<this.props.currentUser.availability.length; i++){
      if(i === 3) {
        break;
      } else {
        availabilityList.push(
          <View style={staticStyle.skillRow}>
            <Image
              source={require('../../lib/images/skillCircle.png')}
              style={staticStyle.skillImage}
            />
            <Text style={staticStyle.skillNumber}>{this.props.currentUser.availability[i].day}</Text>
            <Text style={staticStyle.skillName}>{this.props.currentUser.availability[i].time}</Text>
            <Text style={staticStyle.updateButton}>Update</Text>
          </View>
        )
      }
    }
    return availabilityList;
  }

  render() {
    return (
      <View >
        <Text style={staticStyle.skillsHeader}><Text style={{color: 'rgb(65,152,240)', fontFamily: 'ProximaNova-Regular'}}>{this.availabilityLength()} Available Hours</Text> During the Week</Text>
        {this.availabilitySample()}
        <Text style={staticStyle.skillsExplanation}>Let people know when you are willing to talk about over lunch!</Text>
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
    paddingLeft: 24,
    fontFamily: 'ProximaNova-Regular',
    fontSize: 10,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  skillNumberB: {
    marginTop: -25.5,
    paddingRight: 40,
    paddingLeft: 27,
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
  },
  updateButton: {
    height: 30,
    width: 70,
    color: 'rgb(65,152,240)',
    borderWidth: 0.5,
    borderColor: 'rgb(65,152,240)',
    marginTop: -22,
    alignSelf: 'flex-end',
    marginRight: 15,
    textAlign: 'center',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 12,
    paddingTop: 10,
  },
  addButton: {
    height: 30,
    width: 70,
    color: 'white',
    backgroundColor: 'rgb(65,152,240)',
    borderWidth: 0.5,
    borderColor: 'rgb(65,152,240)',
    marginTop: -22,
    alignSelf: 'flex-end',
    marginRight: 15,
    textAlign: 'center',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 12,
    paddingTop: 10,
  }
});


export default Availability;
