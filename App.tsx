import React from 'react';
import {StartScreen} from './app/screens/StartScreen';
import {PrivacyPolicyScreen} from './app/screens/PrivacyPolicyScreen';
import {QuizScreen} from './app/screens/QuizScreen';
import {ResultScreen} from './app/screens/ResultScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="main">
        <Stack.Screen name="main" component={StartScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="test" component={QuizScreen} />
        <Stack.Screen name="result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
