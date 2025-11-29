import { create } from "zustand";

interface TabState {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

export const useTabStore = create<TabState>((set) => ({
  activeTab: "kundli", // Default tab
  setActiveTab: (tabId) => set({ activeTab: tabId }),
}));
