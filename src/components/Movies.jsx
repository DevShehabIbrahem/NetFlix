import React from "react";
import HoverCover from "../components/share/index";
import potser from "../Assets/images/Movies.webp";
import Vid from "../Assets/Videos/Scissor Seven.mp4";

const Movies = () => {
  return (
    <div>
      <HoverCover
        videoSrc={Vid}
        pausedOverlay={<img src={potser} alt="poster" />}
      />
    </div>
  );
};

export default Movies;
