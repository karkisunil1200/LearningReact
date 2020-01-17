import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {black} from 'ansi-colors';

const NameScreen = () => {
  const [text, setText] = useState('');

  const onInputChange = text => {
    setText(text);
  };

  return (
    <View>
      <Text style={styles.title}>Enter Name: </Text>
      <TextInput
        style={styles.input}
        type='text'
        placeholder='Alexander'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={onInputChange}
        value={text}
      />
      <Text>My Name is {text} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 2,
    color: 'red',
    padding: 10
  },
  title: {
    backgroundColor: 'orange',
    padding: 10
  }
});

export default NameScreen;
