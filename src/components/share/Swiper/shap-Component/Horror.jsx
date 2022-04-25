import React from "react";

const Horror = ({ item }) => {
  const prefixs = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <img
        src={`${prefixs}${item.backdrop_path}`}
        alt="poster"
        className="hover:scale-[1.09] transition-all max-h-[200px] w-full"
      />
    </div>
  );
};

export default Horror;
