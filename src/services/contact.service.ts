import $axios from "../api/accessor";
import { $api } from "../api/api";

export const ContactService = {
  async PostContact(payload: any) {
    try {
      const response = await $axios.post($api("post_Contact"), payload);
      return response;
    } catch (error: any) {
      throw error.response ? error.response.data : error.message;
    }
  },
 
};
