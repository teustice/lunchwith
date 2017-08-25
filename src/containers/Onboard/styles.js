import { StyleSheet } from 'react-native';

import colors from '../../lib/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  button: {
    backgroundColor: 'yellow',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
  },
  text: {
    color: 'lightgrey',
    alignSelf: 'stretch',
    textAlign: 'left',
  },
  input: {
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
    marginBottom: 12,
    height: 37,
    alignSelf: 'stretch',
    textAlign: 'center',
  }
})


const dynamicStyles = {
  getTitle: color => (
    {
      color: colors.black,
      fontSize: 25,
    }
  ),
};

export { styles, dynamicStyles };
