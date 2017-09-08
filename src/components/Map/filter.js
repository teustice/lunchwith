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
    modalVisible2: false,
  }

  setModalVisible1(visible) {
    this.setState({modalVisible1: visible});
  }

  setModalVisible2(visible) {
    this.setState({modalVisible2: visible});
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


            <Text style={staticStyles.filterAvailability}>Available between</Text>

            <TouchableWithoutFeedback
              onPress={() => {
                this.setModalVisible1(true)
              }}
            ><View><Text  style={staticStyles.time1}>11:00am and 3:00pm</Text></View></TouchableWithoutFeedback>



        </View>
        <Modal
        animationType={"slide"}
        transparent={true}
        visible={this.state.modalVisible1}
        style={staticStyles.mapBlur}>
          <Picker
          selectedValue={this.state.time}
          style={staticStyles.picker1}
          itemStyle={{fontSize: 12, fontFamily: 'ProximaNova-Regular', color: 'grey'}}
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
          itemStyle={{fontSize: 12, fontFamily: 'ProximaNova-Regular', color: 'grey'}}
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

        <Modal
        animationType={"slide"}
        transparent={true}
        visible={this.state.modalVisible2}
        style={staticStyles.mapBlur}>
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

  },
  filterBox:{
    paddingTop: 25,
    paddingLeft: 20,
    backgroundColor: 'rgba(255,255,155,0)',
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
    width: 100,
    marginLeft: 80,
  },
  picker2: {
    width: 80,
    marginLeft: 250,
    marginTop: -217,
  },
  time1: {
    fontSize: 12,
    color: 'grey',
    fontFamily: 'ProximaNova-Regular',
  },
});

export default MapFilter;
