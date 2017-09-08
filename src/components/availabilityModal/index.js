import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity, TextInput, View, StyleSheet, Dimensions, Image } from 'react-native';
import userSeed from '../../lib/seeds/userSeed';

class AvailabilityModal extends Component {
  modalContent(){
    return(
      <View style={staticStyles.inputContainer}>

      </View>
    )
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

export default AvailabilityModal;
