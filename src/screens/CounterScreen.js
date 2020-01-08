import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Increase or Decrease</Text>
      <Button
        title='Increase'
        onPress={() => {
          return setCount(count + 1);
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          return setCount(count - 1);
        }}
      />
      <Text>The count is now {count}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;
