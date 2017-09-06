import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableWithoutFeedback, View, StyleSheet, Dimensions, Image } from 'react-native';
import ProfileImage from './image'
import RadiusMap from '../Forms/radiusMap';

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
        <View style={staticStyles.transparentView}>
          <View style={staticStyles.modalBackground}>
            <Modal
              animationType={"slide"}
              transparent={true}
              visible={this.state.modalVisible}
              style={staticStyles.mapBlur}
              >
              <View style={staticStyles.closeModal}>
                <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                  <Image
                    source={require('../../lib/images/arrow3.png')}
                    style={staticStyles.closeImage}
                  />
                </TouchableHighlight>
                <Text style={staticStyles.closeTitle}>Lunch with {this.props.profile.name}</Text>
              </View>
             <View style={staticStyles.container}>
              <View style={{alignSelf:'flex-end'}} style={staticStyles.content}>
                <ProfileImage profile={this.props.profile}/>
                <Text style={staticStyles.quickNotes}>Quick Notes</Text>
                <Text style={staticStyles.quickBlurb2}>Having {this.props.profile.experience} of development experience, {this.props.profile.name} specializes in SKILLS.</Text>

              </View>
              <View style={staticStyles.content2} >
                <Text style={staticStyles.panelTitle}>Current Availability</Text>
              </View>
              <View style={staticStyles.content3} >
                <Text style={staticStyles.panelTitle}>Neighborhood</Text>

              </View>
              <View style={staticStyles.content4} >
                <Text style={staticStyles.panelTitle}>In {this.props.profile.name}s own words.</Text>
              </View>


             </View>
            </Modal>

            <View style={staticStyles.profileSnippet}>

              <ProfileImage profile={this.props.profile}/>

              <Text style={staticStyles.title}>{this.props.profile.name}</Text>
              <Text style={staticStyles.quickBlurb}>Having {this.props.profile.experience} of development experience, {this.props.profile.name} specializes in SKILLS.</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    shadowColor: 'rgb(150,150,150)',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  modalBackground: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 30,
    marginLeft: -((Dimensions.get('window').width)*0.3/10),
    height:((Dimensions.get('window').height)*5/20),
    width:((Dimensions.get('window').width)*7.8/10), //gap between slides
    backgroundColor: 'rgb(255, 255, 255)',
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
  content:{
    backgroundColor: "white",
    width: '100%',
    height: 100,
  },
  content2: {
    backgroundColor: "white",
    width: '100%',
    height: 100,
    marginTop: 13,
  },
  content3: {
    backgroundColor: "white",
    width: '100%',
    height: 200,
    marginTop: 4,
  },
  content4: {
    backgroundColor: "white",
    width: '100%',
    height: 100,
    marginTop: 4,
  },
  closeModal: {
    width: '100%',
    alignSelf: 'flex-start',
    backgroundColor: 'rgb(65,152,240)',
    marginBottom: 36,
    paddingBottom: 10,
  },
  closeImage: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginLeft: 20,
  },
  closeTitle: {
    textAlign: 'center',
    color: 'white',
    marginTop: -20,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  title:{
    fontFamily: 'ProximaNova-Regular',
    fontSize: 16,
    marginTop: -17,
    paddingLeft: 5,
    color: 'grey',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  quickNotes:{
    fontFamily: 'ProximaNova-Regular',
    fontSize: 16,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    color: 'grey',
  },
  panelTitle:{
    fontFamily: 'ProximaNova-Regular',
    fontSize: 16,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    color: 'grey',
    paddingTop: 20,
  },
  quickBlurb:{
    fontFamily: 'ProximaNova-Regular',
    fontSize: 12,
    paddingTop: 13,
    paddingLeft: 5,
    color: 'grey',
    backgroundColor: 'rgba(255,255,255,0)',
    lineHeight: 16,
  },
  quickBlurb2:{
    fontFamily: 'ProximaNova-Regular',
    fontSize: 12,
    paddingTop: 13,
    paddingLeft: 20,
    color: 'grey',
    lineHeight: 16,
    paddingBottom: 20,
  },
  profileSnippet:{
    // alignItems: 'center',
  },
  transparentView:{
    paddingTop: 20,
  },
  mapBlur:{
    backgroundColor: 'rgba(255,255,255,0.2)',
  }
});

export default ProfileModal;
