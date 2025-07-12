import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);

    const nowPlayingData = await res.json();

    dispatch(addNowPlayingMovies(nowPlayingData))
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
