import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Login/Login';
import Register from '../components/Register/Register';

const Stack = createStackNavigator();

const RootNavigater = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
export default RootNavigater;
