import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Login/Login';
import Register from '../components/Register/Register';
import Home from '../Home/Home';

const Stack = createStackNavigator();

const RootNavigater = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default RootNavigater;
