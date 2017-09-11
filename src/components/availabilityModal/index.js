import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity, TextInput, View, StyleSheet, Dimensions, Image } from 'react-native';
import userSeed from '../../lib/seeds/userSeed';

class AvailabilityModal extends Component {
  state = {
    pressedButtons: []
  }

  componentDidUpdate(prevProps, PrevState){
    if(prevProps.currentUser != this.props.currentUser){
      if(this.props.currentUser.name){
        this.setState(this.props.currentUser.availability)
      }
    }
  }

  hideModal(){
    this.props.setAvailabilityModal({isOpen: false});
  }

  buttonPress(time, day){
    let trimmedTime = time.substr(0, time.indexOf('-'));
    let newArray = this.state.pressedButtons.slice();
    let pressedButton = {time: trimmedTime, day: day};
    for(let i=0; i< 20; i++){
      if(this.state.pressedButtons[i]){
        if(this.state.pressedButtons[i].time === trimmedTime && this.state.pressedButtons[i].day === day){
          newArray.splice(i, 1);
          this.setState({ pressedButtons: newArray });
          return 0
        }
      }
    }
    newArray.push(pressedButton);
    this.setState({ pressedButtons: newArray });
  }

  isButtonSelected(time, day){
    let trimmedTime = time.substr(0, time.indexOf('-'));
    for(let i=0; i< 20; i++){
      if(this.state.pressedButtons[i]){
        if(this.state.pressedButtons[i].time === trimmedTime && this.state.pressedButtons[i].day === day){
          return(
            <View style={staticStyles.toggleButtonSelected}>
              <Text style={staticStyles.buttonTimeSelected}>{time}</Text>
            </View>
          )
        }
      } else {
        return(
          <View style={staticStyles.toggleButton}>
            <Text style={staticStyles.buttonTime}>{time}</Text>
          </View>
        )
      }
    }
  }

  toggleButton(time, day){
    return(
      <TouchableWithoutFeedback
        onPress={() => this.buttonPress(time, day)}
      >
        <View>
          {this.isButtonSelected(time, day)}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  buttonRow(day){
    return(
      <View style={staticStyles.buttonRow}>
        <View style={staticStyles.buttonContainer}>
          <Text style={staticStyles.dayText}>{day}</Text>
        </View>
        <View style={staticStyles.buttonContainer}>
          {this.toggleButton("10-11", day)}
        </View>
        <View style={staticStyles.buttonContainer}>
          {this.toggleButton("11-12", day)}
        </View>
        <View style={staticStyles.buttonContainer}>
          {this.toggleButton("12-1", day)}
        </View>
        <View style={staticStyles.buttonContainer}>
          {this.toggleButton("1-2", day)}
        </View>
      </View>
    )
  }

  modalContent(){
    return(
      <View>
        <Text style={{alignSelf:'center', fontSize: 20}}>Set Your Availability</Text>
        <View style={staticStyles.inputContainer}>
            {this.buttonRow("M")}
            {this.buttonRow("T")}
            {this.buttonRow("W")}
            {this.buttonRow("Th")}
            {this.buttonRow("F")}
        </View>
      </View>
    );
  }

  submitAvailability(){
    this.props.setCurrentUser({...this.props.currentUser, availability: this.state.pressedButtons});
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
            <TouchableHighlight onPress={() => this.hideModal()}>
              <Text>X</Text>
            </TouchableHighlight>
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
  modalBackground: {
    height:('85%'),
    width:('80%'), //gap between slides
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
  dayText: {
    color: 'grey',
    fontSize: 20,
  }
});

export default AvailabilityModal;
