import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
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


const radii = [
  {label: '1 mi', value: '1'},
  {label: '3 mi', value: '3'},
  {label: '5 mi', value: '5'},
  {label: '10 mi', value: '10'},
]

export class FormView extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    
    return (
      <Form>
        <FieldsContainer>
          <Fieldset label="Contact details">
            <FormGroup>
              <Label>First name</Label>
              <Input placeholder="John" />
            </FormGroup>
            <FormGroup>
              <Label>Last name</Label>
              <Input placeholder="Doe" />
            </FormGroup>
            <FormGroup>
              <Label>Company</Label>
              <Businesses setBusiness={this.props.setBusiness} company={this.props.company.name} style={{left: '30px'}} />
            </FormGroup>
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
            placeholder="1"
            />
            </FormGroup>
            <FormGroup>
              <Label>Bio</Label>
              <Input placeholder="Say something about yourself!" />
            </FormGroup>
            <ActionsContainer>
              <Button>Add a Skill</Button>
            </ActionsContainer>

          </Fieldset>
        </FieldsContainer>
        <ActionsContainer>
          <Button icon="md-checkmark" iconPlacement="right">Save</Button>
        </ActionsContainer>
      </Form>
    )
  }
}


export default FormView;
