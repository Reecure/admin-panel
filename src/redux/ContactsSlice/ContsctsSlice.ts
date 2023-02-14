import { createSlice } from "@reduxjs/toolkit";
import { mockDataContacts } from "../../data/mockData";
import { RootState } from "../store";

interface IContact {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
}

interface IContacts {
  data: IContact[];
}

const initialState: IContacts = {
  data: mockDataContacts,
};

export const ContactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
});

export const returnContacts = (state: RootState) => state.contacts.data;
export default ContactsSlice.reducer;
