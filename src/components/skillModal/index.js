import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity, TextInput, View, StyleSheet, Dimensions, Image, Switch, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import groupByLetter from '../../lib/helpers/groupByLetter';
import skillSeed from '../../lib/seeds/skillSeed';

class SkillModal extends Component {
  hideModal(){
    this.props.setSkillModal({isOpen: false});
  }

  switchPress(value, skill){
    if(this.props.currentUser.name){
      if(value === false || (!(this.props.currentUser.skills.length >= 3))){
        let newSkills = this.props.currentUser.skills.slice();
        if(value){
          newSkills.push(skill);
          this.props.setCurrentUser({...this.props.currentUser, skills: newSkills});
        } else {
          for(let i=0; i<newSkills.length; i++){
            if(newSkills[i] == skill){
              newSkills.splice(i, 1);
              this.props.setCurrentUser({...this.props.currentUser, skills: newSkills});
              return 0
            }
          }
        }
      }
    }
  }

  isPressed(skill){
    if(this.props.currentUser.name){
      for(let i=0; i<this.props.currentUser.skills.length; i++){
        if(this.props.currentUser.skills[i] == skill){
          return true;
        }
      }
      return false;
    }
  }

  renderSwitch(skill){
    return(
      <View style={{marginRight: '7%'}}>
        <Switch
          value={this.isPressed(skill)}
          onTintColor={'rgb(65,152,240)'}
          onValueChange={(value) => this.switchPress(value, skill)}
        />
      </View>
    )
  }

  renderSkills(){
    let content = [];
    let sections = [];
    let sortedSkills = groupByLetter(this.props.skills);
    let keyCount = 0;
    for (let key in sortedSkills) {
      if (sortedSkills.hasOwnProperty(key) && sortedSkills[key].length >= 1) {
        sections = [];
        for(let i=0; i<sortedSkills[key].length; i++){
          sections.push(
            <View key={`${sortedSkills[key][i]}${i}`} style={staticStyles.timeEntry}>
              <Text style={staticStyles.timeText}>{sortedSkills[key][i]}</Text>
              {this.renderSwitch(sortedSkills[key][i])}
            </View>
          )
        }
        content.push(
          <View key={`${key}${keyCount}`}>
            <View style={staticStyles.dayBanner}>
              <Text style={staticStyles.dayText}>{key.toUpperCase()}</Text>
            </View>
            <View style={{marginBottom: 30}}>
              {sections}
            </View>
          </View>
        )
      }
      keyCount++;
    }

    return(
      <View style={{flex: 1}}>
        {content}
      </View>
    )
  }

  removeTagPress(skill){
    let newSkills = this.props.currentUser.skills.slice();
    for(let i=0; i<newSkills.length; i++){
      if(newSkills[i] == skill){
        newSkills.splice(i, 1);
        this.props.setCurrentUser({...this.props.currentUser, skills: newSkills});
      }
    }
  }

  renderTags(){
    if(this.props.currentUser.name){
      let skills = this.props.currentUser.skills.slice();
      let content = [];
      for(let i=0; i<skills.length; i++){
        content.push(
          <View key={i} style={staticStyles.bubble}>
            <Text style={staticStyles.bubbleText}>{skills[i]}</Text>
            <TouchableHighlight
              style={staticStyles.tagDelete}
              underlayColor={'rgb(65,152,240)'}
              onPress={() => this.removeTagPress(skills[i])}
            >
              <Text style={staticStyles.tagX}>x</Text>
            </TouchableHighlight>
          </View>
        )
      }
      return content;
    }
  }

  filterList(text){
    let inputArray = text.toLowerCase();
    let newSkills = [];
    let allSkills = skillSeed;

    for(let i=0; i<allSkills.length; i++){
      let skillWordArr = allSkills[i].toLowerCase().split('');
      let skillChunk = skillWordArr.slice(0, (inputArray.length));
      if(inputArray == skillChunk.join('')){
          if(!(newSkills.includes(allSkills[i]))){
            newSkills.push(allSkills[i]);
          }
      }
    }
    this.props.setSkills(newSkills);
  }

  tagSection(){
    let tagsPresent;
    if(this.props.currentUser.name && this.props.currentUser.skills.length < 1) {
      tagsPresent = (
        <Text style={staticStyles.subText}>{`Select your 3 top skills`}</Text>
      )
    } else {
      tagsPresent = (
        <View style={{flexDirection: 'row', marginTop: 5}}>
          {this.renderTags()}
        </View>
      )
    }

    return (
      <View style={{width:'100%'}}>
        <TextInput
          style={staticStyles.inputField}
          placeholder={'Match By Keywords'}
          onChangeText={(text) => this.filterList(text)}
        />
        {tagsPresent}
      </View>
    )
  }

