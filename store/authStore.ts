import axios from "axios";
import create from "zustand";
import { persist } from "zustand/middleware";
import { BASE_URL } from "./../utils/index";

const authStore = (set: any) => ({
  userProfile: null,
  allUsers: [],

  addUser: (user: any) => set({ userProfile: user }),

  removeUser: () => set({ userProfile: null }),

  fetchAllUsers: async () => {
    const resp = await axios.get(`${BASE_URL}/users`);

    set({ allUsers: resp.data });
  },
});

const useAuthStore = create(
  persist(authStore, {
    name: "auth",
  })
);

export default useAuthStore;
