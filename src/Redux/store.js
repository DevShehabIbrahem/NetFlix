import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./Reducers/ToggleSlice";

export default configureStore({
  reducer: {
    Menu: ToggleSlice,
  },
});
