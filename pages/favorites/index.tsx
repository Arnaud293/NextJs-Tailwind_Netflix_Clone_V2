import axios from 'axios';
import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { DetailsDataMovies, DetailsDataTv } from '../../interfaces';

import { FavoriteCard } from '../../components';

const Favorites:NextPage = ({}) => {

  const [storedDataMovies, setStoredDataMovies] = useState<(DetailsDataMovies)[]>([]);
  const [storedDataTv, setStoredDataTv] = useState<(DetailsDataTv)[]> ([]);

  // Get stored movies
  useEffect(() => {
    const getFavoritesMovies = async () =>{
      let moviesArr:DetailsDataMovies[] = [];
      let moviesId = window.localStorage.movies ? window.localStorage.movies.split(',') : [];
      for (let i=0; i < moviesId.length; i++){
          await axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`)
          .then(res => moviesArr.push(res.data))
          .then(() => setStoredDataMovies(moviesArr));     
      }
    }
    getFavoritesMovies();

  },[])
  // Get stored Tv shows
  useEffect(() => {
    const getFavoritesTv = async () => {
      let tvArr:DetailsDataTv[] = [];
      let tvId = window.localStorage.tv ? window.localStorage.tv.split(',') : [];
      for (let i=0; i < tvId?.length; i++){
         await axios.get(`https://api.themoviedb.org/3/tv/${tvId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`)
          .then(res => tvArr.push(res.data))
          .then(() => setStoredDataTv(tvArr));    
      }
    }
    getFavoritesTv();
  },[])
 
  return (
    <div className='h-fit min-h-screen bg-gray-900 text-white py-20 flex flex-col items-center p-5'>
      <h1 className='text-3xl border-b p-2 mb-4'>Favorites Tv Shows 🍿💗</h1>
      <div className="flex gap-4 flex-wrap w-full justify-center">
        {storedDataTv?.length 
        ? (
          storedDataTv.map((show) => (
            <FavoriteCard program={show} key={show.id} storedDataTv={storedDataTv} {...setStoredDataTv} />
          ))
        )
        :(
          <h2>No favorites tv shows</h2>
        )}
      </div>
      <h1 className='text-3xl border-b p-2 mb-4'>Favorites Movies 🎬💗</h1>
      <div className="flex gap-4 flex-wrap">
        {storedDataMovies?.length 
          ? (
            storedDataMovies.map((movie) => (
              <FavoriteCard program={movie} key={movie.id} storedDataMovies={storedDataMovies} {...setStoredDataMovies}  />
            ))
          )
          :(
            <h2>No favorites movies</h2>
          )}
      </div>
    </div>
  )
}

export default Favorites