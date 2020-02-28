import * as React from 'react';
import { FlatList, TouchableHighlight, Button, View, Text } from 'react-native';
import Data from 'app-data.json';
import ListCard from 'Components/ListCard';

export default function ModelPredictionResults({ route, navigation }) {
  console.log(Data.imageTagsMakes[0].name);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>This is the AR page{'\n'}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={Data.imageTagsMakes}
          renderItem={({ item }) => (
            <TouchableHighlight onPress={() => _onTapItem(item.title)}>
              <ListCard>
                <Text>
                  Name = {item.name}
                  {'\n'}
                  ID = {item.id}
                </Text>
              </ListCard>
            </TouchableHighlight>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
