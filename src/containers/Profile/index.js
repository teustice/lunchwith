import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ActionCreators from '../../actions/index';
import getTitle from '../../selectors/title';
import positionerStyle from '../../lib/styles/positioner';
import Button from '../../components/Button/index';
import { staticStyles, dynamicStyles } from './styles';

export class Splash extends Component {
  render() {
    return (
      <View style={staticStyles.container}>
        <Text style={dynamicStyles.getTitle('white')}>{this.props.title}</Text>
        <View style={positionerStyle.centeringFromBottom('20%')}>
          <Button
            text={'Fetch Remote Title'}
            type={'standard'}
            onPress={() => {
              this.props.fetchTitle();
            }}
          />
          <Button
            text={'Go to map'}
            onPress={() => {
              this.props.navigation.navigate('Main');
            }}
          />
        </View>
      </View>
    );
  }
}

Splash.defaultProps = {
  fetchTitle: () => {},
  title: '',
};

Splash.propTypes = {
  fetchTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { title: getTitle(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(Splash);
