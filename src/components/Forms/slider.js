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
      if(this.props.experienceSlider === 10){}
    }
  }
  render() {
    return (
      <View>
        <Text style={styles.text} >
          You Have About <Text style={{color: 'rgb(65,152,240)', fontFamily: 'ProximaNova-Regular'}}>{this.props.experienceSlider} Years</Text> of <Text style={{color: 'rgb(65,152,240)', fontFamily: 'ProximaNova-Regular'}}>Experience</Text>
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
    fontFamily: 'ProximaNovaT-Thin',
    fontSize: 12,
    paddingTop: 20,
    paddingLeft: 15,
    marginBottom: 10,
    color: 'rgb(10,10,10)',
  },
});

export default ExperienceSlider;
