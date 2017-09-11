import React, { Component } from 'react';
import { Modal, Picker, Text, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, View, StyleSheet, Dimensions, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export class MapFilter extends Component {
  constructor(props) {
    super(props);
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

  displayAvailabilityStartToTime() {
    start = this.props.availabilityFilter.timeStart;
    if (start === '10') {
      return '10:00am';
    } else if (start === '11'){
      return '11:00am';
    } else if (start === '12'){
      return '12:00pm';
    } else {
      return '1:00pm';
    };
  }

  displayAvailabilityEndToTime() {
    end = this.props.availabilityFilter.timeEnd;
    if (end === '11') {
      return '11:00am';
    } else if (end === '12'){
      return '12:00pm';
    } else if (end === '1'){
      return '1:00pm';
    } else {
      return '2:00pm';
    };
  }

  render() {
    return (

      <LinearGradient colors={['white', 'white', 'rgba(255,255,255,0)']} style={staticStyles.linearGradient}>
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
                    <Text  style={staticStyles.time1}>{this.displayAvailabilityStartToTime()} and {this.displayAvailabilityEndToTime()}</Text>
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
          <TouchableWithoutFeedback
            onPress={() => {
              this.setModalVisible1(false)
              this.setPlaceHolderVisible(true)
            }}
          >
            <View>
              <Picker
                selectedValue={this.props.availabilityFilter.timeStart}
                style={staticStyles.picker1}
                itemStyle={{fontSize: 12, fontFamily: 'ProximaNova-Regular', color: 'rgb(65,152,240)'}}
                onValueChange={(itemValue, itemIndex) => this.props.setAvailabilityFilter({ ...this.props.availabilityFilter, timeStart: itemValue})}
              >
                <Picker.Item label="10:00am" value='10' style={{color: '#0000ff'}} />
                <Picker.Item label="11:00am" value='11' style={{color: '#0000ff'}}/>
                <Picker.Item label="12:00pm" value='12' style={{color: '#0000ff'}}/>
                <Picker.Item label="1:00pm" value='1' style={{color: '#0000ff'}}/>
              </Picker>
              <Picker
                selectedValue={this.props.availabilityFilter.timeEnd}
                style={staticStyles.picker2}
                itemStyle={{fontSize: 12, fontFamily: 'ProximaNova-Regular', color: 'rgb(65,152,240)'}}
                onValueChange={(itemValue, itemIndex) => this.props.setAvailabilityFilter({ ...this.props.availabilityFilter, timeEnd: itemValue})}
              >
                <Picker.Item label="11:00am" value='11' style={{color: '#0000ff'}}/>
                <Picker.Item label="12:00pm" value='12' style={{color: '#0000ff'}}/>
                <Picker.Item label="1:00pm" value='1' style={{color: '#0000ff'}}/>
                <Picker.Item label="2:00pm" value='2' style={{color: '#0000ff'}}/>
              </Picker>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </LinearGradient>

    );
  }
}


const staticStyles = StyleSheet.create({
  linearGradient:{
    width: '100%',
    height: 175,
    position: 'absolute',
  },
  filterBox:{
    paddingTop: 25,
    paddingLeft: 20,
    backgroundColor: 'rgba(255,255,255,0)',

  },

  filterText:{
    fontFamily: 'ProximaNovaT-Thin',
    fontSize: 36,
    lineHeight: 35,
    color: 'grey',
    fontWeight: '100',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  filterAvailability:{
    fontFamily: 'ProximaNova-Regular',
    backgroundColor: 'rgba(255,255,255,0)',
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
