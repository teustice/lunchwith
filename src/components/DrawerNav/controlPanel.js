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

export default class ControlPanel extends Component {

  render() {
    let {closeDrawer} = this.props
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={closeDrawer}>
          <Text>X</Text>
        </TouchableOpacity>
        <View style={styles.profile}>
          <Image
            style={{width: 50, height: 50, borderRadius: 25}}
            source={require('../../lib/images/hass.jpeg')}
          />
          <Text style={styles.controlText}>Admin</Text>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => {
              this.props.navigation.dispatch(resetMapScreen)
            }}
          >
            <Text>Map</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => {
              this.props.navigation.dispatch(resetProfile)
            }}
          >
            <Text>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => {
              this.props.navigation.dispatch(resetOnboard)
            }}
          >
            <Text>Onboard</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    position: 'absolute',
    top: -5,
    width: (Dimensions.get('window').width * 6/12),
    height: Dimensions.get('window').height,
    backgroundColor: 'grey',
  },
  controlText: {
    color: 'white',
  },
  navButton: {
    width: 80,
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white'
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

//reset navigation to prevent stacking screens 
const resetMapScreen = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MapScreen'})
  ]
});
const resetProfile = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Profile'})
  ]
});
const resetOnboard = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Onboard'})
  ]
});
