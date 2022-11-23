import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategory = createAsyncThunk(
  "getAllCategory",
  async (category, getState) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/getAllCategory"
      );
      return response.data;
    } catch (e) {
      return getState.rejectWithValue(e.response.data);
    }
  }
);

export const getCategoriesByMainTitleID = createAsyncThunk(
  "getCategoriesByMainTitleID",
  async (id, getState) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/getCategoriesByMainTitleID/${id}`
      );
      return response.data;
    } catch (e) {
      return getState.rejectWithValue(e.response.data);
    }
  }
);

export const getSubCategoriesByCategoryID = createAsyncThunk(
  "getSubCategoriesByCategoryID",
  async (id, getState) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/getSubCategoriesByCategoryID/${id}`
      );
      return response.data;
    } catch (e) {
      return getState.rejectWithValue(e.response.data);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    loading: false,
    getdata: [],
    getDataByCategory: [],
    getDataBySubCategory: [],
    cart: false,
    selectedCatgory: null,
    error: ""
  },
  reducers: {
    getdata: (state, action) => {
      state.getdata = [];
    },
    selectCategory: (state, action) => {
      state.selectedCatgory = action.payload;
    },
    cart: (state, action) => {
      state.cart = action.payload;
    }
  },
  extraReducers: {
    [getAllCategory.fulfilled]: (state, action) => {
      state.getdata = action.payload;
      state.loading = false;
    },
    [getAllCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllCategory.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getSubCategoriesByCategoryID.fulfilled]: (state, action) => {
      state.getDataBySubCategory = action.payload;
      state.loading = false;
    },
    [getSubCategoriesByCategoryID.pending]: (state, action) => {
      state.loading = true;
    },
    [getSubCategoriesByCategoryID.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getCategoriesByMainTitleID.fulfilled]: (state, action) => {
      state.getDataByCategory = action.payload;
      state.loading = false;
    },
    [getCategoriesByMainTitleID.pending]: (state, action) => {
      state.loading = true;
    },
    [getCategoriesByMainTitleID.rejected]: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { clearState, selectCategory, cart } = categorySlice.actions;
export default categorySlice.reducer;
