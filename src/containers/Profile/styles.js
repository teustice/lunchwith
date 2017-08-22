import { StyleSheet } from 'react-native';

import colors from '../../lib/colors';

const staticStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const dynamicStyles = {
  getTitle: color => (
    {
      color: colors[color],
      fontSize: 25,
    }
  ),
};

export { staticStyles, dynamicStyles };
