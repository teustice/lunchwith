import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableWithoutFeedback, View, StyleSheet, Dimensions, Image } from 'react-native';


export class ProfileImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Image
        style={staticStyles.carouselImage}
        source={{uri: this.props.profile.profileImage}}
        />
      </View>
    );
  }
}

const staticStyles = StyleSheet.create({
  carouselImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignSelf: 'flex-end',
    marginRight: 9,
    marginTop: -20,
    zIndex: 500,
  },
});

export default ProfileImage;
