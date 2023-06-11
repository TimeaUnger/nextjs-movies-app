"use client"
import React from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const GenreSelect = (props) => {

  
  const genres = [
    "All",
    "Drama",
    "Romance",
    "Animation",
    "Adventure",
    "Family",
    "Comedy",
    "Fantasy",
    "Science Fiction",
    "Action"
  ];

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const activeGenre = searchParams.get("activeGenre") || "All";
  const sortBy = searchParams.get("sortBy") || "release_date";

  const onSelectHandler = (event) => {
    
    const genreText = event.target.innerText.toLowerCase();
    const selectedGenre = genreText[0].toUpperCase() + genreText.slice(1);
    const filterBy = selectedGenre === "All" ? "" : selectedGenre;
    const searchParam = `?filter=${filterBy}&sortBy=${sortBy}&activeGenre=${selectedGenre}`
    router.push(`${pathname}${searchParam}`);
  };

  return (
    <div className="genreSelect">
      <ul data-testid="GenreListItem" aria-label="genresAll">
        {genres.map((genre, index) => {
          return (
            <li
              key={index}
              onClick={onSelectHandler}
              className={`genreItem ${activeGenre === genre && "active"}`}
            >
              {genre}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GenreSelect;
