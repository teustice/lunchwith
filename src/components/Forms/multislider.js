'use strict';

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Slider,
  Image,
  Platform,
  Switch,
} from 'react-native';

import MultiSlider from '@ptomasroos/react-native-multi-slider';


class MultiSliderUse extends React.Component {

  // initial state of multislider
  state = {
    multiSliderValue: [1, 5],
  };


// Initial state for switch
  getInitialState() {
    console.log('toggle button handler: '+ this.state.status);
    return {
      eventSwitchIsOn: true,
      eventSwitchRegressionIsOn: true,
      status: false,
    };
  }

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
      status: false,
    });
  }

  _renderMultiSlider = () => {
    if (this.state.status) {
      return (
        <View>
        <Text style={styles.text}>{this.timeToConvert(this.state.multiSliderValue[0])} - {this.timeToConvert(this.state.multiSliderValue[1])}</Text>
        <MultiSlider
        values={[this.state.multiSliderValue[0], this.state.multiSliderValue[1]]}
        sliderLength={320}
        onValuesChange={this.multiSliderValuesChange}
        min={0}
        max={6}
        step={1}
        allowOverlap
        snapped
        />
      </View>
      );
    } else {
      return null;
    }
  }

  render() {
    console.log('test ' );
    return (
      <View style={styles.container}>
        <View style={styles.sliders}>

          <View style={styles.sliderOne}>
            <Switch
              onValueChange={(value) => {this.setState({eventSwitchIsOn: value, status: !this.state.status}), this._renderMultiSlider()}}
              style={{marginBottom: 30}}
              value={this.state.eventSwitchIsOn}
            />
            {this.state.eventSwitchIsOn ?
                <View>
                  <Text style={styles.text}>{this.timeToConvert(this.state.multiSliderValue[0])} - {this.timeToConvert(this.state.multiSliderValue[1])}</Text>
                  <MultiSlider
                  values={[this.state.multiSliderValue[0], this.state.multiSliderValue[1]]}
                  sliderLength={320}
                  onValuesChange={this.multiSliderValuesChange}
                  min={0}
                  max={6}
                  step={1}
                  allowOverlap
                  snapped
                  />
                </View>

             : null }


          </View>
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
    marginVertical: 20,
    width: 320,
  },
  text: {
    alignSelf: 'center',
    paddingBottom: 20,
    marginTop: 0,
    color: 'grey',
  },
  sliderOne: {
    flexDirection: 'row',

  },

});
