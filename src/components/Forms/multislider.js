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

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  // CORRESPONDS TO 11AM AND 4PM: initial state of multislider
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


// ***BASED ON A RANGE FROM 10AM TO 4PM**** converts integers into time.
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
    this.handleChange(values);
  }

  handleChange(values) {
     return {
       value: this.props.onAvailabilityChange(values)
     };
   }


// Only shows multislider if switch is turned on
  render() {
    console.log(this.props.availabilityProp);
    return (
      <View style={styles.container}>
        <Switch
          onValueChange={(value) => {this.setState({eventSwitchIsOn: value} )}}
          value={this.state.eventSwitchIsOn}
        />
        <View style={styles.sliders}>
          {this.state.eventSwitchIsOn ?
              <View>
                <Text style={styles.text}>{this.timeToConvert(this.props.availabilityProp[0])} - {this.timeToConvert(this.props.availabilityProp[1])}</Text>
                <MultiSlider
                values={[this.props.availabilityProp[0], this.props.availabilityProp[1]]}
                sliderLength={320}
                {...this.props}
                onValuesChange={this.multiSliderValuesChange}
                min={0}
                max={6}
                allowOverlap
                snapped
                />
              </View>
           : null }
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
    marginTop: 20,
    width: 320,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
    paddingBottom: 20,
    marginTop: 0,
    color: 'grey',
  },

});
