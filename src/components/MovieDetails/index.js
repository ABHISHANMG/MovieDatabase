import React, { useEffect, useState } from "react";
import { Header } from "../Header";

import './index.css'
import { MovieCastItems } from "../MovieCastItems";

export const MovieDetails = (props) => {
  const [movieReview, setMovieReview] = useState([]);
  const [movieCast,setMovieCast] = useState([])

  const movieId = props.match.params.id;

  const apiKey = "c45a857c193f6302f2b5061c3b85e743";

  const getMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    );
    const data = await response.json();
    console.log(data);

    const formattedData = {
      id: data.id,
      runtime: data.runtime,
      releaseDate: data.release_date,
      title: data.title,
      voteAverage: data.vote_average,
      backdropPath: data.backdrop_path,
      posterPath: data.poster_path,
      overview: data.overview,
    };

    setMovieReview(formattedData);
  };


  const getMovieCast = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
    const data = await response.json()
    const formattedCast = data.cast.map(eachItem=>({
        character:eachItem.character,
        originalName:eachItem.original_name,
        profilePath:eachItem.profile_path,
        castId:eachItem.cast_id,
    }))  

    setMovieCast(formattedCast)

  }

  useEffect(() => {
    getMovie();
    getMovieCast()
  }, []);

  const {
    title,
    id,
    backdropPath,
    posterPath,
    runtime,
    overview,
    releaseDate,
    voteAverage,
  } = movieReview;

  return (
    <div className="bg-dark bg-container">
      <div className="movie-overview-container">
        <div className="movie-details-container">
          <div>
            <div className="sub-movie-details-container">
            <img className="img-movie-poster"
              src={`https://image.tmdb.org/t/p/w500${backdropPath}`}
              alt={title}
            />
              <div className="movie-details-container">
              <h1 className="fs-4">{title}</h1>
              <p>Rating: {voteAverage}</p>
              <p>Release Date: {releaseDate}</p>
              </div>
            </div>
          </div>
          <h1>Overview</h1>
          <p>{overview}</p>
        </div>
        <img
          style={{borderRadius:5}}
          src={`https://image.tmdb.org/t/p/w500${backdropPath}`}
          title={title}
          alt={title}
        />
      
      </div>
    <h1 className="text-white">Cast</h1>
    <ul className="movie-cast-container">
        {movieCast.map(eachItem=> <MovieCastItems eachItem={eachItem} key={eachItem.castId}/>)}
    </ul>
    </div>
  );
};
