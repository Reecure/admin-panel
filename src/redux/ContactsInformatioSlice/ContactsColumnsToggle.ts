import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface MyObj {
  id: string;
  title: string;
  isActive: boolean;
}

const initialState: MyObj[] = [
  { id: "id", title: "ID", isActive: true },
  { id: "registerId", title: "Register ID", isActive: true },
  { id: "name", title: "Name", isActive: true },
  { id: "age", title: "Age", isActive: true },
  { id: "phone", title: "Phone Number", isActive: true },
  { id: "email", title: "Email", isActive: true },
  { id: "address", title: "Address", isActive: true },
  { id: "city", title: "City", isActive: true },
  { id: "zipCode", title: "Zip Code", isActive: true },
];

export const ContactsColumnsToggle = createSlice({
  name: "contactsColumns",
  initialState,
  reducers: {
    toggleIsActive: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isActive: !item.isActive };
        }
        return item;
      });
    },
  },
});

export const { toggleIsActive } = ContactsColumnsToggle.actions;
export const selectColumn = (state: RootState) => state.contactsColumnsToggle;
export default ContactsColumnsToggle.reducer;
