import * as React from 'react';
import { Button, View, Text } from 'react-native';
import CameraAccess from 'util/CameraAccess';
import { useIsFocused } from '@react-navigation/native';

export default function MakePrediction({ navigation }) {
  // This hook returns `true` if the screen is focused, `false` otherwise
  const isFocused = useIsFocused();
  if (isFocused) {
    return (
      <View style={{ flex: 1 }}>
        <CameraAccess
          makePredicted={false}
          navig={navigation}
          trainNewVehicle={false}
        />
      </View>
    );
  } else {
    return null;
  }
}
