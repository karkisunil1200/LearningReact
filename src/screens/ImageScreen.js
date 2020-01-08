import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';
// import Forest from '../../assets/forest.jpg';
// import Lake from '../../assets/Lake.jpg';
// import Mountain from '../../assets/mountain.jpg';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title='Forest' score={4} imageSource={require('../../assets/forest.jpg')} />
      <ImageDetail title='Lake' score={6} imageSource={require('../../assets/beach.jpg')} />
      <ImageDetail title='Mountain' score={9} imageSource={require('../../assets/mountain.jpg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ImageScreen;
