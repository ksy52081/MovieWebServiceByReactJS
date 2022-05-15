import { useEffect, useState } from "react";

function App() {
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
            <div key={item.id}>
              <img src={item.medium_cover_image} />
              <h2>{item.title}</h2>
              <p>{item.summary} </p>
              <ul>
                {item.genres.map((genre) => (
                  <li key={genre}> {genre} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
