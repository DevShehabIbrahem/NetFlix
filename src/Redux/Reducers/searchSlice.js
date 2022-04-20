import { createSlice } from "@reduxjs/toolkit";

const initialState = { names: "Redux Is sucsses" };

export const searchTerm = createSlice({
  name: "search",
  initialState,
  reducers: {
    changename: (state, { payload }) => {
      state.names = payload;
    },
  },
});

export const { changename } = searchTerm.actions;

export default searchTerm.reducer;
