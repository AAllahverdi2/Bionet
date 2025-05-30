import $axios from "../api/accessor";
import { $api } from "../api/api";

export const HomeService = {
  async getHomeHero() {
    let response = await $axios
      .get($api("get_HomeGero"))
      .catch((err) => {
        return err.response;
      });

    return {
      data: response?.data ? response?.data : [],
      status: response?.status,
    };
  },
  async getPartners() {
    let response = await $axios
      .get($api("get_Partners"))
      .catch((err) => {
        return err.response;
      });

    return {
      data: response?.data ? response?.data : [],
      status: response?.status,
    };
  },
  async getHomeServices() {
    let response = await $axios
      .get($api("get_HomeServices"),)
      .catch((err) => {
        return err.response;
      });

    return {
      data: response?.data ? response?.data : [],
      status: response?.status,
    };
  },
  async getHomeActivity() {
    let response = await $axios
      .get($api("get_HomeActivity"),)
      .catch((err) => {
        return err.response;
      });

    return {
      data: response?.data ? response?.data : [],
      status: response?.status,
    };
  },
  async getHomeDevelopMent() {
    let response = await $axios
      .get($api("get_WebDevelopMent"),)
      .catch((err) => {
        return err.response;
      });

    return {
      data: response?.data ? response?.data : [],
      status: response?.status,
    };
  },
  async getHomeProducts() {
    let response = await $axios
      .get($api("get_OurProducts"),)
      .catch((err) => {
        return err.response;
      });

    return {
      data: response?.data ? response?.data : [],
      status: response?.status,
    };
  },
};
