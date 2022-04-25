import React from "react";

const NetflixOriginal = ({ item, islarge, prefixs }) => {
  return (
    <div>
      <img
        src={`${prefixs}${item.poster_path}`}
        alt="poster"
        className={`hover:scale-[1.09] transition-all ${
          islarge && "h-[300px] w-full"
        }`}
      />
    </div>
  );
};

export default NetflixOriginal;
