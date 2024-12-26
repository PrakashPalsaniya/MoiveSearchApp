import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import './All.css';


const Home = ({ ivalue, addToCollection }) => {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  let API;

  if (ivalue === '') {
    
    API = `http://www.omdbapi.com/?s=India&apikey=611f70a3`;
  } else {
    
    API = `http://www.omdbapi.com/?s=${ivalue}&apikey=611f70a3`;
  }
  
  
  

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, [ivalue]);

  useEffect(() => {
    setLoading(true);
    const getMovieData = async () => {
      try {
        const res = await axios.get(API);
        setMovieData(res.data.Search || []);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      } finally {
        setLoading(false);
      }
    };

    getMovieData();
  }, [ivalue]);

  return (
    <div className="bg-gray-50 min-h-screen py-6">
     
      <div className="flex flex-wrap gap-6 justify-center px-4">
        {movieData.length > 0 ? (
          movieData.map((movie, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-300 p-4 m-4 shadow-lg rounded-lg bg-white hover:shadow-2xl transition duration-300 w-[240px] min-h-[350px] items-center justify-center"
            >
              <Link to={`/movie/${movie.imdbID}`} className="cursor-pointer">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-[200px] h-[300px] object-cover rounded-lg"
                />
                <h1 className="overflow-hidden text-lg block max-w-[200px] font-bold mt-2 text-center">
                  {movie.Title}
                </h1>
              </Link>
              <div className="flex gap-4 justify-between w-full mt-2">
                <h1 className="font-serif text-gray-700">Year: {movie.Year}</h1>
                <h1 className="font-serif text-gray-700">Type: {movie.Type}</h1>
              </div>
              <button
                onClick={() => addToCollection(movie)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Add to Collection
              </button>
            </div>
          ))
        ) : loading ? (
          <div className="pt-12 text-3xl font-serif font-light flex gap-3 items-center">
            Loading... <ClipLoader size={32} color="black" />
          </div>
        ) : (
          <h1 className="text-3xl font-bold pt-5 text-gray-700">Could not find anything</h1>
        )}
      </div>
    </div>
  );
};

export default Home;