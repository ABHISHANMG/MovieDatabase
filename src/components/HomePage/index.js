import React, { useEffect, useState } from "react";
import { Header } from "../Header";

import "./index.css";
import { MovieItems } from "../MovieItems";

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const [movieList, setMovieList] = useState([]);

  const [searchInputVal, setSearchInputVal] = useState("movie");

  const apiKey = "c45a857c193f6302f2b5061c3b85e743";

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchInputVal}&page=1`
    );
    const data = await response.json();
    console.log(data.results);

    const formattedData = data.results.map((eachItem) => ({
      id: eachItem.id,
      originalLanguage: eachItem.original_language,
      originalTitle: eachItem.original_title,
      overview: eachItem.overview,
      popularity: eachItem.popularity,
      posterPath: eachItem.poster_path,
      releaseDate: eachItem.release_date,
      title: eachItem.title,
      video: eachItem.video,
      voteAverage: eachItem.vote_average,
      voteCount: eachItem.vote_count,
    }));

    setMovieList(formattedData);
  };

  useEffect(() => {
    getData();
  }, [searchInputVal]);

  const searchInput = (val) => {
    setSearchInputVal(val);
  };

  const itemsPerPage = 7;

  const totalPages = Math.ceil(movieList.length / itemsPerPage);

  const handleClickPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const startIndex = (totalPages - currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const displayedItems = movieList.slice(startIndex, endIndex);
  console.log(displayedItems);

  return (
    <>
      <Header searchInput={searchInput} />
      <div className="bg-container bg-dark">
        <ul className="unodered-movies-container">
          {displayedItems.map((eachItem) => (
            <MovieItems key={eachItem.id} eachItem={eachItem} />
          ))}
        </ul>
        <div className="buttons-container">
          <button
            className="btn btn-outline-primary"
            aria-label="Previous"
            onClick={handleClickNext}
            disabled={currentPage === totalPages - 1}
          >
            Prev
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={handleClickPrevious}
            disabled={currentPage === 0}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
