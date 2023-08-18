import React from "react";


import './index.css'

export const MovieCastItems = (props) => {
  const { castId, originalName, profilePath, character } = props.eachItem;

  return (
    <li title={originalName} className="list-cast-container">
      <img className="cast-img-size" src={`https://image.tmdb.org/t/p/w500${profilePath}`} alt={originalName} />
      <p className="text-white">{originalName}</p>
      <p className="text-white">Character: {character}</p>
    </li>
  );
};
