import React, {useEffect} from 'react';
import {Box, Center, VStack, ScrollView, Spinner, Heading, Divider} from 'native-base';
import {getPosts} from '../Serivice/HttpService';
import PostCard from '../Components/PostCard';
import {NewsCard} from '../Components/NewsCard';
import {LoadingSpinner} from '../Components/LoadingSpinner';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBell, faNewspaper} from "@fortawesome/free-solid-svg-icons";

const NewsFeed = () => {
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    getPosts(1)
      .then(data => {
        setPosts(data);
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
            SYU News
          </Heading>
        </Center>
        <Divider w="100%" thickness={2} />
        <ScrollView marginTop={5}>
          <VStack space={3}>
            {posts.map((post: any) => (
              <NewsCard key={post.id} post={post} />
            ))}
          </VStack>
        </ScrollView>
      </Box>
    </>
  );
};

export default NewsFeed;
