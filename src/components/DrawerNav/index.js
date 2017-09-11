import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';
import ControlPanel from './controlPanel'

export class DrawerNav extends Component {
  constructor(props) {
    super(props);
  }

  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };
  render() {
    return (
      <View style={staticStyles.drawerContainer}>
        <Drawer
          ref={(ref) => this._drawer = ref}
          type="overlay"
          side={'left'}
          content={
            <ControlPanel closeDrawer={this.closeDrawer} navigation={this.props.navigation} />
          }
          acceptDoubleTap
          onOpen={() => {
            this.props.setDrawerNav({drawerOpen: true})
          }}
          onClose={() => {
            this.props.setDrawerNav({drawerOpen: false})
          }}
          captureGestures={false}
          tweenDuration={250}
          panThreshold={0.08}
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
                source={require('../../lib/images/hamburgerIcon.png')}
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
