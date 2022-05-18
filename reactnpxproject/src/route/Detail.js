import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  // const x = useParams();
  // console.log(x);
  const {id} = useParams();
  console.log(id);
  const [detail, setDetail] = useState("");
  const [loading, setLoading] = useState(true);
  

const getMovie = async() => {
  const json = await (
    await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetail(json.data.movie);
    setLoading(false);
}

  useEffect(() => {
    getMovie();
  }, [id])
    return (
    <div>
    {loading ? (
      <h1> Loading...</h1>
    ) : (
      <div>
          <Movie
          key={detail.id}
          id={detail.id}
          coverImg={detail.medium_cover_image}
          title={detail.title}
          summary={detail.summary}
          genres={detail.genres}
        />
        <div>{detail.description_full} </div>
        <div>{`Language : ${detail.language}`} </div>
        <div>{`Rating : ${detail.rating}`} </div>
        <div>{`Runtime : ${detail.runtime}`} </div>
      </div>
    )}
  </div>
    )
}

export default Detail;
