import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Button = (props) => {
  const style = styles[props.type];

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={style.container}
    >
      <Text style={style.text}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  type: 'standard',
  onPress: () => {},
  text: '',
};

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Button;
