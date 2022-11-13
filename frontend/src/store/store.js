import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authSlice from "./authSlice";
import categorySlice from "./categorySlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: combineReducers({
    auth: authSlice,
    category: categorySlice,
    search: searchSlice,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { ignoredPaths: ["some.nested.path"] },
      serializableCheck: { ignoredPaths: ["some.nested.path"] },
    }),
});

export default store;