import { StyleSheet } from 'react-native';

import colors from '../../lib/colors';

const staticStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.black,
  },
});


const dynamicStyles = {
  getTitle: color => (
    {
      color: colors.black,
      fontSize: 25,
    }
  ),
};

export { staticStyles, dynamicStyles };
