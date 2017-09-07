import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableWithoutFeedback, View, StyleSheet, Dimensions, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export class MapFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LinearGradient colors={['white','white','rgba(255,255,255,0)']} style={staticStyles.linearGradient}>
      <View style={staticStyles.filterBox}>
          <Text style={staticStyles.filterText}>Devs &</Text>
          <Text style={staticStyles.filterText}>Designers</Text>
          <Text style={staticStyles.filterAvailability}>Available between time[0] and time[1]</Text>
        </View>
      </LinearGradient>
    );
  }
}


const staticStyles = StyleSheet.create({
  linearGradient:{
    // flex: 1,
    width: '100%',
    height: 200,

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
    fontFamily: 'Helvetica',
    color: 'rgb(180,180,180)',
    fontSize: 16,
    paddingTop: 10,
  },
});

export default MapFilter;
