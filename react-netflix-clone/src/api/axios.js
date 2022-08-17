import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "873f5478e90211583af385d0ffbd5b1c",
    language: "ko_KR",
  },
});

export default instance;