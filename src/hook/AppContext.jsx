import { create } from "zustand";

export const useAppContext = create((set) => ({
  open: false,
  setSidebar: () => set((state) => ({ open: !state.open })),
  setFalseSIdebar: () => set(() => ({ open: false })),
}));
