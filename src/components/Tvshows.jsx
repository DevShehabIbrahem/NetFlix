import React, { useEffect } from "react";
import HoverCover from "../components/share/Hoverheader";
import Vid from "../Assets/Videos/Tv.mp4";

import { useSelector, useDispatch } from "react-redux";

import {
  fetchTrendingmovies,
  TendingMovies,
} from "../Redux/Reducers/moviesSlice";

const Tvshows = () => {
  return (
    <div>
      <HoverCover videoSrc={Vid} videoId="3pasTSnv59Q" />
    </div>
  );
};

export default Tvshows;
