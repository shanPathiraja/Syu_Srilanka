import React, {useEffect} from 'react';
import {Box, VStack, Divider, HStack, Image, Text} from 'native-base';
import {getMedia} from '../Serivice/HttpService';
import {decode} from 'html-entities';
import {stripHtmlTags} from "../utils/TextUtils";

const PostCard = (props: {post: any}) => {
  const [image, setImage] = React.useState<string | null>(null);

  useEffect(() => {
    getMedia(props.post.featured_media)
      .then(res => {
        console.log(res);
        setImage(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.post]);
  return (
    <Box borderRadius="md" borderWidth="1" mt="1">
      <HStack space="4" divider={<Divider />}>
        {image && <Image source={{uri: image}} width={150} />}
        <VStack>
          <Box px="4" pt="4">
            <Text bold fontSize="lg">
              {stripHtmlTags(props.post.title.rendered)}
            </Text>
          </Box>
          <Box px="4">
            <Text numberOfLines={2}>{stripHtmlTags(props.post.excerpt.rendered)}</Text>
          </Box>
          <Box px="4" pb="4">
            GeekyAnts
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};
export default PostCard;
