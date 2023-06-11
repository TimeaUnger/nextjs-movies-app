"use client"
import React from "react";
// import defaultImage from "../../assets/image-placeholder.jpg";
import { useState } from "react";
import MenuHamburger from "./MenuHamburger";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import defaultImage from '../public/assets/image-placeholder.jpg';
import Image from 'next/legacy/image'

const MovieTile = (props) => {
  
  const { title, release_date, genres, poster_path, id } = props.movieDetails;
  const [src, setSrc] = React.useState(poster_path);


  
  return (
    <div className="movieTileWrapper" data-id={id}>

      <MenuHamburger />
      <div className="movieTile">
        <div
          className="movieImage"
        // onClick={handleClick}
        >

          <Image
            loader={GraphCMSImageLoader}
            src={src}
            width={323}
            height={486}
            alt=""
            placeholder="empty"
            onError={() => setSrc(defaultImage)}
            unoptimized={true}
          />

        </div>
        <div className="movieTileDetails">
          <div className="movieTitleWrapper">
            <div className="movieTitle">{title}</div>
            <div className="releaseDate">{release_date.substr(0, 4)}</div>
          </div>
        </div>
        <div className="movieGenre">{genres ? genres.join(", ") : ""}</div>
      </div>
    </div>
  );
};

export default MovieTile;

function GraphCMSImageLoader({ src }) {
  return src;
}
