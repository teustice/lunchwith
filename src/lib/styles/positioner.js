export default {
  centeringFromBottom(bottom = 0) {
    return {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom,
      alignItems: 'center',
      justifyContent: 'center',
    };
  },
};
