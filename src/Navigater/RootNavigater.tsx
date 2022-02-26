import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NewsFeed from '../NewsFeed/NewsFeed';
import {Home} from '../Home/Home';

const Stack = createStackNavigator();

const RootNavigater = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="NewsFeed"
        component={NewsFeed}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default RootNavigater;
