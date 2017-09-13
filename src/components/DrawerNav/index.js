import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Drawer from 'react-native-drawer';
import ControlPanel from './controlPanel'

const whiteBurger = require('../../lib/images/hamburgerIconWhite.png');
const burger = require('../../lib/images/hamburgerIcon.png');

export class DrawerNav extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.drawerNav.drawerOpen === false){
      this.closeDrawer();
    }
  }

  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };

  iconColor(){
    if(this.props.whiteIcon){
      return whiteBurger;
    } else{
      return burger;
    }
  }
  render() {
    return (
      <View style={staticStyles.drawerContainer}>
        <Drawer
          ref={(ref) => this._drawer = ref}
          type="overlay"
          side={'left'}
          content={
            <ControlPanel
              closeDrawer={this.closeDrawer}
              navigation={this.props.navigation}
              setLogInModal={this.props.setLogInModal}
              setDrawerNav={this.props.setDrawerNav}
              currentUser={this.props.currentUser}
              setCurrentUser={this.props.setCurrentUser}
              setAvailabilityModal={this.props.setAvailabilityModal}
            />
          }
          onOpen={() => {
            this.props.setDrawerNav({drawerOpen: true})
          }}
          onClose={() => {
            this.props.setDrawerNav({drawerOpen: false})
          }}
          captureGestures={false}
          acceptPan={true}
          tweenDuration={250}
          panThreshold={0.25}
          openDrawerOffset={Dimensions.get('window').width + (Dimensions.get('window').width * 6/12)}
          closedDrawerOffset={0}
          negotiatePan={true}
          >
          <View style={staticStyles.drawerIcon}>
            <TouchableOpacity
              onPress={this.openDrawer}
            >
              <Image
                style={{height: 30, width: 30}}
                source={this.iconColor()}
              />
            </TouchableOpacity>
          </View>
        </Drawer>
      </View>
    )
  }
}

const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerIcon: {
    position: 'absolute',
    top: 0,
    right: -(Dimensions.get('window').width * 1/12),
  },
  drawerContainer: {
    width: (Dimensions.get('window').width * 7/12),
    backgroundColor: 'white'
  }
});

export default DrawerNav;
