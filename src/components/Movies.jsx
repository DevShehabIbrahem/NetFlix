import React, { useEffect } from "react";

import HoverCover from "../components/share/Hoverheader";
import potser from "../Assets/images/Movies.webp";
import Vid from "../Assets/Videos/Scissor Seven.mp4";

import { useSelector, useDispatch } from "react-redux";
import {
  documentaries,
  fetchDocumentaries,
  fetchTrendingmovies,
  TendingMovies,
} from "../Redux/Reducers/moviesSlice";

const Movies = () => {
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
        videoId="EMPnetBr9OM"
      />
    </div>
  );
};

export default Movies;
