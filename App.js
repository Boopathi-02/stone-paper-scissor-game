
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './component/home1';
import Mainpage from './component/mainpage.js';



const Stack = createStackNavigator();

const MainStackNavigator = () => {

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Mainpage" component={Mainpage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
