"use client"
import React, { useEffect, useState } from "react";
import MovieTile from "./MovieTile";
import { useSearchParams } from 'next/navigation';
import MoviesDataService from '../services/http.services';

const MovieTiles = () => {

  const [movies, setMovies] = useState();
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const searchParams = useSearchParams();
  const currentSerachParams = new URLSearchParams(searchParams);
  const moviesUrl = `${currentSerachParams}`;

  useEffect(() => {
    const fetchData = async () => {
      const dataService = new MoviesDataService(moviesUrl)
      await dataService.getAll().then((response) => {
        setMovies(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    }
  
    fetchData()
      .catch(console.error);

  }, [moviesUrl, shouldUpdate]);

  // fetch is asynchronous, 
  // we don’t have the result straight away
  if (!movies) return null;

  return (
    <>
      <div className="foundMoviesWrapper">
        <div className="foundMovies">
          <span className="foundMoviesNr">{movies.totalAmount}</span>
          <span className="foundMoviesTitle">movies found</span>
        </div>
      </div>
      <div className="movieListContentWrapper">
        <div className="movieTilesWrapper">
          {movies.data.map((movie) => {
            return <MovieTile movieDetails={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MovieTiles;

// MovieTiles.getLayout = function PageLayout(page) {
//   return (
//     <>
//       {page}
//     </>
//   )
// }