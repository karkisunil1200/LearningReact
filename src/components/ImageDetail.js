import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetial = ({title, imageSource, score}) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.textStyle}>
        {title}--Score-->{score}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ImageDetial;
