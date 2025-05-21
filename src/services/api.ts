import axios from 'axios';

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "137e39699d8696bd4faab548f177c592",
    language: "pt-BR"
  },
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;