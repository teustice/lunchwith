import React, { Component } from 'react';
import { PropTypes,
ScrollView,
StyleSheet,
Text,
Dimensions,
TouchableOpacity,
Image,
View } from 'react-native';
import { NavigationActions } from 'react-navigation'
import LoggedIn from './loggedIn';
import NotLoggedIn from './notLoggedIn';

export default class ControlPanel extends Component {
  isLoggedIn(){
    if(this.props.currentUser.name) {
      return(
        <LoggedIn
          closeDrawer={this.props.closeDrawer}
          navigation={this.props.navigation}
          setLogInModal={this.props.setLogInModal}
          setDrawerNav={this.props.setDrawerNav}
          currentUser={this.props.currentUser}
          setCurrentUser={this.props.setCurrentUser}
          setAvailabilityModal={this.props.setAvailabilityModal}
        />)
    } else {
      return(
        <NotLoggedIn
          closeDrawer={this.props.closeDrawer}
          navigation={this.props.navigation}
          setLogInModal={this.props.setLogInModal}
          setDrawerNav={this.props.setDrawerNav}
        />)
    }
  }
  render() {
    return (
      <View>
        {this.isLoggedIn()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    position: 'absolute',
    top: -10,
    width: (Dimensions.get('window').width * 9/12),
    height: Dimensions.get('window').height,
    backgroundColor: 'rgb(37, 143, 247)',
    zIndex: 100,
  },
  controlText: {
    color: 'white',
  },
  userName: {
    color: 'white',
    fontSize: 20
  },
  navButton: {
    alignItems: 'center',
    width: (Dimensions.get('window').width * 7/12),
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
