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
} from 'native-base';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const Login = (props: {navigation: PropsWithChildren<any>}) => {
  const [phone, setPhone] = React.useState('');
  const [confirm, setConfirm] =
    React.useState<null | FirebaseAuthTypes.ConfirmationResult>(null);
  const [code, setCode] = React.useState('');
  const login = () => {
    if (!confirm) {
      auth()
        .signInWithPhoneNumber('+94 ' + phone)
        .then(r => setConfirm(r))
        .catch(e => {
          console.log(e);
          return null;
        });
      return;
    }
    confirm
      .confirm(code)
      .then(r => {
        console.log(r);
        props.navigation.navigate('Home');
      })
      .catch(e => {
        console.log(e);
      });
  };

  const register = () => {
    props.navigation.navigate('Register');
  };
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
            <Input
              isDisabled={!!confirm}
              onChange={e => {
                setPhone(e.nativeEvent.text);
              }}
              InputLeftElement={<Text marginLeft={2}>+94</Text>}
            />
          </FormControl>
          {confirm && (
            <FormControl>
              <FormControl.Label>Verification Code</FormControl.Label>
              <Input
                onChange={e => {
                  setCode(e.nativeEvent.text);
                }}
              />
            </FormControl>
          )}
          {/*<FormControl>*/}
          {/*  <FormControl.Label>Password</FormControl.Label>*/}
          {/*  <Input type="password" />*/}
          {/*  <Link*/}
          {/*    _text={{*/}
          {/*      fontSize: 'xs',*/}
          {/*      fontWeight: '500',*/}
          {/*      color: 'indigo.500',*/}
          {/*    }}*/}
          {/*    alignSelf="flex-end"*/}
          {/*    mt="1">*/}
          {/*    Forget Password?*/}
          {/*  </Link>*/}
          {/*</FormControl>*/}
          <Button mt="2" colorScheme="indigo" onPress={login}>
            {confirm ? 'Verify' : 'Login'}
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
};
export default Login;
