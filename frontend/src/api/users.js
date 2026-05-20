import axiosInstance from "../lib/axios";

export const userApi = {
  syncUser: async (payload) => {
    const response = await axiosInstance.post("/users/sync", payload);
    return response.data;
  },
};
