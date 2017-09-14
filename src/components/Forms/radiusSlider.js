'use strict';

import React, { Component } from 'react';
import {
  Slider,
  Text,
  StyleSheet,
  View, } from 'react-native';

export class RadiusSlider extends Component {
  changeSliderValue(sliderValue){
    let value = sliderValue.toFixed(1);
    if(this.props.currentUser.lunchRadius != value){
      this.props.setCurrentUser({...this.props.currentUser, lunchRadius: value});
    }
  }
  render() {
    return (
      <View>
        <Text style={styles.text} >
          Lunch Radius: <Text style={{color: 'rgb(65,152,240)', fontFamily: 'ProximaNova-Regular'}}>{this.props.currentUser.lunchRadius} miles</Text>
        </Text>
        <Slider
          value={parseInt(this.props.currentUser.lunchRadius)}
          onValueChange={(value) => this.changeSliderValue(value)}
          maximumValue={2}
          minimumValue={0.1}
          step={0.1}
        />
        <Text style={styles.explanation}>Touch the map to set the radius where you would like to have lunch!</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  slider: {
    height: 10,
    width: '90%',
    margin: 10,
  },
  text: {
    fontFamily: 'ProximaNovaT-Thin',
    fontSize: 12,
    paddingTop: 20,
    paddingLeft: 15,
    marginBottom: 10,
    color: 'rgb(10,10,10)',
  },
  explanation: {
    fontFamily: 'ProximaNova-Regular',
    paddingTop: 5,
    paddingLeft: 15,
    paddingBottom: 20,
    color: 'grey',
    fontSize: 10,
  }
});

export default RadiusSlider;
