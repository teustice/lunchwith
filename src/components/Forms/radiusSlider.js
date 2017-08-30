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
    if(this.props.lunchRadiusSlider != value){
      this.props.setLunchRadiusSlider(value);
    }
  }
  render() {
    return (
      <View>
        <Text style={styles.text} >
          Lunch Radius: {this.props.lunchRadiusSlider} miles
        </Text>
        <Slider
          value={parseInt(this.props.lunchRadiusSlider)}
          onValueChange={(value) => this.changeSliderValue(value)}
          maximumValue={5}
          minimumValue={0.5}
          step={0.5}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 13,
    color: 'grey',
    textAlign: 'center',
    fontWeight: '300',
    margin: 10,
  },
});

export default RadiusSlider;
