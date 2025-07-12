import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const movieVideos = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const videosData = await res.json();

    // Filtering the trailer videos
    const trailerVideos = videosData.results.filter(
      (videos) => videos.type === "Trailer"
    );
    // Filtering the teaser videos
    const teaserVideos = videosData.results.filter(
      (videos) => videos.type === "Teaser"
    );

    const trailer = trailerVideos.length ? trailerVideos[0] : teaserVideos[0];

    setTrailerKey(trailer.key);
  };

  useEffect(() => {
    movieVideos();
  }, []);

 return trailerKey
};

export default useMovieTrailer;
