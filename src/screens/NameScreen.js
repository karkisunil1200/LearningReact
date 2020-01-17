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
        type='password'
        value={text}
        placeholder='password'
        onChangeText={onInputChange}
        secureTextEntry
        autoCorrect={false}
      />
      {text.length < 4 ? (
        <Text style={styles.password}>'Your password must be more character'</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 2,
    padding: 10
  },
  title: {
    backgroundColor: 'orange',
    padding: 10
  },
  password: {
    color: 'red'
  }
});

export default NameScreen;
