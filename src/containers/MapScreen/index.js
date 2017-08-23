import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import positionerStyle from '../../lib/styles/positioner';

import Map from '../../components/Map/index';
import Places from '../../components/Places';

import { connect } from 'react-redux';
import ActionCreators from '../../actions/index';
import getRegion from '../../selectors/region';
import getMarkers from '../../selectors/markers';

export class MapScreen extends Component {
  render() {
    return (
      <View>
        <Map setRegion={this.props.setRegion} region={this.props.region} markers={this.props.markers}/>
      </View>
    );
  }
}

MapScreen.defaultProps = {
  setRegion: () => {},
  fetchMarkers: () => {},
  region: {}
};

MapScreen.propTypes = {
  setRegion: PropTypes.func.isRequired,
  fetchMarkers: PropTypes.func.isRequired,
  region: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { region: getRegion(store), markers: getMarkers(store)};
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
