import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity, TextInput, View, StyleSheet, Dimensions, Image } from 'react-native';
import userSeed from '../../lib/seeds/userSeed';

class LogIn extends Component {
  state = {
    phoneNumber: '',
  }
  hideLogInModal(){
    this.props.setLogInModal(false);
  }

  savePhone(phoneNumber){
    this.setState({phoneNumber})
  }

  modalContent(){
    if(this.props.currentUser === 'newUser'){
      return(
        <View style={staticStyles.inputContainer}>
          <Text style={staticStyles.label}>Welcome to LunchWith!</Text>
          <TextInput style={staticStyles.input} autoFocus={true} placeholder="First Name" name="first_name" />
          <TextInput style={staticStyles.input} placeholder="Last Name" name="last_name" />
          <TouchableOpacity>
            <Text style={{color: 'grey'}}>Get Started</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={staticStyles.inputContainer}>
          <Text style={staticStyles.label}>LunchWith</Text>
          <TextInput
            ref={"phoneNumber"}
            style={staticStyles.input}
            autoFocus={true}
            placeholder="Phone Number"
            name="phone_number"
            onChangeText={(phoneNumber) => this.savePhone(phoneNumber)}
          />
          <TouchableOpacity
            onPress={() => this.userCheck()}
          >
            <Text style={{color: 'grey'}}>Log In</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  userCheck() {
    this.refs.phoneNumber.clear();
    for(let i=0; i< userSeed.length; i++){
      if(userSeed[i].phoneNumber === this.state.phoneNumber){
        this.props.setCurrentUser(userSeed[i])
        this.hideLogInModal();
      } else {
        this.props.setCurrentUser('newUser');
      }
    }
  }

  render() {
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={this.props.logInModal}
        >
        <View style={staticStyles.container}>
          <TouchableWithoutFeedback onPress={() => this.hideLogInModal()}>
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
    justifyContent:'center',
    top: 0, left: 0, bottom: 0, right: 0,
    width: '100%',
    height: '100%',
  },
  modalBackground: {
    height:('40%'),
    width:('80%'),
    backgroundColor: 'rgb(255, 255, 255)',
    paddingTop: 40,
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
