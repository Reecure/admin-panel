import { configureStore } from "@reduxjs/toolkit";
import toggleTheme from "./ToggleThemeSlice/ToggleThemeSlice";
export const store = configureStore({
  reducer: {
    toggleTheme,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
