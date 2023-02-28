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

//get Whats News api
export const getWhatsNews = async () => {
  const headers = {
    StoreID: 4,
    Authorization: process.env.REACT_APP_Authorization,
    UserAddressID: 60877,
  };
  const result = await getAPI(`${BASE_URL}/users/products/whats_new`, headers);
  return result;
};
