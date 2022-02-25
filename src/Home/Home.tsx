import React, {useEffect} from 'react';
import {Box} from 'native-base';
import {getPosts} from '../Serivice/HttpService';
import PostCard from '../components/PostCard';

const Home = () => {
  const [posts, setPosts] = React.useState<any[]>([]);
  useEffect(() => {
    getPosts(1).then(data => {
      console.log(data);
      setPosts(data);
    });
  }, []);

  return (
    <Box px={2}>
      {posts.length > 0 &&
        posts.map((post, index) => <PostCard post={post} key={index} />)}
    </Box>
  );
};

export default Home;
