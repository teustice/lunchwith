import React, { Component } from 'react';
import { Modal, Text, ScrollView, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet, Dimensions, Image } from 'react-native';
import ProfileImage from './image'
import NeighbordhoodMap from '../Map/neighborhood';
import { BlurView } from 'react-native-blur';
import Availability from '../Profile/availability';

class ProfileModal extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {

    const profileSkills = this.props.profile.skills.map((skill, key) => {
      return (
        <Text style={{color: 'rgb(65,152,240)'}} key={key}>{skill.name}</Text>
      );
    });

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
              <ScrollView>
              <TouchableWithoutFeedback onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <View style={staticStyles.closeModal}>
                    <Image
                      source={require('../../lib/images/arrow3.png')}
                      style={staticStyles.closeImage}
                    />
                  <Text style={staticStyles.closeTitle}>Lunch with {this.props.profile.name}</Text>
                </View>
              </TouchableWithoutFeedback>
                 <View style={staticStyles.container}>
                    <View style={{alignSelf:'flex-end'}} style={staticStyles.content}>
                      <ProfileImage profile={this.props.profile}/>
                      <Text style={staticStyles.quickNotes}>Quick Notes</Text>
                      <Text style={staticStyles.quickBlurb2}>Having {this.props.profile.experience} years of development experience, {this.props.profile.name} specializes in {profileSkills[0]}, {profileSkills[1]}, and {profileSkills[2]}.</Text>
                    </View>

                    <View style={staticStyles.content2} >
                      <Availability profile={this.props.profile}
                                    currentUser={this.props.currentUser}
                      />
                    </View>
                    <View style={staticStyles.content3} >
                      <Text style={staticStyles.panelTitle}>Neighborhood</Text>
                      <NeighbordhoodMap neighborhood={this.props.neighborhood} radius={this.props.profile.lunchRadius}/>
                    </View>
                    <View style={staticStyles.content4} >
                      <Text style={staticStyles.panelTitle}>In {this.props.profile.name}s own words.</Text>
                    </View>
                  </View>
                </ScrollView>
            </Modal>

            <View style={staticStyles.profileSnippet}>
              <ProfileImage profile={this.props.profile}/>
              <Text style={staticStyles.title}>{this.props.profile.name}</Text>
              <Text style={staticStyles.quickBlurb}>Having {this.props.profile.experience} years of development experience, {this.props.profile.name} specializes in {profileSkills[0]}, {profileSkills[1]}, and {profileSkills[2]}.</Text>
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
    marginTop: -10,
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
    // marginTop: -15,
  },
  content:{
    backgroundColor: "white",
    width: '100%',
    height: 100,
  },
  content2: {
    backgroundColor: "white",
    width: '100%',
    height: 'auto',
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
    height: 50,
    marginBottom: 41,
    paddingBottom: 23,
  },
  closeImage: {
    width: 20,
    height: 20,
    marginTop: 15,
    marginLeft: 20,
  },
  closeTitle: {
    textAlign: 'center',
    color: 'white',
    marginTop: -20,
    backgroundColor: 'rgba(255,255,255,0)',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 20,
  },
  title:{
    fontFamily: 'Helvetica',
    fontSize: 16,
    marginTop: -17,
    paddingLeft: 5,
    color: 'grey',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  quickNotes:{
    fontFamily: 'ProximaNova-Regular',
    fontSize: 13,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    color: 'grey',
  },
  panelTitle:{
    fontFamily: 'ProximaNova-Regular',
    fontSize: 13,
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
  },
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },
});

export default ProfileModal;
