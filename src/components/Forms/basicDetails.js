import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Slider,
  ScrollView,
  StatusBar,
  Dimensions,
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
import RadiusMap from './radiusMap';
import RadiusSlider from './radiusSlider';

const onSubmit = (values, dispatch) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(values)
      resolve()
    }, 1500)
  })
}

export class FormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: 0,
      skills: [],
      monday: [1, 5],
      tuesday: [1, 5],
      wednesday: [1, 5],
      thursday: [1, 5],
      friday: [1, 5],
      saturday: [1, 5],
      sunday: [1, 5],
    };
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    const experience = this.state.experience;
    let _onboardCarousel: ScrollView;
    return (
      <Form>
      <StatusBar hidden={true} />
        <ScrollView
          ref={(scrollView) => { _onboardCarousel = scrollView; }}
          horizontal={true}
          pagingEnabled={true}
          scrollEnabled={false}
        >
          <View style={styles.formScreen}>
            <FieldsContainer style={styles.formContainer}>
            <Text style={styles.label}>A Little About Yourself</Text>

                <TextInput style={styles.input} placeholder="First Name" name="first_name" />
                <TextInput style={styles.input} placeholder="Last Name" name="last_name"/>

              <TouchableOpacity
              onPress={() => { _onboardCarousel.scrollTo({x: Dimensions.get('window').width})}}
              >
              <Text>Next</Text>
              </TouchableOpacity>
            </FieldsContainer>

          </View>
          <View style={styles.formScreen}>
            <Text>Filler here</Text>
            <TouchableOpacity
              onPress={() => { _onboardCarousel.scrollTo({x: Dimensions.get('window').width * 2})}}
            >
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formScreen}>
            <RadiusMap
              lunchRadiusMarker={this.props.lunchRadiusMarker}
              setLunchRadiusMarker={this.props.setLunchRadiusMarker}
              lunchRadiusSlider={this.props.lunchRadiusSlider}
              initialRegion={this.props.userLocation}
            />
            <RadiusSlider
              lunchRadiusSlider={this.props.lunchRadiusSlider}
              setLunchRadiusSlider={this.props.setLunchRadiusSlider}
            />
            <ActionsContainer>
              <Button icon="md-checkmark" iconPlacement="right"  onPress={handleSubmit(onSubmit)} submitting={submitting}>Save</Button>
            </ActionsContainer>
          </View>
        </ScrollView>
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
  formScreen: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white'
  },
  input: {
    fontSize: 20,
    width: Dimensions.get('window').width * 1/2,
    paddingBottom: 5,
    borderBottomWidth: 1,
    marginBottom: 10,
    borderColor: 'grey',
    alignSelf: 'center'
  },
  label: {
    fontSize: 25,
    color: 'grey',
    alignSelf: 'center',
    marginBottom: 10
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -80,
  }
});



export default reduxForm({
  form: 'Form',

})(FormView)
