import React from 'react'
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
import Businesses from '../../components/Places/businesses';

const submit = values => {
  console.log('submitting form', values)
}

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}

const radii = [
  {label: '1 mi', value: '1'},
  {label: '3 mi', value: '3'},
  {label: '5 mi', value: '5'},
  {label: '10 mi', value: '10'},
]

const FormView = props => (
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
          <Businesses />

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
      </Fieldset>
    </FieldsContainer>
    <ActionsContainer>
      <Button icon="md-checkmark" iconPlacement="right">Save</Button>
    </ActionsContainer>
  </Form>
)

export default FormView
