import React, { useEffect } from "react";
import HoverCover from "../components/share/Hoverheader";
import Vid from "../Assets/Videos/Words Bubble Up Like .mp4";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTrendingmovies,
  TendingMovies,
} from "../Redux/Reducers/moviesSlice";

const Popular = () => {
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
        videoId="Yh0W2yiWlwo"
      />
    </div>
  );
};

export default Popular;
