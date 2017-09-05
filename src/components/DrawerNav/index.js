import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';
import ControlPanel from './controlPanel'
import Main from './main'

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
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        side={'left'}
        content={
          <ControlPanel closeDrawer={this.closeDrawer} />
        }
        acceptDoubleTap
        styles={{shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}
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
        >
        <View>
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
    )
  }
}

const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
});

export default DrawerNav;
