import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export const apiService = {
  async get(path: string, token?: string) {
    const response = await axios.get(`${BASE_URL}/${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  async post(path: string, data?: any, token?: string) {
    const response = await axios.post(`${BASE_URL}/${path}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  async put(path: string, data: any) {
    const response = await axios.put(`${BASE_URL}/${path}`, data);
    return response.data;
  },
  async delete(path: string) {
    const response = await axios.delete(`${BASE_URL}/${path}`);
    return response.data;
  },
};
