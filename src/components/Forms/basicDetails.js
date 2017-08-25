import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Slider
} from 'react-native'
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
import { Field, reduxForm } from 'redux-form'
import Businesses from '../Places/businesses';
import ActionCreators from '../../actions/index';
import getCompany from '../../selectors/business';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Skills from './skills';
import ExperienceSlider from './slider';
import MultiSliderUse from './multislider';


const radii = [
  {label: '1 mile', value: '1'},
  {label: '3 miles', value: '3'},
  {label: '5 miles', value: '5'},
  {label: '10 miles', value: '10'},
]

export class FormView extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <Form>
        <FieldsContainer style={{marginTop: 20}}>
          <Fieldset label="Contact details">
            <FormGroup>
              <Label>First name</Label>
              <Input placeholder="John" />
            </FormGroup>
            <FormGroup>
              <Label>Last name</Label>
              <Input placeholder="Doe" />
            </FormGroup>

              <Businesses setBusiness={this.props.setBusiness} company={this.props.company.name} />

            <FormGroup>
            <Label>Job Title</Label>
              <Input placeholder="Backend Developer" />
            </FormGroup>
            <FormGroup>
            <Label>Lunch Radius</Label>
            <Select
            name="radius"
            label="Radius"
            options={radii}
            placeholder="1 mile"
            />
            </FormGroup>
            <FormGroup>
              <Label>Bio</Label>
              <Input placeholder="Say something about yourself!" />
            </FormGroup>
            <Skills/>

            <Label>Experience (years)</Label>
            <ExperienceSlider/>
            <MultiSliderUse />
          </Fieldset>
        </FieldsContainer>
        <ActionsContainer>
          <Button icon="md-checkmark" iconPlacement="right">Save</Button>
        </ActionsContainer>
      </Form>
    )
  }
}

OnButtonPress = () => {
    this.props.navigator.push({
      id: 'ScreenSecond'
    })
}


export default FormView;
