"use client"
// import { useSearchParams, useLocation } from "react-router-dom";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const SortControl = () => {

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const sortOption = searchParams.get("sortBy") || "release_date";
  
  const handleSortSelect = (e) => {

    const current = new URLSearchParams(searchParams);
    const selectedOption = e.target.value;
    current.set("sortBy", selectedOption);
    router.push(`${pathname}/?${current}`);
  };

  return (
    <div className="sortControlWrapper">
      <span className="sortByLabel">SortBy</span>
      <span className="sortByControl">
        <select
          className="sortBySelect"
          onChange={handleSortSelect}
          value={sortOption}
        >
          <option className="sortOption" value="release_date">
            Release Date
          </option>
          <option className="sortOption" value="title">
            Title
          </option>
        </select>
      </span>
    </div>
  );
};

export default SortControl;
