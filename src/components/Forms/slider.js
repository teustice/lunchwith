'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Slider,
  Text,
  StyleSheet,
  View,
} = ReactNative;

class ExperienceSlider extends React.Component {

  changeSliderValue(sliderValue){
    let value = sliderValue.toFixed(1);
    if(this.props.experienceSlider != value){
      this.props.setExperienceSlider(value);
    }
  }
  render() {
    return (
      <View>
        <Text style={styles.text} >
          {this.props.experienceSlider} years
        </Text>
        <Slider
          value={parseInt(this.props.experienceSlider)}
          onValueChange={(value) => this.changeSliderValue(value)}
          maximumValue={10}

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

export default ExperienceSlider;
