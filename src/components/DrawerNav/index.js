import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';
import ControlPanel from './controlPanel'

export class DrawerNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      drawerDisabled: false,
    };
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
            console.log('onopen')
            this.setState({drawerOpen: true})
          }}
          onClose={() => {
            console.log('onclose')
            this.setState({drawerOpen: false})
          }}
          captureGestures={false}
          tweenDuration={100}
          panThreshold={0.08}
          disabled={this.state.drawerDisabled}
          openDrawerOffset={Dimensions.get('window').width}
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
    width: (Dimensions.get('window').width * 4/12),
    backgroundColor: 'white'
  }
});

export default DrawerNav;
