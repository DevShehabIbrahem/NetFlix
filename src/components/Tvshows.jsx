import React, { useEffect } from "react";
import HoverCover from "../components/share/Hoverheader";
import Vid from "../Assets/Videos/Tv.mp4";

import { useSelector, useDispatch } from "react-redux";

import {
  fetchTrendingmovies,
  TendingMovies,
} from "../Redux/Reducers/moviesSlice";

const Tvshows = () => {
  const data = useSelector(TendingMovies);

  const poster = data.backdrop_path;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrendingmovies());
  }, [dispatch]);
  return (
    <div>
      <HoverCover
        videoSrc={Vid}
        pausedOverlay={<img src={poster} alt="poster" />}
        videoId="3pasTSnv59Q"
      />
    </div>
  );
};

export default Tvshows;
