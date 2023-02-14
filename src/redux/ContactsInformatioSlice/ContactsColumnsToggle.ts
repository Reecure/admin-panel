import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface MyObj {
  id: string;
  title: string;
  isActive: boolean;
}

const columnsData = [
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
interface Props {
  data: MyObj[];
  selectColumn: string;
  selectedFilterOptionl: string;
  filterValue: string;
}

const initialState: Props = {
  data: columnsData,
  selectColumn: "id",
  selectedFilterOptionl: ">",
  filterValue: "",
};

export const ContactsColumnsToggle = createSlice({
  name: "contactsColumns",
  initialState,
  reducers: {
    toggleIsActive: (state, action) => {
      return {
        ...state,
        data: [...state.data].map((item) => {
          if (item.id === action.payload) {
            return { ...item, isActive: !item.isActive };
          }
          return item;
        }),
      };
    },
    selectedColumn: (state, action) => {
      state.selectColumn = action.payload;
    },
    selectedFilter: (state, action) => {
      state.selectedFilterOptionl = action.payload;
    },
    valueForFiltering: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});

export const {
  toggleIsActive,
  selectedColumn,
  selectedFilter,
  valueForFiltering,
} = ContactsColumnsToggle.actions;
export const selectColumn = (state: RootState) =>
  state.contactsColumnsToggle.data;
export const selectedFilterOption = (state: RootState) =>
  state.contactsColumnsToggle.selectedFilterOptionl;
export const selectedColumnOpt = (state: RootState) =>
  state.contactsColumnsToggle.selectColumn;
export const FilteringValue = (state: RootState) =>
  state.contactsColumnsToggle.filterValue;
export default ContactsColumnsToggle.reducer;
