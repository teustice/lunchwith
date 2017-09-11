import React, { Component } from 'react';
import { Modal, Picker, Text, TouchableHighlight, TouchableWithoutFeedback, View, StyleSheet, Dimensions, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const timeOptions = [
  {label: '11:00am', value: '0'},
  {label: '12:00pm', value: '1'},
  {label: '1:00pm', value: '2'}
]




export class MapFilter extends Component {
  constructor(props) {
    super(props);
  }

  getInitialState() {
    return {
      time: [0,1,2,3,4,5,6,7,8,9,10],
    };
  }

  state = {
    modalVisible1: false,
    placeHolderVisible: true,
  }

  setModalVisible1(visible) {
    this.setState({modalVisible1: visible});
  }

  setPlaceHolderVisible(visible) {
    this.setState({placeHolderVisible: visible})
  }

  onValueChange(value: string, key: string) {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  }


  render() {
    return (

      <LinearGradient colors={['white','white','rgba(255,255,255,0)']} style={staticStyles.linearGradient}>
      <View style={staticStyles.filterBox}>

          <Text style={staticStyles.filterText}>Devs &</Text>
          <Text style={staticStyles.filterText}>Designers</Text>

          <View style={{position:'absolute', paddingTop: 100, paddingLeft: 20}}>

              <Text style={staticStyles.filterAvailability}>Available between</Text>

              <TouchableWithoutFeedback
                onPress={() => {
                  this.setModalVisible1(true)
                  this.setPlaceHolderVisible(false)
                }}
              >
                <View
                  visible={this.state.placeHolderVisible}
                  style={{position:'absolute', paddingTop: 100, paddingLeft: 125}}>
                  { this.state.placeHolderVisible &&
                    <Text  style={staticStyles.time1}>10:00am and 3:00pm</Text>
                  }
                </View>
              </TouchableWithoutFeedback>

          </View>



        </View>
        <Modal
        animationType={"none"}
        transparent={true}
        visible={this.state.modalVisible1}
        style={staticStyles.mapBlur}>
          <Picker
          selectedValue={this.state.time}
          style={staticStyles.picker1}
          itemStyle={{fontSize: 12, fontFamily: 'ProximaNova-Regular', color: 'rgb(65,152,240)'}}
          onValueChange={(itemValue, itemIndex) => this.setState({time: itemValue})}>
            <Picker.Item label="10:00am" value='0' style={{color: '#0000ff'}} />
            <Picker.Item label="10:30am" value='1' style={{color: '#0000ff'}}/>
            <Picker.Item label="11:00am" value='2' style={{color: '#0000ff'}}/>
            <Picker.Item label="11:30am" value='3' style={{color: '#0000ff'}}/>
            <Picker.Item label="12:00pm" value='4' style={{color: '#0000ff'}}/>
            <Picker.Item label="12:30pm" value='5' style={{color: '#0000ff'}}/>
            <Picker.Item label="1:00pm" value='6' style={{color: '#0000ff'}}/>
            <Picker.Item label="1:30pm" value='7' style={{color: '#0000ff'}}/>
            <Picker.Item label="2:00pm" value='7' style={{color: '#0000ff'}}/>
            <Picker.Item label="2:30pm" value='9' style={{color: '#0000ff'}}/>
            <Picker.Item label="3:00pm" value='10' style={{color: '#0000ff'}}/>
          </Picker>
          <Picker
          selectedValue={this.state.time}
          style={staticStyles.picker2}
          itemStyle={{fontSize: 12, fontFamily: 'ProximaNova-Regular', color: 'rgb(65,152,240)'}}
          onValueChange={(itemValue, itemIndex) => this.setState({time: itemValue})}>
            <Picker.Item label="10:30am" value='1' style={{color: '#0000ff', height: 10}}/>
            <Picker.Item label="11:00am" value='2' style={{color: '#0000ff'}}/>
            <Picker.Item label="11:30am" value='3' style={{color: '#0000ff'}}/>
            <Picker.Item label="12:00pm" value='4' style={{color: '#0000ff'}}/>
            <Picker.Item label="12:30pm" value='5' style={{color: '#0000ff'}}/>
            <Picker.Item label="1:00pm" value='6' style={{color: '#0000ff'}}/>
            <Picker.Item label="1:30pm" value='7' style={{color: '#0000ff'}}/>
            <Picker.Item label="2:00pm" value='7' style={{color: '#0000ff'}}/>
            <Picker.Item label="2:30pm" value='9' style={{color: '#0000ff'}}/>
            <Picker.Item label="3:00pm" value='10' style={{color: '#0000ff'}}/>
            <Picker.Item label="3:30am" value='0' style={{color: '#0000ff'}} />
          </Picker>
        </Modal>
      </LinearGradient>

    );
  }
}


const staticStyles = StyleSheet.create({
  linearGradient:{
    // flex: 1,
    width: '100%',
    height: 175,
    position: 'absolute',


  },
  filterBox:{
    paddingTop: 25,
    paddingLeft: 20,
    backgroundColor: 'white',

  },

  filterText:{
    fontFamily: 'ProximaNovaT-Thin',
    fontSize: 36,
    lineHeight: 35,
    color: 'grey',
    fontWeight: '100',
  },
  filterAvailability:{
    fontFamily: 'ProximaNova-Regular',
    color: 'rgb(180,180,180)',
    fontSize: 12,
    paddingTop: 0,
  },
  mapBlur:{
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  picker1: {
    width: 65,
    marginLeft: 116,
    marginTop: -1
  },
  picker2: {
    width: 65,
    marginLeft: 185,
    marginTop: -216,
  },
  time1: {
    width: 120,
    fontSize: 12,
    color: 'rgb(65,152,240)',
    fontFamily: 'ProximaNova-Regular',
  },
});

export default MapFilter;
