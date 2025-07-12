import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      {/* <SecondaryContainer/> */}
    </div>
  );
};

export default Browse;
