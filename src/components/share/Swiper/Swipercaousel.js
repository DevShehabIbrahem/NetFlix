import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import axios from "../../../Api/baseURL";

import "swiper/swiper.min.css";
import "./swiper.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
SwiperCore.use([Navigation]);

const Swipercaousel = ({ children, title, fetchurl }) => {
  const [items, setItems] = useState([]);

  //Reusble Asynck function
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchurl);
      setItems(res.data.results);
    }
    fetchData();
  }, [fetchurl]);

  //items map
  const slide = items?.map((item) => (
    <SwiperSlide key={item.id} className="mb-8 py-5 mx-[8px] cursor-pointer">
      {React.cloneElement(children, { key: item.id, item })}
    </SwiperSlide>
  ));

  return (
    <>
      <h1 className="text-[20px] font-semibold mb-2 text-white">{title}</h1>
      <Swiper
        navigation
        breakpoints={{
          500: {
            width: 640,
            slidesPerView: 3,
          },
          640: {
            width: 640,
            slidesPerView: 3,
          },

          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
      >
        {slide}
      </Swiper>
    </>
  );
};
export default Swipercaousel;
