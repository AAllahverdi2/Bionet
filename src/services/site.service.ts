import $axios from "../api/accessor";
import { $api } from "../api/api";

export const SiteService = {
  async getSite() {
    let response = await $axios.get($api("get_siteText")).catch((err) => {
      return err.response;
    });

    return {
      data: response?.data ? response?.data : [],
      status: response?.status,
    };
  },
};
