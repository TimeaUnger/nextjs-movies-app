"use client"
import React, {useState, useEffect} from "react";
import defaultImage from '../public/assets/image-placeholder.jpg';
// import {Link, useLocation, Outlet, useParams} from "react-router-dom";
import Image from 'next/legacy/image'
import { useSearchParams, usePathname, useRouter  } from 'next/navigation';
import MoviesDataService from '../services/http.services';
import Link from 'next/link';

const MovieDetails = () => {

  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [srcImg, setSrcImg] = React.useState();
  const [movieData, setMovieData] = useState();

  // get the movie's id from the url
  const router = useRouter();
  //const id = router?.query.movieId;

  const id = 15;
  // const location = useRouter();

  // const PATH = location.search;
  // const update = !location.state ? false : location.state.shouldUpdate;
  const searchParams = useSearchParams();
  const currentSerachParams = new URLSearchParams(searchParams);
  const moviesUrl = `${currentSerachParams}`;

  useEffect(() => {
    const fetchData = async () => {
      const dataService = new MoviesDataService(moviesUrl)
      await dataService.get(id).then((response) => {
        setMovieData(response.data);
        setSrcImg(response.data.poster_path)
      })
      .catch((e) => {
        console.log(e);
      });
    }
  
    fetchData()
      .catch(console.error);

  }, [moviesUrl, shouldUpdate, id]);

  // fetch is asynchronous, 
  // we don’t have the result straight away
  if (!movieData) return null;

  console.log(movieData)

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  const {
    title,
    vote_average,
    genres,
    release_date,
    runtime,
    overview,
  } = movieData;

  return (
    <div className="movieDetailsContainer">
      <div className="movieDetailTopHeader">
        <div className="movieService">netflixroulette</div>
        <Link href={`/${searchParams}`}>
          <div className="movieSearch"></div>
        </Link>
      </div>
      <div className="moviesDetails">
        <div className="movieDetailsInner">
          <div className="movieImage">
          <Image
            loader={GraphCMSImageLoader}
            src={srcImg}
            width={323}
            height={486}
            alt=""
            placeholder="empty"
            onError={() => setSrcImg(defaultImage)}
            unoptimized={true}
          />
          </div>
          <div className="movieSummary">
            <div className="movieDetailsHeader">
              <div className="movieDetailsTitle">{title}</div>
              <div className="movieDetailsRatingCircle">
                <span className="movieDetailsRating">{vote_average}</span>
              </div>
            </div>
            <div className="movieDetailsGenre">
              {genres ? genres.join(", ") : ""}
            </div>
            <div className="movieDateRuntimeWrapper">
              <div className="movieDetailsReleaseDate">
                {release_date?.substr(0, 4)}
              </div>
              <div className="movieDetailsRunTime">
                {toHoursAndMinutes(runtime)}
              </div>
            </div>
            <div className="movieDetailsOverview">{overview}</div>
          </div>
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};
export default MovieDetails;

function GraphCMSImageLoader({ src }) {
  return src;
}

MovieDetails.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
    </>
  )
}
