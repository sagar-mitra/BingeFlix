import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    // Subscribing to the store
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies.results[0];
    const {original_title, overview, id} = mainMovie


  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId = {id} />
    </div>
  )
}

export default MainContainer