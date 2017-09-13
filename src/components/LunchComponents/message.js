import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import user from '../../lib/seeds/profileData';
import findUserById from '../../lib/helpers/userById';

export class Message extends Component {
  constructor(props) {
    super(props);
  }

  // onRegionChange(region) {
  //   this.props.setRegion({ region });
  // }
  //
  // updateBio(bio){
  //   this.props.setCurrentUser({...this.props.currentUser, bio: bio})
  // }

  render() {
    return (
      <View >
        <Text style={staticStyle.bioHeader}>Say hi to {this.props.profile.name}!</Text>
        <TextInput style={staticStyle.input}

        />
        <Text style={staticStyle.bioExplanation}>You can make a great impression here!</Text>
      </View>
    );
  }
}

const staticStyle = StyleSheet.create({
  bioHeader:{
    fontFamily: 'ProximaNovaT-Thin',
    marginTop: -5,
    backgroundColor: 'rgba(255,255,255,0)',
    fontSize: 12,
    paddingLeft: 15,
    color: 'rgb(10,10,10)',
    // fontWeight: '300',

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


export default Message;
