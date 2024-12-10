import React from "react";

function Moviecard({
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  movieObj,
  watchList,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      } 
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w220_and_h330_face${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="m-4 p-1.5 flex justfiy-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="m-4 p-1.5 flex justfiy-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl mt-auto w-full p-3 text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default Moviecard;
