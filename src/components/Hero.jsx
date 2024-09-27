import { useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";
import { baseImgUrl } from "../utils/constants";
const Hero = () => {
  const { movies, isLoading, error } = useSelector((store) => store.movie);
  //0-19 arası rastgele sayı üret
  const i = Math.floor(Math.random() * 20);

  //üretilen sayıya göre movies dizisinin indexindeki elemana eris
  const movie = movies[i];
  console.log(movie);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
      {isLoading || !movie ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-start">{movie.overview}</p>
            <p>
              <span>IMDB:</span>
              <span className="text-amber-300 font-semibold ms-2">
                {movie.vote_average.toFixed(1)}
              </span>
            </p>
            <div className="flex gap-5">
              <button className="p-2 bg-rose-600 rounded hover:bg-rose-700">
                Filmi İzle
              </button>
              <button className="p-2 bg-cyan-600 rounded hover:bg-cyan-700">
                Listeye Ekle
              </button>
            </div>
          </div>
          <div className="flex justify-center banner">
            <img
              className="my-4 object-contain rounded-lg max-h-[300px]"
              src={baseImgUrl + movie.backdrop_path}
              alt="movie_backdropImg"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
