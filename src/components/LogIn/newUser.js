import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity, TextInput, View, StyleSheet, Dimensions, Image } from 'react-native';


class NewUser extends Component {
  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={true}
        >
        <View style={staticStyles.container}>
          <View style={staticStyles.modalBackground}>
            <View style={staticStyles.inputContainer}>
              <Text style={staticStyles.label}>Welcome to LunchWith!</Text>
              <TextInput style={staticStyles.input} placeholder="First Name" name="first_name" />
              <TextInput style={staticStyles.input} placeholder="Last Name" name="last_name" />
              <TouchableOpacity>
                <Text style={{color: 'grey'}}>Get Started</Text>
              </TouchableOpacity>
            </View>
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
    height:('40%'),
    width:('80%'), //gap between slides
    marginTop: '40%',
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
    marginBottom: 30
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: ('10%'),
  },
});

export default NewUser;
