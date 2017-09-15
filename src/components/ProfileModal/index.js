import React, { Component } from 'react';
import { Modal, Text, ScrollView, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions/index';
import ProfileImage from './image'
import NeighbordhoodMap from '../Map/neighborhood';
import { BlurView } from 'react-native-blur';
import Availability from '../Profile/availability';
import getCurrentUser from '../../selectors/currentUser';

class ProfileModal extends Component {
  setModalVisible(visible) {
    // if(visible){
    //   if (this.props.currentUser.name && this.props.profile.name){
    //     this.setState({availabilityUser: this.props.profile})
    //   } else {
    //     this.setState({availabilityUser: this.props.profile})
    //   }
    // }

    if(visible){
      this.props.setProfileModal({modalVisible: visible, profile: this.props.profile})
    } else {
      this.props.setProfileModal({modalVisible: visible, profile: {}});
    }
  }

  whichDays(days) {
    console.log('day test' + days[0]);
    let finalDays = [];
    let inputDays = ['M', 'T', 'W', 'Th', 'F'];
    let weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
    for(let i=0; i < inputDays.length; i++){
      if (i === 5){
        break;
      } else if (days.includes(inputDays[i])) {
        finalDays.push(
          <View key={i} style={staticStyles.circleInclude}>
            <Text style={staticStyles.circleTextInclude}>{weekDays[i]}</Text>
          </View>
        )
      } else {
        finalDays.push(
          <View key={i} style={staticStyles.circle}>
            <Text style={staticStyles.circleText}>{weekDays[i]}</Text>
          </View>
        )
      }
    }
    return finalDays;
  }

  snippetAvailability() {
    let dayList = [];
    for(let i=0; i< this.props.profile.availability.length; i++){
      if(i==3){
        break;
      } else {
        dayList.push(
          this.props.profile.availability[i].day
        )
      }
    }
    return this.whichDays(dayList);
  }

  
  modalContent(){
    let profileSkills = this.props.profile.skills.map((skill, key) => {
      return (
        <Text style={{color: 'rgb(65,152,240)'}} key={key}>{skill}</Text>
      );
    });  
    
    if(this.props.profileModal.profile){
      return (
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.props.profileModal.modalVisible}
          style={staticStyles.mapBlur}
          >
          <ScrollView>
          <TouchableWithoutFeedback onPress={() => {
            this.setModalVisible(!this.props.profileModal.modalVisible)
          }}>
            <View style={staticStyles.closeModal}>
                <Image
                  source={require('../../lib/images/arrow3.png')}
                  style={staticStyles.closeImage}
                />
              <Text style={staticStyles.closeTitle}>Lunch with {this.props.profileModal.profile.name}</Text>
            </View>
          </TouchableWithoutFeedback>
             <View style={staticStyles.container}>
                <View style={{alignSelf:'flex-end'}} style={staticStyles.content}>
                  <ProfileImage profile={this.props.profileModal.profile}/>
                  <View style={staticStyles.quickBlock}>
                    <Text style={staticStyles.quickNotes}>Quick Notes</Text>
                    <Text style={staticStyles.quickBlurb2}>Having {this.props.profileModal.profile.experience} years of development experience, {this.props.profileModal.profile.name} specializes in {profileSkills[0]}, {profileSkills[1]}, and {profileSkills[2]}.</Text>
                  </View>
                </View>

                <View style={staticStyles.content2} >
                  <Availability
                    currentUser={this.props.currentUser}
                    navigation={this.props.navigation}
                    profileModal={this.props.profileModal}
                    profile={this.props.profileModal.profile}
                    setProfileModal={this.props.setProfileModal}
                  />
                </View>
                <View style={staticStyles.content3} >
                  <Text style={staticStyles.panelTitle}>Neighborhood</Text>
                  <NeighbordhoodMap neighborhood={this.props.neighborhood} radius={this.props.profileModal.profile.lunchRadius}/>
                </View>
                <View style={staticStyles.content4} >
                  <Text style={staticStyles.panelTitle}>In {this.props.profileModal.profile.name}s own words.</Text>
                  <Text style={staticStyles.quickBlurb2}>{this.props.profileModal.profile.bio}</Text>
                </View>
              </View>
            </ScrollView>
        </Modal>
      )
    }
  }

  render() {
    let profileSkills = this.props.profile.skills.map((skill, key) => {
      return (
        <Text style={{color: 'rgb(65,152,240)'}} key={key}>{skill}</Text>
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

            {this.modalContent()}
            <View style={staticStyles.profileSnippet}>
              <ProfileImage profile={this.props.profile}/>
              <Text style={staticStyles.title}>{this.props.profile.name}</Text>
              <Text style={staticStyles.quickBlurb}>Having {this.props.profile.experience} years of development experience, {this.props.profile.name} specializes in {profileSkills[0]}, {profileSkills[1]}, and {profileSkills[2]}.</Text>
                <View style={{flexDirection: 'row', height: 100, paddingTop: 17, paddingLeft: 5}}>
                  {this.snippetAvailability()}
                </View>
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
    marginTop: 5,
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
    fontFamily: 'ProximaNovaT-Thin',
    fontSize: 12,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    color: 'rgb(10,10,10)',
  },
  quickBlock:{
    marginTop: -10,
  },
  panelTitle:{
    fontFamily: 'ProximaNovaT-Thin',
    fontSize: 12,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    color: 'rgb(10,10,10)',
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
  circle:{
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    height: 34,
    width: 34,
    borderRadius: 17,
    marginRight: 7,
  },
  circleText:{
    alignSelf: 'center',
    marginTop: 12,
    paddingLeft: 1,
    fontFamily: 'ProximaNova-Bold',
    fontSize: 9,
    color: 'grey',
  },
  circleInclude: {
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'lightgrey',
    height: 34,
    width: 34,
    borderRadius: 17,
    marginRight: 10,
  },
  circleTextInclude: {
    alignSelf: 'center',
    marginTop: 12,
    paddingLeft: 1,
    fontFamily: 'ProximaNova-Bold',
    fontSize: 9,
    color: 'white',
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return {
    currentUser: getCurrentUser(store),
  };
}

export default ProfileModal;
