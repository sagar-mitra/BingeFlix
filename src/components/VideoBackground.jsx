import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

  // Trailer key
  const trailerKey = useMovieTrailer(movieId)

  if(!trailerKey) return 

  return (
    <div className="absolute -top-4 left-0 w-full -z-10">
      <iframe
      className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?si=ASfzBN7OSDzYZ8QI&autoplay=1&mute=1&loop=1&playlist=${trailerKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
