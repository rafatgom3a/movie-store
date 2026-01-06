import axios from "axios";

const API_KEY = "f5af62b851647173b2d4f4be4b4e4917";
const BASE_URL = "https://api.themoviedb.org/3";

export const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});
