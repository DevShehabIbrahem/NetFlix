import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import baseURL from "../../Api/baseURL";
import Requests from "../../Api/reguests";
export const fetchTrendingmovies = createAsyncThunk(
  "randomposter/fetchTrending",
  async () => {
    const response = await baseURL.get(`${Requests.fetchTopRated}`);
    return response.data.results[
      Math.floor(Math.random() * response.data.results.length - 1)
    ];
  }
);

const initialState = {
  randomposter: [],
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTrendingmovies.fulfilled]: (state, { payload }) => {
      state.randomposter = payload;
    },
  },
});

export default moviesSlice.reducer;

export const TendingMovies = (state) => state.movie.randomposter;
