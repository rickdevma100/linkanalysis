import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from 'react';
import axios from "axios";

export const fetchRawData = createAsyncThunk("rawdata", async (postData) => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/rawdata", {
      params: {
        Query1: postData.link1,
        Query2: postData.link2,
        Query3: postData.link3
      }
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
});


export const rawData = createSlice({
  name: "rawData",
  initialState: {
    rawdata: null,
    loading: false,
    error: null
  },

  extraReducers: 
  (builder) => {
    builder
      .addCase(fetchRawData.pending, (state, action) => {
          state.loading = true;
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(fetchRawData.fulfilled, (state, action) => {
          state.rawdata = action.payload;
      })
      // You can match a range of action types
      .addCase(fetchRawData.rejected, (state, action) => {
          state.error = action.payload;
      })
      // You can match a range of action types
  }
});
export default rawData.reducer;
