import axios, { AxiosError, AxiosResponse } from "axios";
import { Base_Url } from "../constants/base_url";
import { eraseCookie, getCookie } from "../utils/utils";

const $axios = axios.create({
  baseURL: `${Base_Url}/api`,
});

// Request interceptor
$axios.interceptors.request.use(
  async (config) => {
    const token = getCookie("BionetToken");
    const language = localStorage.getItem("language") || "az"; 

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["Accept-Language"] = language; 

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
      eraseCookie("BionetToken");
      alert("Sizin sessiyanız bitmişdir. Yenidən daxil olun.");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default $axios;
