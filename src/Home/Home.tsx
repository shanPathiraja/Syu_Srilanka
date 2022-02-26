import React, {useEffect} from 'react';
import {Box, Center, VStack, ScrollView, Spinner} from 'native-base';
import {getPosts} from '../Serivice/HttpService';
import PostCard from '../components/PostCard';
import {NewsCard} from '../components/NewsCard';
import {LoadingSpinner} from '../components/LoadingSpinner';

const Home = () => {
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    getPosts(1)
      .then(data => {
        console.log(data);
        setPosts(data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}
      <ScrollView marginTop={5}>
        <VStack space={3}>
          {posts.map((post: any) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </VStack>
      </ScrollView>
    </>
  );
};

export default Home;
