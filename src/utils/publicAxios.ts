import axios from "axios";

export const publicAxios = axios.create({
  baseURL: process.env.BASE_URL,
});
