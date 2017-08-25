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
import Businesses from '../../components/Places/businesses';
import ActionCreators from '../../actions/index';
import getCompany from '../../selectors/business';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { styles } from './styles';
import FormView from '../../components/Forms/basicDetails'

const radii = [
  {label: '1 mi', value: '1'},
  {label: '3 mi', value: '3'},
  {label: '5 mi', value: '5'},
  {label: '10 mi', value: '10'},
]

export class OnBoard extends Component {
  render() {
    return (
      <View>
        <FormView
          setBusiness={this.props.setBusiness}
        />
      </View>
    );
  }
}

FormView.defaultProps = {
  setFirstName: () => {},
  setLastName: () => {},
  setBusiness: () => {},
  setJobTitle: () => {},
  setLunchRadius: () => {},
  setBio: () => {},
  setExperienceValue: () => {},
  experienceValue: 0,
  company: {},
  firstName: {},
  lastName: {},
  jobTitle: {},
  lunchRadius: {},
  bio: {},
};

FormView.propTypes = {
  setBusiness: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { company: getCompany(store) };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormView);
