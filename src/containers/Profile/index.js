import React, { Component } from 'react';
import { View, StatusBar, Dimensions, ScrollView, Text, Image, Modal, TouchableHighlight, StyleSheet } from 'react-native';
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
import getDrawerNav from '../../selectors/drawerNav';
import getCurrentUser from '../../selectors/currentUser';
import FormView from '../../components/Forms/basicDetails';
import getCompany from '../../selectors/business';
import ProfileImage from '../../components/ProfileModal/image'
import findUserById from '../../lib/helpers/userById';
import ExperienceSlider from '../../components/Forms/slider'
import getExperienceSlider from '../../selectors/experienceSlider';
import Availability from '../../components/Profile/availability';

export class Profile extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (

      <ScrollView>
        <StatusBar hidden={true} />
        <View style={staticStyles.header}>
          <Header profile={this.props.currentUser} />
        </View>


        <View style={staticStyles.content}>
          <ProfileImage profile={this.props.currentUser} />
          <Bio currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser} />
        </View>

        <View style={staticStyles.content}>
          <Skills setUser={this.props.currentUser}/>
        </View>

        <View style={staticStyles.content}>
          <ExperienceSlider setUser={this.props.currentUser}
                            experienceSlider={this.props.experienceSlider}
                            setExperienceSlider={this.props.setExperienceSlider} />
        </View>

        <View style={staticStyles.content}>
          <Availability
            currentUser={this.props.currentUser}
            setAvailabilityModal={this.props.setAvailabilityModal}
          />
        </View>

        <View style={styles.drawerIcon}>
          <DrawerNav
            drawerNav={this.props.drawerNav}
            setDrawerNav={this.props.setDrawerNav}
            navigation={this.props.navigation}
            setLogInModal={this.props.setLogInModal}
            currentUser={this.props.currentUser}
            setCurrentUser={this.props.setCurrentUser}
          />
        </View>

       </ScrollView>


    );
  }
}

const styles = StyleSheet.create({
  drawerIcon: {
    position: 'absolute',
    top: 10,
    right: 50,
  }
});

const staticStyles = StyleSheet.create({
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
  header: {
    width: '100%',
    alignSelf: 'flex-start',
    backgroundColor: 'rgb(65,152,240)',
    marginBottom: 24,
    paddingBottom: 19,
  },
  closeImage: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginLeft: 20,
  },
});

FormView.defaultProps = {
  setFirstName: () => {},
  setLastName: () => {},
  setBusiness: () => {},
  setJobTitle: () => {},
  setLunchRadius: () => {},
  setBio: () => {},
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
  return {
    company: getCompany(store),
    experienceSlider: getExperienceSlider(store),
    drawerNav: getDrawerNav(store) ,
    currentUser: getCurrentUser(store),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
