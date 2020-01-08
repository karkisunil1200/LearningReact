import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Sunil Karki1', age: 20},
    {name: 'Sunil Karki2', age: 21},
    {name: 'Sunil Karki3', age: 22},
    {name: 'Sunil Karki4', age: 24},
    {name: 'Sunil Karki5', age: 26},
    {name: 'Sunil Karki6', age: 29},
    {name: 'Sunil Karki7', age: 90},
    {name: 'Sunil Karki8', age: 44}
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({item}) => {
        return (
          <View style={style.textStyle}>
            <Text>
              Name: {item.name} - Age: {item.age}
            </Text>
          </View>
        );
      }}
    />
    // <FlatList
    //   horizontal
    //   keyExtractor={friend => friend.name}
    //   data={friends}
    //   renderItem={({item}) => {
    //     return <Text style={style.textStyle}>{item.name}</Text>;
    //   }}
    // />
  );
};

const style = StyleSheet.create({
  textStyle: {
    marginVertical: 49
  }
});

export default ListScreen;
