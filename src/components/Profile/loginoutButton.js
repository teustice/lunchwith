import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const LoginButton = (props) => {
  const style = styles[props.type];
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={style.container}
    >
      <Text style={style.text}>Login</Text>
    </TouchableOpacity>
  );
}

const LogoutButton = (props) => {
  const style = styles[props.type];
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={style.container}
    >
      <Text style={style.text}>Logout</Text>
    </TouchableOpacity>
  );
}

LoginButton.defaultProps = {
  type: 'standard',
  onPress: () => {},
  text: '',
};

LoginButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
};

LogoutButton.defaultProps = {
  type: 'standard',
  onPress: () => {},
  text: '',
};

LogoutButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export { LoginButton, LogoutButton };
