import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ToggleThemeState {
  theme: "light" | "dark";
}

const initialState: ToggleThemeState = {
  theme: "dark",
};

export const ToggleThemeSlice = createSlice({
  name: "togleTheme",
  initialState,
  reducers: {
    lightTheme: (state) => {
      state.theme = "light";
    },
    darkTheme: (state) => {
      state.theme = "dark";
    },
  },
});

export const { lightTheme, darkTheme } = ToggleThemeSlice.actions;
export const selectTheme = (state: RootState) => state.toggleTheme.theme;
export default ToggleThemeSlice.reducer;
