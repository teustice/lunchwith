import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar
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
import getLunchRadiusSlider from '../../selectors/lunchRadiusSlider';
import getExperienceSlider from '../../selectors/experienceSlider';
import getSkills from '../../selectors/skills';
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
        <StatusBar hidden={true} />
        <FormView
          markers={this.props.markers}
          initialRegion={this.props.userLocation}
          lunchRadiusMarker={this.props.lunchRadiusMarker}
          setLunchRadiusMarker={this.props.setLunchRadiusMarker}
          lunchRadiusSlider={this.props.lunchRadiusSlider}
          setLunchRadiusSlider={this.props.setLunchRadiusSlider}
          setBusiness={this.props.setBusiness}
          setExperienceValue={this.props.setExperienceSlider}
          experienceSlider={this.props.experienceSlider}
          skills={this.props.skills}
          setSkills={this.props.setSkills}
        />
      </View>
    );
  }
}

FormView.defaultProps = {

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
    lunchRadiusSlider: getLunchRadiusSlider(store),
    experienceSlider: getExperienceSlider(store),
    skills: getSkills(store),
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(FormView);
