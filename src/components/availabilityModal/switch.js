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

  hideModal(){
    this.props.setAvailabilityModal({isOpen: false});
  }

  switchPress(value, day, time){
    if(this.props.currentUser.name){
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
            console.log(newAvailability);
            return 0
          }
        }
      }
      console.log(newAvailability);
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
      <View style={{marginRight: '10%'}}>
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

  modalContent(){
    return(
      <View>
      <View style={staticStyles.header}>
        <Text style={{alignSelf:'center', fontSize: 20, color: 'white'}}>Availability</Text>
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

  submitAvailability(){
    this.hideModal();
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={this.props.availabilityModal.isOpen}
        >
        <View style={staticStyles.container}>
          <View style={staticStyles.modalBackground}>
            {this.modalContent()}
            <TouchableHighlight
              onPress={() => this.submitAvailability()}
            >
              <Text style={staticStyles.submitButton}>Submit</Text>
            </TouchableHighlight>
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
    marginTop: 10,
    marginLeft: '2%',
    width: '95%',
    height: 25,
    borderBottomWidth: 0.5,
    borderColor: 'rgb(65,152,240)',
  },
  inputContainer: {
    height: '80%',
    width: '100%',
  },
  header: {
    width: '100%',
    height: 50,
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
    marginLeft: '6%',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 18,
    color: 'grey',
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
    marginTop: 30
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
});

export default AvailabilityModal;
