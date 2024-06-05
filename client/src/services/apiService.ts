import axios from "axios";

//const BASE_URL = "https://api.femmbulgaria.com/api";
const BASE_URL = "http://localhost:8081/api";

export const apiService = {
  async get(path: string) {
    const response = await axios.get(`${BASE_URL}/${path}`, {
      withCredentials: true,
    });
    return response.data;
  },

  async post(path: string, data?: any) {
    const response = await axios.post(`${BASE_URL}/${path}`, data, {
      withCredentials: true,
    });
    return response.data;
  },

  async put(path: string, data: any) {
    const response = await axios.put(`${BASE_URL}/${path}`, data, {
      withCredentials: true,
    });
    return response.data;
  },

  async delete(path: string) {
    const response = await axios.delete(`${BASE_URL}/${path}`, {
      withCredentials: true,
    });
    return response.data;
  },

  async download(path: string) {
    const response = await axios.get(`${BASE_URL}/${path}`, {
      responseType: "blob",
    });
    return response.data;
  },
};
