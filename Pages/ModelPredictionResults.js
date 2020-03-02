import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Confirmation from 'Components/Confirmation';

export default function ModelPredictionResults({ route, navigation }) {
  const { imageUrl } = route.params;
  const { prediction } = route.params;
  const { previousPrediction } = route.params;

  console.log('imageUrl = ' + imageUrl);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Confirmation
        imageUrl={imageUrl}
        prediction={prediction}
        navig={navigation}
        previousPrediction={previousPrediction}
      />
    </View>
  );
}
