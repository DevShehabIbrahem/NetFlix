import React, { useEffect, useState } from "react";
import HoverCover from "../components/share/Hoverheader";
import Swipercarousel from "../components/share/Swiper/Swipercaousel";
import Vid from "../Assets/Videos/Bubble - Official Trailer - Netflix.mp4";
import Requests from "../Api/reguests";
import axios from "../Api/baseURL";
import Toprated from "../components/share/Swiper/shap-Component/Toprated";
import Action from "../components/share/Swiper/shap-Component/Action";
import Horror from "../components/share/Swiper/shap-Component/Horror";
import Tv from "../components/share/Swiper/shap-Component/Tv";
import NetflixOriginal from "./share/Swiper/shap-Component/NetflixOriginal";

const Home = () => {
  const prefixs = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <HoverCover videoSrc={Vid} videoId="WItvH4Hoyag" />
      <div className="mx-4">
        <Swipercarousel
          fetchurl={Requests.fetchNetflixOriginals}
          title="NetflixOriginals"
        >
          <NetflixOriginal islarge prefixs={prefixs} />
        </Swipercarousel>

        <Swipercarousel fetchurl={Requests.fetchTopRated} title="TopRated">
          <Toprated prefixs={prefixs} />
        </Swipercarousel>

        <Swipercarousel fetchurl={Requests.fetchActionMovies} title="Action">
          <Action prefixs={prefixs} />
        </Swipercarousel>

        <Swipercarousel fetchurl={Requests.fetchHorrorMovies} title="Horror">
          <Horror prefixs={prefixs} />
        </Swipercarousel>
      </div>
    </>
  );
};

export default Home;
