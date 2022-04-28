import React, { useEffect } from "react";
import HoverCover from "./share/Banner";
import Vid from "../Assets/Videos/Words Bubble Up Like .mp4";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTrendingmovies,
  TendingMovies,
} from "../Redux/Reducers/moviesSlice";
import Row from "./share/Row";
import Requests from "../Api/reguests";

const Popular = () => {
  return (
    <>
      <Row title="Romance" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="TopRated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </>
  );
};

export default Popular;
