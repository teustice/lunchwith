import React, { Component } from 'react';
import { View, Text, Image, Modal, TouchableHighlight, StyleSheet, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DrawerNav from '../../components/DrawerNav/index'
import ActionCreators from '../../actions/index';
import positionerStyle from '../../lib/styles/positioner';
import Button from '../../components/Button/index';
import { staticStyles } from './styles';
import profileData from '../../lib/seeds/profileData';
import Bio from '../../components/Profile/bio';
import Header from '../../components/Profile/header';
import getUser from '../../selectors/user';
import getDrawerNav from '../../selectors/drawerNav';
import FormView from '../../components/Forms/basicDetails';
import getCompany from '../../selectors/business';

export class Profile extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {

    return (
      <View>
        <StatusBar hidden={true} />
        <View style={{marginTop: 40}}>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
           <View style={{marginTop: 22}}>
            <View>
              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
              <Text>Go Back</Text>
              </TouchableHighlight>
              <FormView setBusiness={this.props.setBusiness} />
            </View>
           </View>
          </Modal>

          <TouchableHighlight onPress={() => {
            this.setModalVisible(true)
          }}>
            <Text>Edit Profile</Text>
          </TouchableHighlight>
          <View style={staticStyles.container}>
            <View style={positionerStyle.centeringFromBottom('50%')}>
              <Header setUser={this.props.setUser} />
              <Bio setUser={this.props.setUser} />
            </View>
          </View>
        </View>
        <View style={styles.drawerIcon}>
          <DrawerNav
            drawerNav={this.props.drawerNav}
            setDrawerNav={this.props.setDrawerNav}  
            navigation={this.props.navigation}
          />
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
  return { company: getCompany(store), drawerNav: getDrawerNav(store) };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
