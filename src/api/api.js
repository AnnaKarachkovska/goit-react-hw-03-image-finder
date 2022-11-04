import axios from 'axios';

const instanceAxiosImages = axios.create({
    baseURL: 'https://pixabay.com/api',
});

export const getImages = async (name, page) => {
  const { data } = await instanceAxiosImages(`/?q=${name}&page=${page}&key=30371863-50c68a801fb6a7099c6679001&image_type=photo&orientation=horizontal&per_page=12`);

  return data;
};