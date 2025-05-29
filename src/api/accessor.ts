import axios, { AxiosError, AxiosResponse } from "axios";
// import { eraseCookie, getCookie } from "../utils/utils";
// import { Base_Url } from "../constants/base_url";
import { Base_Url } from "../constants/base_url";
import { eraseCookie, getCookie } from "../utils/utils";
const $axios = axios.create({
  baseURL: `${Base_Url}/api`,
});

$axios.interceptors.request.use(
  async (config) => {
    const token = getCookie("ColibriToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
$axios.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<{ message?: string }>) => {
    const status = error.response?.status || 500;
    if (status === 401) {
      eraseCookie("ColibriToken");
      alert("Sizin sessiyanız bitmişdir. Yenidən daxil olun.");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default $axios;
