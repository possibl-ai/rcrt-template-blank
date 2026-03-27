import { create } from 'zustand';

interface AppState {
  // Add your application state here
}

export const useStore = create<AppState>(() => ({
  // Add your initial state here
}));
