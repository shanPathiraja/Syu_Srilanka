import React, {useEffect} from 'react';
import {
  Box,
  Center,
  VStack,
  ScrollView,
  Spinner,
  Heading,
  Divider,
} from 'native-base';
import {getPosts} from '../Serivice/HttpService';
import {NewsCard} from '../Components/NewsCard';
import {LoadingSpinner} from '../Components/LoadingSpinner';

const Notifications = () => {
  const [notifications, setNotifications] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    getPosts(1)
      .then(data => {
        setNotifications(data);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}
      <Box>
        <Center>
          <Heading p="4" pb="2" size="lg">
            Notifications
          </Heading>
        </Center>
        <Divider w="100%" thickness={2} />
        <ScrollView marginTop={5}>
          <VStack space={3}>
            {notifications.map((post: any) => (
              <NewsCard key={post.id} post={post} />
            ))}
          </VStack>
        </ScrollView>
      </Box>
    </>
  );
};

export default Notifications;
