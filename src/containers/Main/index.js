import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import positionerStyle from '../../lib/styles/positioner';
import Map from '../../components/Map/index';

export class Main extends Component {
  render() {
    return (
      <View>
        <Map />
      </View>
    );
  }
}

export default Main;
