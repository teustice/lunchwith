import { StyleSheet } from 'react-native';


const staticStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  text: {
    color: 'black',
  },
  calloutImage: {
    height: 150, width: 150, borderRadius: 75,
  },
});

export { staticStyles };
