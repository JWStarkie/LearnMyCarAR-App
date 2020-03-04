import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from 'Pages/Home';
import MakePrediction from 'Pages/MakePrediction';
import MakePredictionResults from 'Pages/MakePredictionResults';
import ModelPrediction from 'Pages/ModelPrediction';
import ModelPredictionResults from 'Pages/ModelPredictionResults';
import UploadUserChoice from 'Pages/UploadUserChoice';
import UploadProcessing from 'Pages/UploadProcessing';
import FinalProcessing from 'Pages/FinalProcessing';
import SorryPage from 'Pages/SorryPage';
import ARPDFOptions from 'Pages/ARPDFOptions';
import PDFView from 'Pages/PDFView';
import ARView from 'Pages/ARView';

const PageStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <PageStack.Navigator initialRouteName="Home" headerMode="none">
        <PageStack.Screen name="Home" component={Home} />
        <PageStack.Screen name="MakePrediction" component={MakePrediction} />
        <PageStack.Screen
          name="MakePredictionResults"
          component={MakePredictionResults}
        />
        <PageStack.Screen name="ModelPrediction" component={ModelPrediction} />
        <PageStack.Screen
          name="ModelPredictionResults"
          component={ModelPredictionResults}
        />
        <PageStack.Screen
          name="UploadUserChoice"
          component={UploadUserChoice}
        />
        <PageStack.Screen
          name="UploadProcessing"
          component={UploadProcessing}
        />
        <PageStack.Screen name="FinalProcessing" component={FinalProcessing} />
        <PageStack.Screen name="SorryPage" component={SorryPage} />
        <PageStack.Screen name="ARPDFOptions" component={ARPDFOptions} />
        <PageStack.Screen name="PDFView" component={PDFView} />
        <PageStack.Screen name="ARView" component={ARView} />
      </PageStack.Navigator>
    </NavigationContainer>
  );
}
