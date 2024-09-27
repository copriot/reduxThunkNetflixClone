import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getPopular, { getGenres } from "../redux/movieActions";
import Hero from "../components/Hero";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);
  return (
    <div>
      <h1>
        <Hero />
      </h1>
    </div>
  );
};

export default Home;
