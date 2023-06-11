
// import styles from './layout.module.css';
import MovieTiles from "../components/MovieTiles";
import GenreSelect from "./GenreSelect";
import SortControl from "./SortControl";

export default function Layout({ children }) {

  console.log(children)
  return (
    <>
      <div className="">
        {children}
        <div className="selectSection">
          <GenreSelect />
          <SortControl />
        </div>
        <MovieTiles />
      </div>
    </>
  )
}