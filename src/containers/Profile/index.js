import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ActionCreators from '../../actions/index';
import positionerStyle from '../../lib/styles/positioner';
import Button from '../../components/Button/index';
import { staticStyles, dynamicStyles } from './styles';
import profileData from '../../lib/seeds/profileData';
import Bio from '../../components/Profile/bio';
import getUser from '../../selectors/user';

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

        </View>
        <View>
          <Bio setUser={this.props.setUser} />
        </View>
      </View>
    );
  }
}

Profile.defaultProps = {
  fetchUser: () => {},
  user: {},
};

Profile.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapDispatchToProps)(Profile);
