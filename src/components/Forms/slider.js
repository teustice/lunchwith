'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Slider,
  Text,
  StyleSheet,
  View,
} = ReactNative;

const ExperienceSlider = React.createClass({
  getDefaultProps() {
    return {
      value: 0,
    }
  },

  getInitialState() {
    return {
      value: this.props.value,
    };
  },

  render() {
    return (
      <View>
        <Text style={styles.text} >
          {this.state.value && +this.state.value.toFixed(0)}
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} maximumValue={10} />
      </View>
    );
  }
});

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

export default ExperienceSlider;
