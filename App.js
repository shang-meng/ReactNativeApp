import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreatePage from './src/create/createPage'
import HomePage from './src/check/homePage'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage" headerMode="none">
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="CreatePage" component={CreatePage }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

