import React, {PropsWithChildren} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Button} from 'native-base';

const Login = (props: {navigation: PropsWithChildren<any>}) => {
  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Button onPress={() => props.navigation.navigate('Register')}>
        Register
      </Button>
    </SafeAreaView>
  );
};
export default Login;
