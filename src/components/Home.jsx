import React, { useEffect, useState } from "react";
import HoverCover from "../components/share/Hoverheader";
import Swipercarousel from "../components/share/Swiper/Swipercaousel";
import Vid from "../Assets/Videos/Bubble - Official Trailer - Netflix.mp4";
import Requests from "../Api/reguests";
import axios from "../Api/baseURL";
import Toprated from "../components/share/Swiper/shap-Component/Toprated";
import Movies from "../components/share/Swiper/shap-Component/Movies";
import Horror from "../components/share/Swiper/shap-Component/Horror";
import Tv from "../components/share/Swiper/shap-Component/Tv";

const Home = () => {
  const [randombanner, setRandombanner] = useState([]);

  useEffect(() => {
    async function fetch() {
      const res = await axios.get(Requests.fetchActionMovies);
      setRandombanner(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    }
    fetch();
  }, []);
  return (
    <>
      <HoverCover
        videoSrc={Vid}
        pausedOverlay={<img src={randombanner?.backdrop_path} alt="poster" />}
        videoId="WItvH4Hoyag"
      />
      <div className="mx-4">
        <Swipercarousel fetchurl={Requests.fetchTopRated} title="TopRated">
          <Toprated />
        </Swipercarousel>

        <Swipercarousel fetchurl={Requests.fetchActionMovies} title="Movies">
          <Movies />
        </Swipercarousel>

        <Swipercarousel fetchurl={Requests.fetchHorrorMovies} title="Horror">
          <Horror />
        </Swipercarousel>

        <Swipercarousel fetchurl={Requests.fetchTvshows} title="TVShows">
          <Tv />
        </Swipercarousel>
      </div>
    </>
  );
};

export default Home;
