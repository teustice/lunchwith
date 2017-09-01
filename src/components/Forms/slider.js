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

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(value) {
     return {
       value: this.props.onExperienceChange(value)
     };
   }

  render() {
    const totalExperience = this.props.value;
    console.log(this.props);
    return (
      <View>
        <Text style={styles.text} >
          {this.props.value} years
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.handleChange} maximumValue={10} />
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
