import React, {useEffect} from 'react';
import {
  Box,
  Center,
  ScrollView,
  Text,
  Heading,
  Avatar,
  FormControl,
  Input,
  Stack,
  Divider,
  VStack,
} from 'native-base';
import {LoadingSpinner} from '../Components/LoadingSpinner';

const dummyProfile = {
  name: 'John Doe',
  email: 'valerie.alexander@example.com',
  phone: '+1 (123) 456-7890',
  address: '123 Main St, Anytown, CA 12345',
  avatar: 'https://randomuser.me/api/portraits/women/34.jpg',
};

const Profile = () => {
  const [profile, setProfile] = React.useState<any>(dummyProfile);

  return (
    <>
      {!profile && <LoadingSpinner />}
      <Box>
        <Center>
          <Heading p="4" size="lg">
            Jhon Doe
          </Heading>
          <Avatar
            bg="coolGray.100"
            size="xl"
            source={{
              uri: profile.avatar,
            }}
          />
        </Center>

        <ScrollView marginTop={5}>
          <FormControl>
            <VStack
              space={5}
              alignSelf="center"
              px="4"
              safeArea
              mt="4"
              w="100%">
              <Box>
                <Text bold pl={5}>
                  Phone
                </Text>
                <Input
                  isReadOnly
                  value={profile.phone}
                  w="100%"
                  backgroundColor={'white'}
                />
              </Box>
              <Box>
                <Text bold pl={5}>
                  Email
                </Text>
                <Input
                  isReadOnly
                  value={profile.email}
                  w="100%"
                  backgroundColor={'white'}
                />
              </Box>
              <Box>
                <Text bold pl={5}>
                  Address
                </Text>
                <Input
                  isReadOnly
                  value={profile.address}
                  w="100%"
                  backgroundColor={'white'}
                />
              </Box>
            </VStack>
          </FormControl>
        </ScrollView>
      </Box>
    </>
  );
};

export default Profile;
