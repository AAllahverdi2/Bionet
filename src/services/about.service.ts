import $axios from "../api/accessor";
import { $api } from "../api/api";

export const AboutService = {
  async getAboutData() {
    let response = await $axios
      .get($api("get_AboutData"), {
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
