import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, Dimensions, Image } from 'react-native';

class ProfileModal extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <TouchableHighlight onPress={() => {
        this.setModalVisible(true)
      }}>
        <View style={staticStyles.modalBackground}>
          <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
            <View style={staticStyles.closeModal}>
              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Image
                  source={require('../../lib/images/close-button.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableHighlight>
            </View>
           <View style={staticStyles.container}>
            <View style={staticStyles.content}>
              <Text>{this.props.profile.name}</Text>
              <Image
                style={staticStyles.profileImage}
                source={{uri: this.props.profile.profileImage}}
              />
            </View>
           </View>
          </Modal>
          <View>
            <Text>{this.props.profile.name}</Text>
            <Text>{this.props.profile.company}</Text>

          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)'
  },
  modalBackground: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 50,
    height:((Dimensions.get('window').height)*1/10),
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  content: {
    alignItems: 'center'
  },
  closeModal: {
    marginTop: 30,
    marginRight: 10,
    alignSelf: 'flex-end',
  }
});

export default ProfileModal;
