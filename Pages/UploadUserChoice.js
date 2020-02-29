import * as React from 'react';
import {
  FlatList,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Data from 'app-data.json';
import ListCard from 'Components/ListCard';
import AzureConnection from 'util/AzureConnection';

export default function ImageUploadProcessing({ route, navigation }) {
  /* console.log(Data.imageTagsMakes[0].name);
  const { currentChoice } = route.params;
  const { predictedMake } = route.params; */
  const currentChoice = true;
  const predictedMake = 'Ford';
  let ListData =
    currentChoice === false ? Data.imageTagsMakes : Data.imageTagsVwModels;
  // Need some if condition for if true and === Ford or VW for Data.imageTagsFordModels

  function _onTapItem(key, currentChoice, predictedMake) {
    if (currentChoice === false) {
      AzureConnection.uploadImageForTrainingMake(key, navigation);
    } else if (currentChoice === true) {
      if (predictedMake === 'Volkswagen') {
        AzureConnection.uploadImageForTrainingVwModel(key, navigation);
      } else if (predictedMake === 'Ford') {
        AzureConnection.uploadImageForTrainingFordModel(key, navigation);
      }
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topViewstyles}>
        <Text style={styles.textStyling}>
          Please scroll through the list and select the right one for your
          vehicle ...
        </Text>
      </View>
      <View style={{ flex: 2 }}>
        <FlatList
          data={ListData}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => _onTapItem(item.id, currentChoice, predictedMake)}>
              <ListCard>Name = {item.name}</ListCard>
            </TouchableHighlight>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topViewstyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyling: {
    textAlign: 'center',
    fontSize: 35,
    color: '#3A88E9',
  },
});
