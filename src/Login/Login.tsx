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
  Center,
  Heading,
  AspectRatio,
  Image,
  Select,
} from 'native-base';

const Login = (props: {navigation: PropsWithChildren<any>}) => {

  const login=()=> {
    props.navigation.navigate('Home');
  }

  const register=()=> {
    props.navigation.navigate('Register');
  }
  return (
    <Center w="100%" height="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Center>
          <AspectRatio w="25%" ratio={1}>
            <Image
              source={{
                uri: 'https://play-lh.googleusercontent.com/NoYZXgQfVcfZG8YXKy925k7_C39l8FzW3o-H29PWsPSIgS4_Np09Eui5xxTv7-c8Rik=s200',
              }}
              alt="image"
            />
          </AspectRatio>
        </Center>
        <Heading
          alignSelf={'center'}
          size="lg"
          fontWeight="800"
          color="coolGray.800">
          Welcome to SYU
        </Heading>
        <VStack space={3} mt="20">
          <FormControl>
            <FormControl.Label>Phone Number</FormControl.Label>
            <Input InputLeftElement={<Text marginLeft={2}>+94</Text>} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'indigo.500',
              }}
              alignSelf="flex-end"
              mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={login}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              I'm a new user.{' '}
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={register}>
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );

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
