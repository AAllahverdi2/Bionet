import $axios from "../api/accessor";
import { $api } from "../api/api";

export const SettingsService = {
  async getSettings() {
    let response = await $axios
      .get($api("get_settings"), {
        headers: {
          "Accept-Language": "az",
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
