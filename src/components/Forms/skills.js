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

const SKILLS = {"results": [{"title": "Javascript", "id": "1"}, {"title": "Ruby", "id": "2"}]};

class Skills extends Component {

  static renderSkill(skill) {
    const { title, id } = skill;

    return (
      <View>
        <Text style={styles.titleText}>{title}, {id}</Text>
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
    const { "results": skills } = SKILLS;
    this.setState({ skills });
    console.log(this.state);
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
    const { query } = this.state;
    const skills = this.findSkill(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return(
    <View>
      <Autocomplete
        style={styles.container}
        data={skills.length === 1 && comp(query, skills[0].title) ? [] : skills}
        defaultValue={query}
        placeholder={"   Enter a Skill"}
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
          ): null
      }
      </View>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'lightgrey',
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
