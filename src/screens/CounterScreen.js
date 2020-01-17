import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return {...state, value: state.value + action.payload};
    case 'decrease':
      return {...state, value: state.value - action.payload};
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {value: 0});

  return (
    <View>
      <Text>Increase or Decrease</Text>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({type: 'increase', payload: 1});
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({type: 'decrease', payload: 1});
        }}
      />
      <Text>The count is now {state.value}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;
