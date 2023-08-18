import React from "react";
import { Link,to } from "react-router-dom/cjs/react-router-dom.min"; 

import './index.css'

export const MovieItems = (props) => {
  const { eachItem } = props;
  const {
    id,
    title,
    releaseDate,
    popularity,
    posterPath,
    video,
    voteAverage,
    voteCount,
    overview,
  } = eachItem;

  return ( 
    <Link className="movies-list-container img-thumbnail" to={`/movie-review/${id}`}>
    <li>
      <img className="image-size" src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title}/>
      <h1 className="fs-6" title={title}>{title}</h1>
      </li>
      <p>Rating: {voteAverage}</p>
    </Link>
    
  );
};
