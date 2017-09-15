import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, ImageBackground, TouchableOpacity, TouchableHighlight } from 'react-native';
import user from '../../lib/seeds/profileData';
import findUserById from '../../lib/helpers/userById';

export class Availability extends Component {
  constructor(props) {
    super(props);
  }

  formatTime(time){
    let parsedTime = parseInt(time);
    switch(parsedTime){
      case 10:
        return `${time}:00AM to 11:00AM`;
        break;
      case 11:
        return `${time}:00AM to 12:00PM`;
        break;
      case 12:
        return `${time}:00PM to 1:00PM`;
        break;
      case 1:
        return `${time}:00PM to 2:00PM`;
        break;
      case 9:
        return `${time}:00AM to 10:00AM`;
        break;
    }
  }

  formatDay(day){
    switch(day){
      case 'M':
        return `MON`;
        break;
      case 'T':
        return `TUE`;
        break;
      case 'W':
        return `WED`
        break;
      case 'Th':
        return `THU`;
        break;
      case 'F':
        return `FRI`;
        break;
    }
  }

  header(){
    let profile = this.props.profileModal.profile;
    if(this.props.currentUser.name && !this.props.profile){
      return(
        <Text style={staticStyle.skillsHeader}><Text style={{color: 'rgb(65,152,240)', fontFamily: 'ProximaNova-Regular'}}>{profile.availability.length} Available Hours</Text> During the Week</Text>
      )
    } else {
      return(
        <Text style={staticStyle.skillsHeader}>Current Availability</Text>
      );
    }
  }


  button(time){
    let profile = this.props.profileModal.profile;
      if (this.props.currentUser.name && profile && profile.name) {
        return(
          <TouchableOpacity onPress={() => (this.props.navigation.navigate('Lunch', {selectedUser: profile, selectedTime: time}), this.props.setProfileModal({modalVisible: false, profile: {}}))}>
            <Text style={staticStyle.addButton}>Invite</Text>
          </TouchableOpacity>
        );
    } else {
      return null;
      // Take out authorization to speed up development
      // return(
      //   <TouchableOpacity onPress={() => (this.props.navigation.navigate('Lunch', {selectedUser: profile, selectedTime: time}), this.props.setProfileModal({...this.props.profileModal, modalVisible: false}))}>
      //     <Text style={staticStyle.addButton}>Invite</Text>
      //   </TouchableOpacity>
      // );
    }
  }

  availabilitySample(){
    let profile = this.props.profileModal.profile;
    let availabilityList = [];
    for(let i=0; i< profile.availability.length; i++){
      if(i === 3) {
        break;
      } else {
        availabilityList.push(
          <View key={i} style={staticStyle.skillRow}>
            <ImageBackground
              source={require('../../lib/images/skillCircle.png')}
              style={staticStyle.skillImage}
            >
              <Text style={staticStyle.skillNumber}>
                {this.formatDay(profile.availability[i].day)}
              </Text>
            </ImageBackground>
            <Text style={staticStyle.skillName}>
              {this.formatTime(profile.availability[i].time)}
            </Text>

            {this.button(profile.availability[i])}

          </View>
        )
      }
    }
    return availabilityList;
  }

  bottomText(){
    let profile = this.props.profileModal.profile;
    if (this.props.currentUser.name && !profile) {
      return(
        <Text style={staticStyle.skillsExplanation}>Let people know when you are willing to talk about over lunch!</Text>
      )
    } else if (this.props.currentUser.name && profile.name) {
      return <Text></Text>;
    } else {
      return(
        <Text style={staticStyle.skillsExplanation}>Log in to invite {profile.name} to lunch!</Text>
      )
    }
  }

  renderUpdateButton(){
    let profile = this.props.profileModal.profile;
    if(!profile){
      return(
        <TouchableHighlight onPress={() => this.props.setAvailabilityModal({isOpen: true})}>
          <Text style={staticStyle.updateButton}>Update</Text>
        </TouchableHighlight>
      )
    }
  }

  render() {
    console.log("AVAILABILITY RENDER");
    return (
      <View >
        {this.header()}
        {this.availabilitySample()}
        {this.renderUpdateButton()}
        {this.bottomText()}
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
    alignSelf: 'center',
    marginTop: '40%',
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
    marginTop: '-7.5%',
    // justifyContent: 'center',
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
    marginTop: -30,
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
