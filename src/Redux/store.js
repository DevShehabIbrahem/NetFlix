import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./Reducers/moviesSlice";

export default configureStore({
  reducer: {
    movie: moviesSlice,
  },
});