  modalContent(){
    return(
      <View>
        <View style={staticStyles.header}>
          <Text style={{alignSelf:'center', fontSize: 20, color: 'white'}}>Top 3 Expertise</Text>
        </View>
        <View style={staticStyles.tagBubbles}>
          {this.tagSection()}
        </View>
        <ScrollView style={staticStyles.inputContainer}>
            {this.renderSkills()}
        </ScrollView>
        <LinearGradient colors={['rgba(255,255,255,0)', 'white', 'white']} style={staticStyles.linearGradient}/>
      </View>
    );
  }

  render() {
    return (
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.props.skillModal.isOpen}
          >
          <View style={staticStyles.container}>
          <TouchableWithoutFeedback onPress={() => this.hideModal()}>
            <View style={staticStyles.container}></View>
          </TouchableWithoutFeedback>
            <View style={staticStyles.modalBackground}>
              {this.modalContent()}
            </View>
          </View>
        </Modal>
    );
  }
}

const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(80, 80, 80, 0.3)',
    shadowColor: 'rgb(150,150,150)',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
    width: '100%',
    height: '100%',
  },
  linearGradient:{
    width: '100%',
    height: 20,
    position: 'absolute',
    marginTop: '154%',
  },
  dayBanner: {
    width: '100%',
    height: 30,
    backgroundColor: 'rgb(65,152,240)',
  },
  inputContainer: {
    height: '72%',
    width: '100%',
  },
  tagBubbles: {
    height: 80,
    flexDirection: 'row',
    marginLeft: '7%',
    marginBottom: 15,
  },
  bubble: {
    borderWidth: 0.5,
    height: 25,
    padding: 5,
    marginRight: 5,
    borderRadius: 20,
    justifyContent:'center',
    flexDirection: 'row',
    borderColor: 'rgb(65,152,240)',
  },
  bubbleText: {
    color: 'rgb(65,152,240)',
    fontFamily:'ProximaNova-Regular',
    marginTop: 2,
    marginLeft: 2,
    fontSize: 12,
  },
  tagDelete: {
    width:18,
    height:18,
    marginLeft: 10,
    marginRight: -1,
    marginTop: -2,
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: 'rgb(65,152,240)',
    // justifyContent:'center',
  },
  tagX: {
    // justifyContent:'center',
    alignSelf:'center',
    color: 'rgb(65,152,240)',
    fontFamily:'ProximaNova-Regular',
  },
  inputField: {
    color: 'grey',
    fontSize: 12,
    height: 20,
    marginTop: 20,
    marginBottom: 10,
    width: '85%',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    // marginLeft: '5%',
  },
  subTextContainer: {
    marginTop: 10,
    width: '85%',
    marginLeft: '7%',
  },
  subText: {
    color: 'grey',
    fontSize: 12,
    height: 20,
    marginTop: 10,
    // marginLeft: '5%',
  },
  header: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'rgb(65,152,240)',
  },
  timeEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  timeText: {
    marginLeft: '8%',
    marginTop: 10,
    fontFamily: 'ProximaNova-Regular',
  },
  dayText: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 18,
    marginLeft: '8%',
    marginTop: 6,
    color: 'white',
    justifyContent: 'center'
  },
  modalBackground: {
    height:('85%'),
    width:('95%'), //gap between slides
    marginTop: '10%',
    backgroundColor: 'rgb(255, 255, 255)',
    elevation: 1,
  },
  input: {
    fontSize: 15,
    width: Dimensions.get('window').width * 1/2,
    paddingBottom: 5,
    borderBottomWidth: 1,
    marginBottom: 20,
    borderColor: 'grey',
    alignSelf: 'center'
  },
  submitButton: {
    fontSize: 20,
    color: 'grey',
    alignSelf: 'center',
    marginTop: 23
  },
  toggleButton: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: 'rgb(65,152,240)',
    backgroundColor: 'white',
  },
  toggleButtonSelected: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: 'rgb(65,152,240)',
    backgroundColor: 'rgb(65,152,240)',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 35,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topBorder: {
    borderTopWidth: 1,
    borderColor: 'grey',
    width: '30%',
    alignSelf: 'center'
  },
  buttonTime: {
    alignSelf: 'center',
    marginTop: 15,
    color: 'rgb(65,152,240)',
    fontSize: 14,
  },
  buttonTimeSelected: {
    alignSelf: 'center',
    marginTop: 15,
    color: 'white',
    fontSize: 14,
  },
  absolute: {
    backgroundColor: 'rgba(0,0,0,0)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
});

export default SkillModal;
