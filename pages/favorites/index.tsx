import axios from 'axios';
import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { DetailsDataMovies, DetailsDataTv } from '../../interfaces';

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
  // Delete from favorites
  const handleDeleteFavoritesMovies = () => {
      let storedData:Array<number> = window.localStorage.movies.split(',');
      if(storedData?.length){
        for(let i = 0; i< storedData?.length; i++){
          let newData = storedData?.filter((id) => id != storedDataMovies[i].id );
          window.localStorage.movies= newData;
          window.location.reload();
        }
      }
  }
  const handleDeleteFavoritesTv = () => {
      let storedData:Array<number> = window.localStorage.tv.split(',');
      if(storedData?.length){
        for(let i = 0; i< storedData.length; i++){
        let newData = storedData.filter((id) => id != storedDataTv[i].id );
        window.localStorage.tv= newData;
        window.location.reload();
        }
      }
  }

  return (
    <div className='h-screen bg-gray-900 text-white py-20 flex flex-col items-center'>
      <h1>Favorites Tv Shows</h1>
      <div className="flex">
        {storedDataTv?.length 
        ? (
          storedDataTv.map((show) => (
            <div>
              <img src={`https://image.tmdb.org/t/p/original/${show.backdrop_path}`} alt={show.title}
              className="w-[300px] h-[225px] object-cover" />
            </div>
          ))
        )
        :(
          <h2>No favorites tv shows</h2>
        )}
      </div>
      <h1>Favorites Movies</h1>
      <div className="flex">
        {storedDataMovies?.length 
          ? (
            storedDataMovies.map((movie) => (
              <div>
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} 
                className="w-[300px] h-[225px] object-cover"/>
              </div>
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