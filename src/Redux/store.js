import { configureStore } from "@reduxjs/toolkit";
import searchTerm from "./Reducers/searchSlice";

export default configureStore({
  reducer: {
    search: searchTerm,
  },
});
