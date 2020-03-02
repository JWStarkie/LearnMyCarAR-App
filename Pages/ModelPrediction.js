import * as React from 'react';
import { Button, View, Text } from 'react-native';
import CameraAccess from 'util/CameraAccess';
import { useIsFocused } from '@react-navigation/native';

export default function ModelPrediction({ route, navigation }) {
  // This hook returns `true` if the screen is focused, `false` otherwise
  const isFocused = useIsFocused();

  const { predictionMake } = route.params;

  if (isFocused) {
    return (
      <View style={{ flex: 1 }}>
        <CameraAccess
          makePredicted={true}
          vehicleMake={predictionMake}
          navig={navigation}
        />
      </View>
    );
  } else {
    return null;
  }
}
