import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllMainTable = createAsyncThunk(
  "getAllMainTable",
  async (getState) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/getAllMainTable"
      );

      return response.data;
    } catch (e) {
      return getState.rejectWithValue(e.response.data);
    }
  }
);

const mainTableSlice = createSlice({
  name: "mainTable",
  initialState: {
    loading: false,
    getdata: {},
    error: "",
  },
  reducers: {
    getdata: (state, action) => {
      state.getdata = {};
    },
  },
  extraReducers: {
    [getAllMainTable.fulfilled]: (state, action) => {
      state.getdata = action.payload;
      state.loading = false;
    },
    [getAllMainTable.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllMainTable.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { clearState } = mainTableSlice.actions;
export default mainTableSlice.reducer;
