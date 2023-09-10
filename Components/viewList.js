import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';


const data = [
    { id: '1', name: 'John', age: '30', country: 'USA' },
    { id: '2', name: 'Alice', age: '25', country: 'Canada' },
    { id: '3', name: 'Bob', age: '28', country: 'UK' },
    // Add more data as needed
  ];

const ViewList = () => {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem bottomDivider>
              <Icon name="person" />
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>Age: {item.age}</ListItem.Subtitle>
                <ListItem.Subtitle>Country: {item.country}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
        />
      </View>
    );
  };

export default ViewList;