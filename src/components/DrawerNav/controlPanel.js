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
    if(currentUser) {
      return(<LoggedIn closeDrawer={this.props.closeDrawer} navigation={this.props.navigation}/>)
    } else {
      return(<NotLoggedIn closeDrawer={this.props.closeDrawer} navigation={this.props.navigation}/>)
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

let currentUser = false

const styles = StyleSheet.create({

})
