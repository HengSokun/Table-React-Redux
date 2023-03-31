import { createSlice } from "@reduxjs/toolkit";

const arrayData = createSlice({
  name: 'data',
  initialState: {
    value: ''
  },
  reducers: {
    updateInputValue: (state, action) => {
      state.value = action.payload;
      console.log("arrayData A:" , state.value);
      console.log("arrayData B:" , action.payload);
    }
  } 
});
export const { updateInputValue } = arrayData.actions;
export default arrayData.reducer;
