import { configureStore } from "@reduxjs/toolkit";
import rawdataReducer from "../redux/rawDataSlice";

export const store = configureStore({
  reducer: {
    rawdata: rawdataReducer
  },
});
