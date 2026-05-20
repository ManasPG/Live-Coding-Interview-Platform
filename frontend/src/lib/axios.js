import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  withCredentials: true, // by adding this field browser will send the cookies to server automatically, on every single req
});

let getAuthToken = null;

export const setAxiosAuthTokenGetter = (getter) => {
  getAuthToken = getter;
};

axiosInstance.interceptors.request.use(async (config) => {
  if (getAuthToken) {
    const token = await getAuthToken();

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default axiosInstance;
