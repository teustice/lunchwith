import { StyleSheet } from 'react-native';

import colors from '../../lib/colors';

const staticStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  text: {
    color: colors.black,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  calloutImage: {
    height: 150, width: 150, borderRadius: 75,
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
