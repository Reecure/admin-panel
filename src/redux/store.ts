import { configureStore } from "@reduxjs/toolkit";
import toggleTheme from "./ToggleThemeSlice/ToggleThemeSlice";
import contactsColumnsToggle from "./ContactsInformatioSlice/ContactsColumnsToggle";
import contacts from "./ContactsSlice/ContsctsSlice";

export const store = configureStore({
  reducer: {
    toggleTheme,
    contactsColumnsToggle,
    contacts,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
