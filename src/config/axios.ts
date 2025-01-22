import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  timeout: 3 * 60 * 1000,
  // baseURL: "http://localhost:3000/api/movies",
  // baseURL: "http://103.82.194.253:3000/api/movies",
  // baseURL: "http://ophimvip.ddns.net:3000/api/movies",
  baseURL: "https://dnling.id.vn/api/movies",
});

export default axiosInstance;
