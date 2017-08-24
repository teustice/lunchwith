import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Layout
} from 'react-native'



import { Field, reduxForm } from 'redux-form'
import Businesses from '../../components/Places/businesses';
import ActionCreators from '../../actions/index';
import getCompany from '../../selectors/business';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { staticStyles } from './styles';

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


const Form = props => {
  const { handleSubmit } = props

  return (
    <View style={staticStyles.container}>
      <Text style={styles.text}>Email</Text>
      <Field name="email" component={renderInput} />
      <TouchableOpacity onPress={handleSubmit(submit)}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 550
  },
  text: {
    color: 'lightgrey',
  },
  input: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderTopWidth: 0,
    height: 37,
    width: 550
  }
})



Form.defaultProps = {
  setBusiness: () => {},
  company: {}
};

Form.propTypes = {
  setBusiness: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { company: getCompany(store) };
}

export default reduxForm({
  form: 'test'
})(Form)
