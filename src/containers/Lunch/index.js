import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { BlurView } from 'react-native-blur';

import Map from '../../components/Map/index';
import { connect } from 'react-redux';
import ActionCreators from '../../actions/index';
import getCurrentUser from '../../selectors/currentUser';
import { NavigationActions } from 'react-navigation';
import Restaurants from '../../components/LunchComponents/restaurants';
import ProfileImage from '../../components/ProfileModal/image';
import Message from '../../components/LunchComponents/message';


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

    var m_names = ["Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"];

    var time = new Date();
    var weekDay = time.getDay();

    switch(day){
      case 'M':
      // if it's currently monday or later in the week, find date for next monday, else if it's sunday
      // find date for this coming monday (next day). Same logic applies for each of the following
      // weekdays for determining a date either this week or next week
        if (weekDay != 0){
          difference = weekDay - 1
          time.setDate(time.getDate()+(7-difference));
          date = time.getDate();
          month = time.getMonth();
          return `${m_names[month]} ${date}`;
          break;
        } else {
          difference = 1 - weekDay
          time.setDate(time.getDate()+(difference));
          date = time.getDate();
          month = time.getMonth();
          return `${m_names[month]} ${date}`;
          break;
        }
      case 'T':
        if (weekDay > 1) {
          difference = weekDay - 2
          time.setDate(time.getDate()+(7-difference));
          date = time.getDate();
          month = time.getMonth();
          return `${m_names[month]} ${date}`;
          break;
        } else {
          difference = 2 - weekDay
          time.setDate(time.getDate()+(difference));
          date = time.getDate();
          month = time.getMonth();
          return `${m_names[month]} ${date}`;
          break;
        }
      case 'W':
        if (weekDay > 2) {
          difference = weekDay - 3
          time.setDate(time.getDate()+(7-difference));
          date = time.getDate();
          month = time.getMonth();
          return `${m_names[month]} ${date}`;
          break;
        } else {
          difference = 3 - weekDay
          time.setDate(time.getDate()+(difference));
          date = time.getDate();
          month = time.getMonth();
          return `${m_names[month]} ${date}`;
          break;
        }
      case 'Th':
        if (weekDay > 3) {
          difference = weekDay - 4
          time.setDate(time.getDate()+(7-difference));
          date = time.getDate();
          month = time.getMonth();
          return `${m_names[month]} ${date}`;
          break;
        } else {
          difference = 4 - weekDay
          time.setDate(time.getDate()+(difference));
          date = time.getDate();
          month = time.getMonth();
          return `${m_names[month]} ${date}`;
          break;
        }
      case 'F':
        if (weekDay > 4) {
          difference = weekDay - 5
          time.setDate(time.getDate()+(7-difference));
          date = time.getDate();
          month = time.getMonth();
          return `${m_names[month]} ${date}`;
          break;
        } else {
          difference = 5 - weekDay
          time.setDate(time.getDate()+(difference));
          date = time.getDate();
          month = time.getMonth();
          return `${m_names[month]} ${date}`;
          break;
        }
    }
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
      <ScrollView>
        <View style={styles.closeModal}>
          <Text style={styles.header}>{this.formatDay(selectedTime.day)}, {this.findDate(selectedTime.day)} at {this.formatTime(selectedTime.time)}</Text>
          <Text style={styles.subHeader}>Lunch With {selectedUser.name}</Text>
        </View>

        <View style={styles.panels}>
          <View style={{alignSelf:'flex-end'}} style={styles.content}>
            <ProfileImage profile={selectedUser} />
            <Message profile={selectedUser}/>
          </View>

          <View style={styles.content2}>
          <Restaurants/>
          </View>
        </View>
      </ScrollView>
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
  },
  panels:{
    marginTop: -33,
    marginHorizontal: 10,
  },
  content:{
    backgroundColor: "white",
    width: '100%',
    height: 'auto',
    shadowColor: 'rgb(150,150,150)',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  content2:{
    backgroundColor: "white",
    width: '100%',
    height: 30,
    marginTop: 15,
    shadowColor: 'rgb(150,150,150)',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },

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
