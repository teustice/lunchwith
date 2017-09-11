'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Slider,
  Text,
  StyleSheet,
  View,
  Image,
} = ReactNative;

class ExperienceSlider extends React.Component {

  changeSliderValue(sliderValue){
    let value = sliderValue.toFixed(0);
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
          thumbSize={10}
          value={parseInt(this.props.experienceSlider)}
          onValueChange={(value) => this.changeSliderValue(value)}
          maximumValue={10}
          style={{marginHorizontal: 15}}
        />
        <Text style={styles.sliderExplanation1}>Slide the scale to indicate your total experience.</Text>
        <Text style={styles.sliderExplanation2}>This is not about any specific skills, just the time you spent in the industry.</Text>

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
  sliderExplanation1: {
    fontFamily: 'ProximaNova-Regular',
    paddingTop: 15,
    paddingLeft: 15,
    color: 'grey',
    fontSize: 10,
  },
  sliderExplanation2: {
    fontFamily: 'ProximaNova-Regular',
    paddingLeft: 15,
    paddingBottom: 20,
    color: 'grey',
    fontSize: 10,
  }
});

export default ExperienceSlider;
