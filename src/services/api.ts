import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    config.params = {
        ...config.params,
        apiKey: "33eb5a6baf50414e8d5f17a3ad4b7ab9",
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;