import $axios from "../api/accessor";
import { $api } from "../api/api";

export const ServicesService = {
  async PostPriceOffer(payload: any) {
    try {
      const response = await $axios.post($api("post_PriceOffer"), payload);
      return response;
    } catch (error: any) {
      throw error.response ? error.response.data : error.message;
    }
  },
   async getServices() {
    let response = await $axios
      .get($api("get_Services"), {
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
