import axios from "axios";

const api = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0/",
  timeout: 10000,
});

export default api;
