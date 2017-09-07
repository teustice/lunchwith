import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity, TextInput, View, StyleSheet, Dimensions, Image } from 'react-native';


class LogIn extends Component {

  state = {
    modalVisible: true,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={this.state.modalVisible}
        >
        <View style={staticStyles.container}>
          <View style={staticStyles.modalBackground}>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>X</Text>
            </TouchableHighlight>
            <View style={staticStyles.inputContainer}>
              <Text style={staticStyles.label}>Lunch With</Text>
              <TextInput style={staticStyles.input} placeholder="Phone Number" name="phone_number" />
              <TextInput style={staticStyles.input} placeholder="Password" name="password" />
              <TouchableOpacity>
                <Text style={{color: 'grey'}}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop: 10,}}>
                <Text style={{color: 'grey'}}>Sign Up</Text>
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

export default LogIn;
