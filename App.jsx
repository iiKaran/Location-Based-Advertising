import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import Home from './Screens/Home';
import MyAds from './Screens/MyAds';
const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center',headerTitle: `New World of Ad's`,  headerTintColor: '#F1F2EC',headerStyle:{height:0, fontSize: 29,backgroundColor: '#25252C',}}}>
        <Stack.Screen
        name='Home'
          component={Home}
        />
        <Stack.Screen name="ads" component={MyAds} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
