import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  gmail: "",
  firstName: "",
  lastName: "",
};

const tableData = createSlice({
  name: "table",
  initialState,
  reducers: {
    setData(state, action) {
      state[action.payload.name] = action.payload.value;
    },
    addTable(state) {
      const newData = {
        gmail: state.gmail,
        firstName: state.firstName,
        lastName: state.lastName,
      };
      state.data = [...state.data, newData];
      state.gmail = "";
      state.firstName = "";
      state.lastName = "";
      console.log("New Data: ", newData);
      console.log("Data Store: ", state.data);
    
    },
    
    // setGmail: (state, action) => {
    //   state.gmail = action.payload;
    // },
    // setFirstName: (state, action) => {
    //   state.firstName = action.payload;
    // },
    // setLastName: (state, action) => {
    //   state.lastName = action.payload;
    // },
  },
});

export const { setData, addTable } = tableData.actions;
export default tableData.reducer;
