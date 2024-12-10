import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({handleAddtoWatchList, handleRemoveFromWatchList, watchList }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    }
    else {
      setPageNo(pageNo - 1);
    }
    
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=6daba881bf38bf4b3f1de40ba3efc973&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        // console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl text-center font-bold m-5">Trending Movies</div>

      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieObj) => {
          return (
            <Moviecard
              key={movieObj.id}
              movieObj={movieObj}
              watchList={watchList}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddtoWatchList={handleAddtoWatchList}
              handleRemoveFromWatchList ={handleRemoveFromWatchList}
            />
          );
        })}
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
}

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=6daba881bf38bf4b3f1de40ba3efc973&language=en-US&page=2
