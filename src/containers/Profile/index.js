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
import profileData from '../../lib/seeds/profileData'

export class Profile extends Component {
  render() {
    return (

      <View style={staticStyles.container}>
        <View style={positionerStyle.centeringFromBottom('50%')}>
          <Button
          text={'edit profile'}
          onPress={() => {
            this.props.navigation.navigate('MapScreen');
          }}
          />
          <Image
            source={require('../../lib/images/dev-portrait.jpeg')}
            style={staticStyles.calloutImage}
          ></Image>
          <Text>{profileData[0].name}</Text>
          <Text>{profileData[0].employer}</Text>
          <Text>{profileData[0].bio}</Text>
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
