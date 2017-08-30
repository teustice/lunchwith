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
import ActionCreators from '../../actions/index';
import getCompany from '../../selectors/business';
import getRegion from '../../selectors/region';
import getUserLocation from '../../selectors/userLocation';
import getLunchRadiusMarker from '../../selectors/lunchRadiusMarker';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { styles } from './styles';
import Businesses from '../../components/Places/businesses';
import FormView from '../../components/Forms/basicDetails'

export class OnBoard extends Component {
  render() {
    return (
      <View>
        <FormView
          setRegion={this.props.setRegion}
          markers={this.props.markers}
          initialRegion={this.props.userLocation}
          lunchRadiusMarker={this.props.lunchRadiusMarker}
          setLunchRadiusMarker={this.props.setLunchRadiusMarker}
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
  return {
    company: getCompany(store),
    region: getRegion(store),
    userLocation: getUserLocation(store),
    lunchRadiusMarker: getLunchRadiusMarker(store),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormView);
