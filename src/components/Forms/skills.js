import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import PropTypes from 'prop-types';
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  Switch
} from 'react-native-clean-form'
import { Field, reduxForm, Picker } from 'redux-form'

const topLevelSkills = [
  {label: 'Front End Development', value: 'frontEndDev'},
  {label: 'Back End Development', value: 'backEndDev'},
]

export class Skills extends Component {
  constructor(props) {
    super(props);
  }

  openSkillsModal() {


  }

  render() {
    return (
      <FormGroup style={staticStyles.container}>
        <Label style={staticStyles.text}>Add a Skill</Label>
        <Select
        name="skills"
        label="Skills"
        options={topLevelSkills}
        placeholder="Add a Skill"
        />
      </FormGroup>
    );
  }
}

const staticStyles = StyleSheet.create({
  touchableContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c2833'
  },
  text: {
    color: 'white',
  },
  container: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4688DA',
    color: 'white',
    marginBottom: 10,
    borderRadius: 2,
  }
});



export default Skills;
