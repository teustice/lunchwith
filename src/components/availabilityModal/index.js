import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity, TextInput, View, StyleSheet, Dimensions, Image, Switch, ScrollView } from 'react-native';
import userSeed from '../../lib/seeds/userSeed';

class AvailabilityModal extends Component {
  dayCodes(day){
    switch(day){
      case 'Monday':
        return 'M';
        break;
      case 'Tuesday':
        return 'T';
        break;
      case 'Wednesday':
        return 'W';
        break;
      case 'Thursday':
        return 'Th';
        break;
      case 'Friday':
        return 'F';
        break;
    }
  }

  displayTime(time){
    switch(time){
      case '9':
        return '9:00AM';
        break;
      case '10':
        return '10:00AM';
        break;
      case '11':
        return '11:00AM';
        break;
      case '12':
        return '12:00PM';
        break;
      case '1':
        return '1:00PM';
        break;
    }
  }

  hideModal(){
    this.props.setAvailabilityModal({isOpen: false});
  }

  switchPress(value, day, time){
    if(this.props.currentUser.name){
      if(value === false || (!(this.props.currentUser.availability.length >= 3))){
        let newAvailability = this.props.currentUser.availability.slice();
        if(value){
          newAvailability.push({time: time, day: day});
          this.props.setCurrentUser({...this.props.currentUser, availability: newAvailability});
        } else {
          for(let i=0; i<newAvailability.length; i++){
            // console.log(`user:${availability[i].time} | time: ${time}`);
            if(newAvailability[i].time == time && newAvailability[i].day == day){
              newAvailability.splice(i, 1);
              this.props.setCurrentUser({...this.props.currentUser, availability: newAvailability});
              return 0
            }
          }
        }
      }
    }
  }

  isPressed(day, time){
    if(this.props.currentUser.name){
      // let availability = this.props.currentUser.availability;
      for(let i=0; i<this.props.currentUser.availability.length; i++){
        // console.log(`user:${availability[i].time} | time: ${time}`);
        if(this.props.currentUser.availability[i].time == time && this.props.currentUser.availability[i].day == this.dayCodes(day)){
          return true;
        }
      }
      return false;
    }
  }

  renderSwitch(day, time){
    return(
      <View style={{marginRight: '7%'}}>
        <Switch
          value={this.isPressed(day,time)}
          onTintColor={'rgb(65,152,240)'}
          onValueChange={(value) => this.switchPress(value, this.dayCodes(day), time)}
        />
      </View>
    )
  }

  section(day){
    return(
      <View style={{flex: 1}}>
        <View style={staticStyles.dayBanner}>
          <Text style={staticStyles.dayText}>{day}</Text>
        </View>
        <View style={staticStyles.timeEntry}>
          <Text style={staticStyles.timeText}>9:00AM - 10:00AM</Text>
          {this.renderSwitch(day, '9')}
        </View>
        <View style={staticStyles.timeEntry}>
          <Text style={staticStyles.timeText}>10:00AM - 11:00AM</Text>
          {this.renderSwitch(day, '10')}
        </View>
        <View style={staticStyles.timeEntry}>
          <Text style={staticStyles.timeText}>11:00AM - 12:00PM</Text>
          {this.renderSwitch(day, '11')}
        </View>
        <View style={staticStyles.timeEntry}>
          <Text style={staticStyles.timeText}>12:00PM - 1:00PM</Text>
          {this.renderSwitch(day, '12')}
        </View>
        <View style={staticStyles.timeEntry}>
          <Text style={staticStyles.timeText}>1:00PM - 2:00PM</Text>
          {this.renderSwitch(day, '1')}
        </View>
      </View>
    )
  }

  removeTagPress(day, time){
    let newAvailability = this.props.currentUser.availability.slice();
    for(let i=0; i<newAvailability.length; i++){
      if(newAvailability[i].day == day && newAvailability[i].time == time){
        newAvailability.splice(i, 1);
        this.props.setCurrentUser({...this.props.currentUser, availability: newAvailability});
      }
    }
  }

  renderTags(){
    if(this.props.currentUser.name){
      let availability = this.props.currentUser.availability.slice();
      let content = [];
      for(let i=0; i<availability.length; i++){
        content.push(
          <View key={i} style={staticStyles.bubble}>
            <Text style={staticStyles.bubbleText}>{availability[i].day} - {this.displayTime(availability[i].time)}</Text>
            <TouchableHighlight
              style={staticStyles.tagDelete}
              underlayColor={'rgb(65,152,240)'}
              onPress={() => this.removeTagPress(availability[i].day, availability[i].time)}
            >
              <Text style={staticStyles.tagX}>x</Text>
            </TouchableHighlight>
          </View>
        )
      }
      return content;
    }
  }


