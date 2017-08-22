import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

export class MarkerCallout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={staticStyles.calloutContainer}>
        <Image
          source={require('../../lib/images/hass.jpeg')}
          style={staticStyles.calloutImage}
        >
        </Image>
        <Text style={staticStyles.calloutName}>{this.props.calloutTitle}</Text>
      </View>
    );
  }
}

MarkerCallout.propTypes = {
  calloutTitle: PropTypes.string.isRequired,
};

const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calloutContainer: {
    height: 100,
    width: 100,
  },
  calloutImage: {
    height: 80, width: 100
  },
  calloutName: {
    color: 'black',
    alignItems:'center'
  },
});

export default MarkerCallout;
