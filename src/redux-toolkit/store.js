import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux-toolkit/counterSlice";
import arrayData from "./arrayData";
import tableData from "./tableData";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: arrayData,
    table: tableData
  },
});
