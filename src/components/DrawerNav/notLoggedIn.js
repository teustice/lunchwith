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

export default class NotLoggedIn extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.closeDrawer}>
          <Text>X</Text>
        </TouchableOpacity>
        <View style={styles.profile}>
          <Image
            style={{width: 50, height: 50, borderRadius: 25}}
            source={require('../../lib/images/default-profile.png')}
          />

          <Text style={styles.userName}>Anonymous</Text>
          <Text style={styles.userNameSub}>Log in to invite someone to lunch!</Text>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => {
              this.props.navigation.dispatch(resetOnboard)
            }}
          >
            <Text style={styles.controlText}>Log In</Text>
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
    top: -10,
    width: (Dimensions.get('window').width * 9/12),
    height: Dimensions.get('window').height,
    backgroundColor: 'rgb(37, 143, 247)',
  },
  controlText: {
    color: 'white',
  },
  userName: {
    color: 'white',
    fontSize: 20
  },
  userNameSub: {
    color: 'black',
    fontSize: 13,
    marginBottom: 20,
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
