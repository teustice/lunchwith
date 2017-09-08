import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity, TextInput, View, StyleSheet, Dimensions, Image } from 'react-native';
import userSeed from '../../lib/seeds/userSeed';

class AvailabilityModal extends Component {
  toggleButton(time){
    return(
      <TouchableHighlight>
        <View style={staticStyles.toggleButton}>
          <Text style={staticStyles.buttonTime}>{time}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  buttonRow(day){
    return(
      <View style={staticStyles.buttonRow}>
        <View style={staticStyles.buttonContainer}>
          <Text style={staticStyles.dayText}>{day}</Text>
        </View>
        <View style={staticStyles.buttonContainer}>
          {this.toggleButton("10")}
        </View>
        <View style={staticStyles.buttonContainer}>
          {this.toggleButton("11")}
        </View>
        <View style={staticStyles.buttonContainer}>
          {this.toggleButton("12")}
        </View>
        <View style={staticStyles.buttonContainer}>
          {this.toggleButton("1")}
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

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={this.props.logInModal}
        >
        <View style={staticStyles.container}>
          <View style={staticStyles.modalBackground}>
            <TouchableHighlight onPress={() => this.hideLogInModal()}>
              <Text>X</Text>
            </TouchableHighlight>
            {this.modalContent()}
            <TouchableHighlight>
              <Text style={staticStyles.label}>Submit</Text>
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
    height:('90%'),
    width:('80%'), //gap between slides
    marginTop: '8%',
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
  label: {
    fontSize: 20,
    color: 'grey',
    alignSelf: 'center',
    marginTop: 15
  },
  toggleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: 'grey',
    backgroundColor: 'white',
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
    marginTop: 12,
    color: 'grey',
    fontSize: 20,
  },
  dayText: {
    color: 'grey',
    marginRight: -15,
    fontSize: 20,
  }
});

export default AvailabilityModal;
