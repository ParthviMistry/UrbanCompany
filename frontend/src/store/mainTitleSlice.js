import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllMainTitle = createAsyncThunk(
    "getAllMainTitle",
    async (getState) => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/getAllMainTitle"
            );
            console.log("res==", response);
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
            console.log("res by id==", response);
            return response.data;
        } catch (e) {
            return getState.rejectWithValue(e.response.data);
        }
    }
);

const mainTitleSlice = createSlice({
    name: "mainTitle",
    initialState: {
        loading: false,
        getdata: {},
        getCategoriesByMainTitleID: {},
        error: "",
    },
    reducers: {
        getdata: (state, action) => {
            state.getdata = {};
        },
        getCategoriesByMainTitleID: (state, action) => {
            state.getCategoriesByMainTitleID = {};
        },
    },
    extraReducers: {
        [getAllMainTitle.fulfilled]: (state, action) => {
            state.getdata = action.payload;
            state.loading = false;
        },
        [getAllMainTitle.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllMainTitle.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [getCategoriesByMainTitleID.fulfilled]: (state, action) => {
            state.getCategoriesByMainTitleID = action.payload;
            state.loading = false;
        },
        [getCategoriesByMainTitleID.pending]: (state, action) => {
            state.loading = true;
        },
        [getCategoriesByMainTitleID.rejected]: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { clearState } = mainTitleSlice.actions;
export default mainTitleSlice.reducer;
