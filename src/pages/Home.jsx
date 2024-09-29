import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPopular, { getGenres } from "../redux/movieActions";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Error from "../components/Error";
import MovieList from "../components/MovieList";
import React from "react";
const Home = () => {
  const { genres, isLoading, error } = useSelector((store) => store.genre);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);
  return (
    <>
      <Hero />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        genres.map((genre) => <MovieList genre={genre} key={genre.id} />)
      )}
    </>
  );
};
//bileşenin aldıgı proplar veya icerisindeki state degismedikce render edilmesinin önüne geçti React.memo
export default React.memo(Home);
