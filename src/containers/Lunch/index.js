import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { BlurView } from 'react-native-blur';

import Map from '../../components/Map/index';
import { connect } from 'react-redux';
import ActionCreators from '../../actions/index';
import getCurrentUser from '../../selectors/currentUser';
import { NavigationActions } from 'react-navigation';
import Restaurants from '../../components/LunchComponents/restaurants';

export class Lunch extends Component {
  static navigationOptions = {
    title: 'Lunch with Lucy',
  };

  render() {
    console.log(this.props.navigation.state.params.selectedUser);
    const selectedUser = this.props.navigation.state.params.selectedUser;
    
    return (
      <View>
        <Text>Ask out {selectedUser.name} for lunches here.</Text>
        <Restaurants/>
      </View>
    )
  }
}


const styles = StyleSheet.create({


});

Lunch.defaultProps = {

};

Lunch.propTypes = {

};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return {
    currentUser: getCurrentUser(store),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Lunch);
