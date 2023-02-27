import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const postAPI = async (url, data, headers = null) => {
  try {
    const result = await axios.post(url, data, {
      headers,
    });
    return result;
  } catch (error) {
    return error;
  }
};

export const getAPI = async (url, headers = null) => {
  try {
    const result = await axios(url, {
      headers,
    });
    return result;
  } catch (error) {
    return error.response.status;
  }
};

export const getWhatsNews = async () => {
  const headers = {
    StoreID: 4,
    Authorization: "f44a4aabfc5992514d262d7f517327e7",
    UserAddressID: 60877,
  };
  const result = await getAPI(`${BASE_URL}/users/products/whats_new`, headers);
  return result;
};
