import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      );
      const json = await res.json();
      //   console.log(json.data.movies);
      setMovies(json.data.movies);
      setLoading(false);
      console.log(movies);
    };
    fetchMovie();
  }, []);

  //   const fetchMovie = async () => {
  //       const json = await( await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')).json() );
  //   };

  return (
    <div>
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        <div>
          {movies.map((item) => (
            <Movie
              key={item.id}
              id={item.id}
              coverImg={item.medium_cover_image}
              title={item.title}
              summary={item.summary}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
