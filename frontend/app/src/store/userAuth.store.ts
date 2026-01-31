import { create } from "zustand";

interface User {
  name?: string;
  email: string;
}

interface AuthState {
  isLogin: boolean;
  user: User | null;
  toggleMode: () => void;
  login: (email: string) => void;
  signup: (name: string, email: string,) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLogin: false,
  user: null,
  toggleMode: () => set((state) => ({ isLogin: !state.isLogin })),
  login: (email: string) => set({ user: { email } }),
  signup: (name: string, email: string,) => set({ user: { name, email } }),
  logout: () => set({ user: null }),
}));

