import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Home from '../Home/Home';

const Stack = createStackNavigator();

const RootNavigater = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};
export default RootNavigater;
