import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableWithoutFeedback, View, StyleSheet, Dimensions, Image } from 'react-native';

class ProfileModal extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.setModalVisible(true)
        }}
      >
        <View style={staticStyles.modalBackground}>
          <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.modalVisible}
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

          <View style={staticStyles.profileSnippet}>
            <Text style={staticStyles.profileName}>{this.props.profile.name}</Text>
            <Text style={staticStyles.jobTitle}>{this.props.profile.jobTitle}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    marginBottom: 30,
    marginLeft: -((Dimensions.get('window').width)*0.3/10),
    height:((Dimensions.get('window').height)*2/10),
    width:((Dimensions.get('window').width)*7.8/10), //gap between slides
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 4,
    shadowColor: 'rgb(150,150,150)',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  content: {
  },
  closeModal: {
    marginTop: 30,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  profileName:{
    fontSize: 18,
    paddingTop:10,
  },
  jobTitle:{
    color: 'grey',
  },
  profileSnippet:{
    // alignItems: 'center',
  }
});

export default ProfileModal;
