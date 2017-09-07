import React, { Component } from 'react';
import { View, StatusBar, Dimensions, Text, Image, Modal, TouchableHighlight, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DrawerNav from '../../components/DrawerNav/index'
import ActionCreators from '../../actions/index';
import positionerStyle from '../../lib/styles/positioner';
import Button from '../../components/Button/index';
// import { staticStyles } from './styles';
import profileData from '../../lib/seeds/profileData';
import Bio from '../../components/Profile/bio';
import Skills from '../../components/Profile/skills';
import Header from '../../components/Profile/header';
import getUser from '../../selectors/user';
import FormView from '../../components/Forms/basicDetails';
import getCompany from '../../selectors/business';
import ProfileImage from '../../components/ProfileModal/image'
import findUserById from '../../lib/helpers/userById';

export class Profile extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    let tempUser = findUserById(1);
    return (
      // <View>
      //   <StatusBar hidden={true} />
      //   <View style={{marginTop: 40}}>
      //     <Modal
      //       animationType={"slide"}
      //       transparent={false}
      //       visible={this.state.modalVisible}
      //       onRequestClose={() => {alert("Modal has been closed.")}}
      //       >
      //      <View style={{marginTop: 22}}>
      //       <View>
      //         <TouchableHighlight onPress={() => {
      //           this.setModalVisible(!this.state.modalVisible)
      //         }}>
      //         <Text>Go Back</Text>
      //         </TouchableHighlight>
      //         <FormView setBusiness={this.props.setBusiness} />
      //       </View>
      //      </View>
      //     </Modal>
      //
      //     <TouchableHighlight onPress={() => {
      //       this.setModalVisible(true)
      //     }}>
      //       <Text>Edit Profile</Text>
      //     </TouchableHighlight>
      //     <View style={staticStyles.container}>
      //       <View style={positionerStyle.centeringFromBottom('50%')}>
      //         <Header setUser={this.props.setUser} />
      //         <Bio setUser={this.props.setUser} />
      //       </View>
      //     </View>
      //   </View>
      //   <View style={styles.drawerIcon}>
      //     <DrawerNav navigation={this.props.navigation}/>
      //   </View>
      // </View>

      <View>
        <StatusBar hidden={true} />
        <View style={staticStyles.header}>
          <Header setUser={this.props.setUser} />
        </View>


        <View style={staticStyles.content}>
          <ProfileImage profile={tempUser} />
          <Bio setUser={this.props.setUser} />
        </View>

        <View style={staticStyles.content}>
          <Skills setUser={this.props.setUser}/>
        </View>

        <View style={styles.drawerIcon}>
          <DrawerNav navigation={this.props.navigation}/>
        </View>
       </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerIcon: {
    position: 'absolute',
    top: 10,
    right: 50,
  }
});

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
  content:{
    backgroundColor: "white",
    // width: '100%',
    height: 'auto',
    marginTop: 5,
    marginHorizontal: 10,
    shadowColor: 'rgb(150,150,150)',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
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
  header: {
    width: '100%',
    alignSelf: 'flex-start',
    backgroundColor: 'rgb(65,152,240)',
    marginBottom: 36,
    paddingBottom: 19,
  },
  closeImage: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginLeft: 20,
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
    fontFamily: 'Helvetica',
    fontSize: 16,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    color: 'grey',
  },
  panelTitle:{
    fontFamily: 'Helvetica',
    fontSize: 16,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    color: 'grey',
    paddingTop: 20,
  },
  quickBlurb:{
    fontFamily: 'Helvetica',
    fontSize: 12,
    paddingTop: 13,
    paddingLeft: 5,
    color: 'grey',
    backgroundColor: 'rgba(255,255,255,0)',
    lineHeight: 16,
  },
  quickBlurb2:{
    fontFamily: 'Helvetica',
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

FormView.defaultProps = {
  setFirstName: () => {},
  setLastName: () => {},
  setBusiness: () => {},
  setJobTitle: () => {},
  setLunchRadius: () => {},
  setBio: () => {},
  setExperienceValue: () => {},
  experienceValue: 0,
  company: {},
  firstName: {},
  lastName: {},
  jobTitle: {},
  lunchRadius: {},
  bio: {},
};

FormView.propTypes = {
};

Profile.defaultProps = {
  fetchUser: () => {},
  user: {},
};

Profile.propTypes = {
  setBusiness: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

function mapStateToProps(store) {
  return { company: getCompany(store) };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
