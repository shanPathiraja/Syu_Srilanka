import React, {PropsWithChildren} from 'react';
import {
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  Link,
  VStack,
  Text,
} from 'native-base';

const Login = (props: {navigation: PropsWithChildren<any>}) => {
  return (
    <Box safeArea p={'2'}>
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Phone Number</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button
          mt="2"
          colorScheme="indigo"
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
          LogIn
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}>
            I'm a new user.{' '}
          </Text>
          <Link
            _text={{
              color: 'indigo.500',
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            onPress={() => props.navigation.navigate('Register')}
            href="#">
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};
export default Login;
