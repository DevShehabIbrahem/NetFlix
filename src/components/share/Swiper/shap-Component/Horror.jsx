import React from "react";

const Horror = ({ item, prefixs }) => {
  return (
    <div>
      <img
        src={`${prefixs}${item.backdrop_path}`}
        alt="poster"
        className="hover:scale-[1.09] transition-all max-h-[200px] w-full object-contain"
      />
    </div>
  );
};

export default Horror;
