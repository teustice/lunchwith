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
import Header from '../../components/Profile/header';

export class Lunch extends Component {

  formatDay(day){
    switch(day){
      case 'M':
        return `Monday`;
        break;
      case 'T':
        return `Tuesday`;
        break;
      case 'W':
        return `Wednesday`
        break;
      case 'Th':
        return `Thursday`;
        break;
      case 'F':
        return `Friday`;
        break;
    }
  }

  findDate(day){
    time = new Date();
    date = time.getDate;
    day = time.getday;
  }

  formatTime(time){
    let parsedTime = parseInt(time);
    switch(parsedTime){
      case 10:
        return `${time}:00AM`;
        break;
      case 11:
        return `${time}:00AM`;
        break;
      case 12:
        return `${time}:00PM`;
        break;
      case 1:
        return `${time}:00PM`;
        break;
    }
  }

  render() {
    const selectedUser = this.props.navigation.state.params.selectedUser;
    const selectedTime = this.props.navigation.state.params.selectedTime;

    console.log(this.props);
    console.log(this.findDate(selectedTime.day));

    return (
      <View>
        <View style={styles.closeModal}>
          <Text style={styles.header}>{this.formatDay(selectedTime.day)}, {this.findDate(selectedTime.day)} at {this.formatTime(selectedTime.time)}</Text>
          <Text style={styles.subHeader}>Lunch With {selectedUser.name}</Text>
        </View>
        <View>
          <Restaurants/>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  closeModal: {
    width: '100%',
    alignSelf: 'flex-start',
    backgroundColor: 'rgb(65,152,240)',
    height: 50,
    marginBottom: 41,
    paddingBottom: 23,
  },
  header: {
    color: 'white',
    marginTop: 5,
    paddingTop: 5,
    marginBottom: -3,
    fontFamily: 'ProximaNova-Regular',
    fontSize: 20,
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  subHeader: {
    color: 'white',
    marginTop: 4,
    paddingTop: 3,
    marginBottom: -3,
    fontFamily: 'ProximaNova-Bold',
    fontSize: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
  }

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
