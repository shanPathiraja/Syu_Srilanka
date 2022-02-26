import React, {useEffect} from 'react';
import {
  AspectRatio,
  Box,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  HStack,
  VStack,
} from 'native-base';
import {getMedia} from '../Serivice/HttpService';
import {formatDateLong, stripHtmlTags} from '../utils/TextUtils';

export const NewsCard = (props: {post: any}) => {
  const [image, setImage] = React.useState<string | null>(null);

  useEffect(() => {
    getMedia(props.post.featured_media)
      .then(res => {
        setImage(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.post]);

  return (
    <Box alignItems="center">
      <Box
        maxW="90%"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.100"
        background="white"
        shadow={5}
        borderWidth="2">
        <HStack space={5}>
          <VStack w="25%" space={2}>
            <Box>
              <AspectRatio w="100%" ratio={2/3}>
                {image && (
                  <Image
                    source={{
                      uri: image,
                    }}
                    alt="image"
                  />
                )}
              </AspectRatio>
            </Box>
          </VStack>
          <VStack w="75%" space={0} marginTop={3} >
            <Heading size="sm" w='100%'>
              {stripHtmlTags(props.post.title.rendered)}
            </Heading>
            <Text
              fontSize="xs"
              color="pink.600"
              fontWeight="500">
              {formatDateLong(props.post.date)}
            </Text>
            <Text
              isTruncated
              fontSize="sm"
              numberOfLines={3}
              fontWeight="400">
              {stripHtmlTags(props.post.excerpt.rendered)}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};
