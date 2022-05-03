import { configureStore } from "@reduxjs/toolkit";
import bannerShow from "./Reducers/bannerShow";
import moviesSlice from "./Reducers/moviesSlice";

export default configureStore({
  reducer: {
    movie: moviesSlice,
    banner: bannerShow,
  },
});
