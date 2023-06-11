"use client"
import React, { useState } from "react";
import Button from "./Button";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const SearchForm = () => {

  const [searchVal, setSearchVal] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const PATH = searchParams.get('search');
  const searchParam = `?search=${searchVal}&searchBy=title&sortBy=release_date&activeGenre=All`
  const handleSearch = (event) => {

    if (event.keyCode === 13) {
      router.push(`${pathname}${searchParam}`);
    }

    if (event.type === "focus") {
      setSearchVal("");
    }
  };

  const handleBtnClick = () => {
    router.push(`${pathname}${searchParam}`);
  };

  const inputHandler = (event) => {
    setSearchVal(event.target.value);
  };

  return (
    <div className="searchWrapper">
      <div className="addMovieWrapper">
        <Link href={`/new${PATH}`} className="addMovie">
          + Add movie
        </Link>
      </div>
      <div className="searchInnerContent">
        <div className="findMovieLabel">Find your movie</div>
        <div className="searchInputRow">
          <div className="searchInput">
            <input
              type="search"
              data-testid="searchInput"
              placeholder="Search movie"
              onKeyDown={handleSearch}
              onFocus={handleSearch}
              onChange={inputHandler}
              value={searchVal}
            />
          </div>
          <div className="searchButton">
            <Button type="button" onClick={handleBtnClick}>
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;

// SearchForm.getLayout = function PageLayout(page) {
//   return (
//     <>
//       {page}
//     </>
//   )
// }
