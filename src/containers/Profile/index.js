import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ActionCreators from '../../actions/index';
import getTitle from '../../selectors/title';
import positionerStyle from '../../lib/styles/positioner';
import Button from '../../components/Button/index';
import { staticStyles, dynamicStyles } from './styles';

export class Profile extends Component {
  render() {
    return (
      <View style={staticStyles.container}>
        <View style={positionerStyle.centeringFromBottom('20%')}>
          <Button
          text={'edit profile'}
          onPress={() => {
            this.props.navigation.navigate('MapScreen');
          }}
          />
          <Text style={dynamicStyles.getTitle('white')}>{this.props.title}</Text>
          <Image
            source={require('../../lib/images/dev-portrait.jpeg')}
            style={staticStyles.calloutImage}
          ></Image>
        </View>
      </View>
    );
  }
}

Profile.defaultProps = {
  fetchTitle: () => {},
  title: '',
};

Profile.propTypes = {
  fetchTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { title: getTitle(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