  modalContent(){
    return(
      <View>
        <View style={staticStyles.header}>
          <Text style={{alignSelf:'center', fontSize: 20, color: 'white'}}>Availability</Text>
        </View>
        <View style={staticStyles.subTextContainer}>
          <Text style={staticStyles.subText}>{`Select up to 3 times that you would like to have lunch`}</Text>
        </View>
        <View style={staticStyles.tagBubbles}>
          {this.renderTags()}
        </View>
        <ScrollView style={staticStyles.inputContainer}>
            {this.section("Monday")}
            {this.section("Tuesday")}
            {this.section("Wednesday")}
            {this.section("Thursday")}
            {this.section("Friday")}
        </ScrollView>
      </View>
    );
  }

  render() {
    return (
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.props.availabilityModal.isOpen}
          >

          <View style={staticStyles.container}>
          <TouchableWithoutFeedback onPress={() => this.hideModal()}>
            <View style={staticStyles.container}></View>
          </TouchableWithoutFeedback>
            <View style={staticStyles.modalBackground}>
              {this.modalContent()}
            </View>
          </View>
        </Modal>
    );
  }
}

const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(80, 80, 80, 0.3)',
    shadowColor: 'rgb(150,150,150)',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
    width: '100%',
    height: '100%',
  },
  dayBanner: {
    marginTop: 30,
    width: '100%',
    height: 30,
    backgroundColor: 'rgb(65,152,240)',
  },
  inputContainer: {
    height: '69%',
    width: '100%',
  },
  tagBubbles: {
    height: 50,
    flexDirection: 'row',
    marginLeft: '7%',
    marginTop: 15,
  },
  bubble: {
    borderWidth: 0.5,
    height: 25,
    padding: 5,
    marginRight: 5,
    borderRadius: 20,
    justifyContent:'center',
    flexDirection: 'row',
    borderColor: 'rgb(65,152,240)',
  },
  bubbleText: {
    color: 'rgb(65,152,240)',
    fontFamily:'ProximaNova-Regular',
    marginTop: 2,
    marginLeft: 2,
    fontSize: 12,
  },
  tagDelete: {
    width:18,
    height:18,
    marginLeft: 10,
    marginRight: -1,
    marginTop: -2,
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: 'rgb(65,152,240)',
    // justifyContent:'center',
  },
  tagX: {
    // justifyContent:'center',
    alignSelf:'center',
    color: 'rgb(65,152,240)',
    fontFamily:'ProximaNova-Regular',
  },
  subText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 20,
    height: 20,
    // marginLeft: '5%',
  },
  subTextContainer: {
    marginTop: 10,
    width: '85%',
    marginLeft: '7%',
  },
  header: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'rgb(65,152,240)',
  },
  timeEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  timeText: {
    marginLeft: '8%',
    marginTop: 10,
    fontFamily: 'ProximaNova-Regular',
  },
  dayText: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 18,
    marginLeft: '8%',
    marginTop: 6,
    color: 'white',
    justifyContent: 'center'
  },
  modalBackground: {
    height:('85%'),
    width:('95%'), //gap between slides
    marginTop: '10%',
    backgroundColor: 'rgb(255, 255, 255)',
    elevation: 1,
  },
  input: {
    fontSize: 15,
    width: Dimensions.get('window').width * 1/2,
    paddingBottom: 5,
    borderBottomWidth: 1,
    marginBottom: 20,
    borderColor: 'grey',
    alignSelf: 'center'
  },
  submitButton: {
    fontSize: 20,
    color: 'grey',
    alignSelf: 'center',
    marginTop: 23
  },
  toggleButton: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: 'rgb(65,152,240)',
    backgroundColor: 'white',
  },
  toggleButtonSelected: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: 'rgb(65,152,240)',
    backgroundColor: 'rgb(65,152,240)',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 35,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topBorder: {
    borderTopWidth: 1,
    borderColor: 'grey',
    width: '30%',
    alignSelf: 'center'
  },
  buttonTime: {
    alignSelf: 'center',
    marginTop: 15,
    color: 'rgb(65,152,240)',
    fontSize: 14,
  },
  buttonTimeSelected: {
    alignSelf: 'center',
    marginTop: 15,
    color: 'white',
    fontSize: 14,
  },
  absolute: {
    backgroundColor: 'rgba(0,0,0,0)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
});

export default AvailabilityModal;
