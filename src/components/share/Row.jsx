import React, { useEffect, useRef, useState } from "react";
import axios from "../../Api/baseURL";
import "./style.css";

const Row = ({ fetchUrl, islarge, title }) => {
  const scrollEle = useRef();
  const [movies, setMovies] = useState([]);

  const prefixs = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function res() {
      const res = await axios.get(fetchUrl);
      setMovies(res?.data.results);
    }
    res();
  }, [fetchUrl, movies]);

  //wheel scroll
  useEffect(() => {
    scrollEle.current.addEventListener("wheel", (e) => {
      e.preventDefault();

      scrollEle.current.scrollBy({
        left: e.deltaY < 0 ? -40 : 40,
      });
    });
  }, []);

  let DataShow = movies.map((movie) => (
    <img
      key={movie.id}
      src={`${prefixs}${islarge ? movie.poster_path : movie.backdrop_path}`}
      alt="poster"
      className={
        islarge
          ? "h-[250px] hover:scale-[1.08] transition-[450ms] ease-in object-cover p-2"
          : "h-[150px] hover:scale-[1.08] transition-[450ms] ease-in object-cover p-2"
      }
    />
  ));

  return (
    <>
      <div className="ml-6 font-bold text-[18px] mb-2">
        <h1 className="text-white pt-5">{title}</h1>
      </div>
      <div
        className="scroll overflow-x-scroll overflow-y-hidden ml-6 "
        ref={scrollEle}
      >
        <div className="flex">{DataShow}</div>
      </div>
    </>
  );
};

export default Row;
