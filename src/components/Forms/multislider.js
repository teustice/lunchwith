'use strict';

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Slider,
  Image,
  Platform,
} from 'react-native';

import MultiSlider from '@ptomasroos/react-native-multi-slider';




class MultiSliderUse extends React.Component {
  state = {

    sliderOneChanging: false,
    sliderOneValue: [5],
    multiSliderValue: [0, 6],
  };



  timeToConvert = (i) => {
    if (i < 2) {
      return ((i + 10).toString() + " am");
    } else if (i === 2) {
      return ((i + 10).toString() + " pm");
    } else {
      return ((i - 2).toString() + " pm");
    }
  }






  multiSliderValuesChange = (values) => {
    this.setState({
      multiSliderValue: values,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lunch Availability</Text>
        <View style={styles.sliders}>

          <View style={styles.sliderOne}>
            <Text style={styles.text}>Monday: </Text>
            <Text style={styles.text}>{this.timeToConvert(this.state.multiSliderValue[0])} </Text>
            <Text style={styles.text}>-</Text>
            <Text style={styles.text}> {this.timeToConvert(this.state.multiSliderValue[1])}</Text>
          </View>
          <MultiSlider
            values={[this.state.multiSliderValue[0], this.state.multiSliderValue[1]]}
            sliderLength={280}
            onValuesChange={this.multiSliderValuesChange}
            min={0}
            max={6}
            step={1}
            allowOverlap
            snapped
          />
        </View>
      </View>
    );
  }
}

export default MultiSliderUse;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliders: {
    margin: 20,
    width: 310,
  },
  text: {
    alignSelf: 'center',
    paddingVertical: 20,
    color: 'grey',
  },
  title: {
    fontSize: 15,
    color: 'grey',
    paddingVertical: 20,
    alignSelf: 'flex-start',
  },
  sliderOne: {
    flexDirection: 'row',

  }
});
