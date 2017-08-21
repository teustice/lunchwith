import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ActionCreators from '../../actions/index';
import getTitle from '../../selectors/title';
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

Main.defaultProps = {
  fetchTitle: () => {},
  title: '',
};

Main.propTypes = {
  fetchTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { title: getTitle(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
