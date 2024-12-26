import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const MovieDetails = ({ addToCollection, movie }) => {
  const { id } = useParams(); 
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const API = `http://www.omdbapi.com/?i=${id}&apikey=611f70a3`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await axios.get(API);
        setMovieDetails(res.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">
      <div className="text-3xl font-serif font-light flex items-center gap-3">
        Loading... <ClipLoader size={32} color="black" />
      </div>
    </div>;
  }

  return (
    <div className="h-screen p-4 pt-1 max-w-7xl mx-auto overflow-hidden">
      {movieDetails ? (
        <div className="flex flex-col lg:flex-row gap-10  p-5 pt-4  shadow-lg rounded-lg bg-white h-full">
          <div className="flex-shrink-0  overflow-hidden rounded-md">
            <img
              src={movieDetails.Poster}
              alt={movieDetails.Title}
              className="w-full lg:w-[370px] lg:h-[610px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => addToCollection(movieDetails)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Add to Collection
            </button>
            <h1 className="text-4xl font-bold text-gray-800">{movieDetails.Title}</h1>
            <p className="text-lg"><strong>Year:</strong> {movieDetails.Year}</p>
            <p className="text-lg"><strong>Genre:</strong> {movieDetails.Genre}</p>
            <p className="text-lg"><strong>Plot:</strong> {movieDetails.Plot}</p>
            <p className="text-lg"><strong>Language:</strong> {movieDetails.Language}</p>
            <p className="text-lg"><strong>Rated:</strong> {movieDetails.Rated}</p>
            <p className="text-lg"><strong>Director:</strong> {movieDetails.Director}</p>
            <p className="text-lg"><strong>Actors:</strong> {movieDetails.Actors}</p>
            <p className="text-lg"><strong>IMDB Rating:</strong> {movieDetails.imdbRating}</p>
            <p className="text-lg"><strong>Runtime:</strong> {movieDetails.Runtime}</p>
            <p className="text-lg"><strong>Box Office:</strong> {movieDetails.BoxOffice}</p>
            <p className="flex flex-col text-lg">
              <strong>Ratings:</strong>
              {movieDetails.Ratings && movieDetails.Ratings.length > 0 ? (
                <ul className="list-disc pl-5">
                  {movieDetails.Ratings.map((rating, index) => (
                    <li key={index} className="text-gray-700">
                      {rating.Source}: {rating.Value}
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-gray-500">No ratings available.</span>
              )}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center text-2xl font-semibold text-gray-700">Movie not found!</p>
      )}
    </div>
  );
};

export default MovieDetails;
