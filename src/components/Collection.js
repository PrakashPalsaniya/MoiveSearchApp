import React from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
const Collection = ({ collection, removeMovie }) => {
  return (
    <div>
      
      <div className="flex flex-wrap gap-4 justify-center bg-slate-300">
        {collection.length > 0 ? (
          collection.map((movie, index) => (
            <div
              key={index}
              className="flex flex-col border border-black p-2 m-4 shadow-slate-200 shadow-xl w-[240px] min-h-[300px] items-center justify-center bg-white rounded-sm"
            > <Link to={`/movie/${movie.imdbID}`} className="cursor-pointer">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-[200px] h-[300px] object-cover"
              />
              <h1 className="overflow-hidden text-lg block max-w-[200px] font-extrabold">
                {movie.Title}
              </h1>
              </Link>
              <div className="flex gap-10 justify-between">
                <h1 className="font-serif">Year: {movie.Year}</h1>
                <h1 className="font-serif">Type: {movie.Type}</h1>
              </div>
              <button
                onClick={() => removeMovie(index)} 
                className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="flex text-center pt-[200px] text-4xl font-roboto font-bold items-start max-h-screen text-black">
            <p>No Movies In The Collection...</p>
            <div className="flex justify-center pt-10 min-h-screen">
    
    </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
