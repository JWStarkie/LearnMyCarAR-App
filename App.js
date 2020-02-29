import * as React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from 'Pages/Home';
import MakePrediction from 'Pages/MakePrediction';
import MakePredictionProcessing from 'Pages/MakePredictionProcessing';
import MakePredictionResults from 'Pages/MakePredictionResults';
import ModelPrediction from 'Pages/ModelPrediction';
import ModelPredictionProcessing from 'Pages/ModelPredictionProcessing';
import ModelPredictionResults from 'Pages/ModelPredictionResults';
import UploadUserChoice from 'Pages/UploadUserChoice';
import UploadProcessing from 'Pages/UploadProcessing';
import AR from 'Pages/AR';
import SorryPage from 'Pages/SorryPage';

const PageStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PageStack.Navigator initialRouteName="SorryPage" headerMode="none">
        <PageStack.Screen name="Home" component={Home} />
        <PageStack.Screen name="MakePrediction" component={MakePrediction} />
        <PageStack.Screen
          name="MakePredictionProcessing"
          component={MakePredictionProcessing}
        />
        <PageStack.Screen
          name="MakePredictionResults"
          component={MakePredictionResults}
        />
        <PageStack.Screen name="ModelPrediction" component={ModelPrediction} />
        <PageStack.Screen
          name="ModelPredictionProcessing"
          component={ModelPredictionProcessing}
        />
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
        <PageStack.Screen name="SorryPage" component={SorryPage} />
        <PageStack.Screen name="AR" component={AR} />
      </PageStack.Navigator>
    </NavigationContainer>
  );
}
