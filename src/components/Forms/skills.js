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
} from 'react-native-clean-form';
import { Field, reduxForm, Picker } from 'redux-form';
import Autocomplete from 'react-native-autocomplete-input';
import SKILLS from '../../lib/seeds/skillSeed';

class Skills extends Component {

  handleChange(skill) {
     return {
       value: this.props.onSkillsChange(skill)
     };
   }

// Only renders as a placeholder the current most likely skill from suggested skills
  static renderSkill(skill) {
    const { title, id } = skill;
    console.log("skills: " + this.props);
    return (
      <View>
        <Text style={styles.titleText}
        {...this.props} >
          {title}
          {this.props.skillsProp} skills
        </Text>
      </View>
    );
  }

// Displays list of skills belonging to currentSkills state
  static renderSkills(skills, index) {
    console.log("skills: " + skills);
    return (<View>
              <Text style={styles.listHead}>Your Skills</Text>
              {skills.map((skill, index) =>
                <View>
                  <Text key={index} style={styles.titleText}>{skill}</Text>
                </View>

              )}
            </View>);
  }



  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      currentSkills: [],
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { "results": skills } = SKILLS;
    this.setState({ skills });
  }

  findSkill(query) {
    if (query === '') {
      return [];
    }
    // slicedQuery adjusts the suggestions dropdown so that full values do not cause suggestions to disappear
    const slicedQuery = query.split('').pop()
    const { skills } = this.state;
    const regex = new RegExp(`${slicedQuery.trim()}`, 'i');
    return skills.filter(skill => skill.title.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const skills = this.findSkill(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    console.log("just above autocomplete: " + this.props.skillsProp);
    return(
    <View>
      <Autocomplete
        style={styles.container}
        data={skills.length === 1 && comp(query, skills[0].title) ? [] : skills}
        defaultValue={query}
        placeholder={"   Enter a Skill"}
        onChangeText={text => this.setState({ query: text })}

        renderItem={({ title }) => (
          <TouchableOpacity
            onFocus={() =>
              {this.setState({ query: title })}}
            onPress={() =>
              {this.handleChange(title),
              this.setState({
              query: '' })}}>
            <Text style={styles.itemText}>{title}</Text>
          </TouchableOpacity>
        )}
      />


      <View style={styles.descriptionContainer}>
        {skills.length > 0 ? (
            <Text></Text>
        ): null
        }
      </View>


      <View style={styles.descriptionContainer}>
        {this.props.skillsProp.length > 0 ? (
          Skills.renderSkills(this.props.skillsProp)
        ): null
        }
      </View>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderRadius: 2,
    height: 35,
    fontSize: 12,
  },
  autocompleteContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  itemText: {
    fontSize: 12,
    margin: 2,
  },
  descriptionContainer: {
    marginVertical: 5,

  },
  infoText: {
    textAlign: 'center'
  },
  titleText: {
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  listHead: {
    fontSize: 12,
    color: 'lightgrey',
  },
});

export default Skills;
