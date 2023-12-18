import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSummary = createAsyncThunk("rawdata", (data) => {
  axios
  .post(`http://localhost:9090/`, {
    body: data
    },{
      Accept: "application/json",
      "Content-Type": "application/json",
    })
  .then((response) => {
    return response.data;
  });
});

export const summaryData = createSlice({
  name: "summaryData",
  initialState: {
    summaryData: null,
    loading: false,
    error: null
  },

  extraReducers: {
    [fetchSummary.pending]: (state) => {
      state.loading = true;
    },

    [fetchSummary.fulfilled]: (state, action) => {
      state.summaryData(action.payload);
    },

    [fetchSummary.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});
export default summaryData.reducer;
