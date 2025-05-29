import $axios from "../api/accessor";
import { $api } from "../api/api";

export const HomeService = {
  async getHomeHero(language = "az") {
    let response = await $axios
      .get($api("get_HomeGero"), {
        headers: {
          "Accept-Language": language,
        },
      })
      .catch((err) => {
        return err.response;
      });

    return {
      data: response?.data ? response?.data : [],
      status: response?.status,
    };
  },
  async getPartners(language = "az") {
    let response = await $axios
      .get($api("get_Partners"), {
        headers: {
          "Accept-Language": language,
        },
      })
      .catch((err) => {
        return err.response;
      });

    return {
      data: response?.data ? response?.data : [],
      status: response?.status,
    };
  },
  async getHomeServices(language = "az") {
    let response = await $axios
      .get($api("get_HomeServices"), {
        headers: {
          "Accept-Language": language,
        },
      })
      .catch((err) => {
        return err.response;
      });

    return {
      data: response?.data ? response?.data : [],
      status: response?.status,
    };
  },
  async getHomeActivity(language = "az") {
    let response = await $axios
      .get($api("get_HomeActivity"), {
        headers: {
          "Accept-Language": language,
        },
      })
      .catch((err) => {
        return err.response;
      });

    return {
      data: response?.data ? response?.data : [],
      status: response?.status,
    };
  },
  async getHomeDevelopMent(language = "az") {
    let response = await $axios
      .get($api("get_WebDevelopMent"), {
        headers: {
          "Accept-Language": language,
        },
      })
      .catch((err) => {
        return err.response;
      });

    return {
      data: response?.data ? response?.data : [],
      status: response?.status,
    };
  },
  async getHomeProducts(language = "az") {
    let response = await $axios
      .get($api("get_OurProducts"), {
        headers: {
          "Accept-Language":language,
        },
      })
      .catch((err) => {
        return err.response;
      });

    return {
      data: response?.data ? response?.data : [],
      status: response?.status,
    };
  },
};
