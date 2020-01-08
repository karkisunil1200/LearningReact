import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  const count = 0;
  return (
    <View>
      <Text style={styles.text}>Go to diffent pages</Text>
      <Button
        title='Component Demo'
        onPress={() => {
          return navigation.navigate('Components');
        }}
      />
      <Button style={styles.demo} title='List Demo' onPress={() => navigation.navigate('List')} />
      <Button title='Image Screen' onPress={() => navigation.navigate('Image')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  demo: {
    marginVertical: 60
  }
});

export default HomeScreen;
