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

})
