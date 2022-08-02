import React from "react";
import MediaCard from "../general/MediaCard";
import { useSearchMedia } from "../general/useSearchMedia";

const Movies = () => {
  const { loading, media: movies } = useSearchMedia({title: "spider-man", type: "movie"});

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="grid grid-cols-5 gap-x-2 gap-y-8">
          {movies.map((movie) => (
            <MediaCard data={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default Movies;
