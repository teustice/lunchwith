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
} from 'react-native-clean-form'
import {
  Input,
  Select,
  Switch
} from 'react-native-clean-form/redux-form-immutable'
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

const onSubmit = (values, dispatch) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(values)
      resolve()
    }, 1500)
  })
}


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

  componentDidMount() {}

  render() {
    const { handleSubmit, submitting } = this.props

    return (
      <Form>
        <FieldsContainer style={{marginTop: 20}}>
          <Fieldset label="Contact details">
            <Input label="First name" placeholder="John" name="first_name" />
            <Input label="Last name" placeholder="Doe" name="last_name"/>
            <Businesses setBusiness={this.props.setBusiness} company={this.props.company.name} name="company_name"  />
            <Input label="Job Title" name="job_title" placeholder="Backend Developer" />
            <Select
            name="radius"
            label="Lunch Radius"
            options={radii}
            placeholder="1 mile"
            />
            <Input name="bio" label="Bio" placeholder="Say something about yourself!"  multiline={true} numberOfLines={2}/>
            <Skills name="experience"/>
            <Label>Total Tech Experience (years)</Label>
            <ExperienceSlider />
            <Text style={styles.title}>Lunch Availability</Text>
            <Label>Monday</Label>
            <MultiSliderUse name="monday"/>
            <Label>Tuesday</Label>
            <MultiSliderUse />
            <Label>Wednesday</Label>
            <MultiSliderUse />
            <Label>Thursday</Label>
            <MultiSliderUse />
            <Label>Friday</Label>
            <MultiSliderUse />
            <Label>Saturday</Label>
            <MultiSliderUse />
            <Label>Sunday</Label>
            <MultiSliderUse />

          </Fieldset>
        </FieldsContainer>
        <ActionsContainer>
          <Button icon="md-checkmark" iconPlacement="right"  onPress={handleSubmit(onSubmit)} submitting={submitting}>Save</Button>
        </ActionsContainer>
      </Form>
    )
  }
}



var styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: 'grey',
    paddingVertical: 20,
    alignSelf: 'flex-start',
  },
});



export default reduxForm({
  form: 'Form',

})(FormView)
