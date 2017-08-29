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
} from 'react-native-clean-form'
import { Field, reduxForm, Picker } from 'redux-form'
import Autocomplete from 'react-native-autocomplete-input';

const SKILLS = {"results": [{"title": "Javascript"}, {"title": "Ruby"}]};

class Skills extends Component {

  static renderSkill(skill) {
    const { title } = skill;

    return (
      <View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      query: ''
    };
  }

  componentDidMount() {
    const { 'results': skills } = SKILLS;
    this.setState({ skills });
    console.log(this.state);
    console.log(SKILLS);
  }

  findSkill(query) {
    if (query === '') {
      return [];
    }

    const { skills } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return skills.filter(skill => skill.title.search(regex) >= 0);
  }

  render() {
    console.log("why " + SKILLS.results);
    const { query } = this.state;
    const skills = this.findSkill(query);
    return(
    <View>
      <Autocomplete
        data={skills}
        defaultValue={query}
        onChangeText={text => this.setState({ query: text })}
        renderItem={({ title }) => (
          <TouchableOpacity onPress={() => this.setState({ query: title })}>
            <Text style={styles.itemText}>{title}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.descriptionContainer}>
        {skills.length > 0 ? (
          Skills.renderSkill(skills[0])
        ) : (
          <Text style={styles.infoText}>
            Enter a Skill
          </Text>
        )}
      </View>
    </View>)
  }

}

const staticStyles = StyleSheet.create({
  touchableContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c2833'
  },
  text: {
    color: 'white',
  },
  container: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4688DA',
    color: 'white',
    marginBottom: 10,
    borderRadius: 2,
  }
});



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 25
  },
  autocompleteContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 8
  },
  infoText: {
    textAlign: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  }
});



export default Skills;
