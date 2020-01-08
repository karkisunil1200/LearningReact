import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  const name = <Text>Sunil Karki</Text>;
  return (
    <View>
      <Text style={style.textStyle}>Getting started with React native</Text>
      <Text style={style.subHead}>My name is {name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 60
  },
  subHead: {
    fontSize: 20
  }
});

export default ComponentsScreen;
