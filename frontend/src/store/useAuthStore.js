import { create } from "zustand";
import toast from "react-hot-toast";
import axiosInstance from "../libs/axios";

export const useAuthStore = create((set) => ({
  user: null,
  isSignUp: false,
  isCheckAuth: false,
  isLogout: false,
  isLogin: false,
  signUp: async (data) => {
    set({ isSignUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ user: res.data.user });
      toast.success("Create account successfull");
    } catch (error) {
      set({ isSignUp: false, user: null });
      toast.error(error.response.data.message);
    }
  },
  login: async (data) => {
    set({ isLogin: true })
    try {
      const res = await axiosInstance.post("/auth/login", data)
      set({ user: res.data.user, isLogin: false })
      toast.success("Login successfull")
    } catch (error) {
      set({ isLogin: false, user: null })
      toast.error(error.response.data.message)
    }
  },
  logout: async () => {
    set({ isLogout: true });
    try {
      await axiosInstance.post("/auth/logout");
      set({ user: null, isLogout: false });
    } catch (error) {
      set({ isLogout: false });
      toast.error(error.response.data.message);
    }
  },
  checkAuth: async () => {
    set({ isCheckAuth: true });
    try {
      const res = await axiosInstance.get("/auth/checkAuth");
      set({ message: "Success", user: res.data.user, isCheckAuth: false });
    } catch (error) {
      set({ user: null, isCheckAuth: false });
      console.log(error.response.data.message)
      // toast.error(error.response.data.message);
    }
  },
}));
