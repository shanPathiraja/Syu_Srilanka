import axios from 'axios';

const baseUrl = 'https://syusrilanka.com/wp-json/wp/v2';

export const getPosts = async (pageNo?: number) => {
  const url = `${baseUrl}/posts${pageNo && '?page=' + pageNo.toString()}`;
  console.log(url);
  const response = await axios.get(url);
  return response.data;
};

export const getMedia = async (id: number) => {
  const url = `${baseUrl}/media/${id}`;
  console.log(url);
  const response = await axios.get(url);
  return response.data.guid.rendered;
};
