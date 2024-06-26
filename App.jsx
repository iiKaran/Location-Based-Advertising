import React ,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import Home from './Screens/Home';
import {store} from './Redux';
import {Provider} from 'react-redux';
import MyAds from './Screens/MyAds';
import { fetchUserFromStorage } from './Redux/Slices/UserSlice';
import UserHome from './Screens/UserHome';
import {Login, Signup} from './Screens/Login'
const Stack = createNativeStackNavigator();
export default App = () => {
  useEffect(() => {
    // Dispatch fetchUserFromStorage thunk when the component mounts
    store.dispatch(fetchUserFromStorage());
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTitle: `New World of Ad's`,
            headerTintColor: '#F1F2EC',
            headerStyle: {height: 0, fontSize: 29, backgroundColor: '#25252C'},
          }} initialRouteName='Home'>
          <Stack.Screen name="userHome" component={UserHome} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ads" component={MyAds} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
