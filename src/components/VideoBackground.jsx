import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

  const trailerKey = useMovieTrailer(movieId)
  
  
  if(!trailerKey) return 

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerKey}?si=ASfzBN7OSDzYZ8QI`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
