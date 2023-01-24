import axios from 'axios';
import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { DetailsDataMovies, DetailsDataTv } from '../../interfaces';

const Favorites:NextPage = ({}) => {

  const [storedDataMovies, setStoredDataMovies] = useState<(DetailsDataMovies)[]>([]);
  const [storedDataTv, setStoredDataTv] = useState<(DetailsDataTv)[]> ([]);

  // Get stored movies
  useEffect(() => {
      let moviesArr:DetailsDataMovies[] = [];
      let moviesId = window.localStorage.movies ? window.localStorage.movies.split(',') : [];
      for (let i=0; i < moviesId.length; i++){
          axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`)
          .then(res => moviesArr.push(res.data))
          .then(() => setStoredDataMovies(moviesArr));     
      }
  },[])
  // Get stored Tv shows
  useEffect(() => {
      let tvArr:DetailsDataTv[] = [];
      let tvId = window.localStorage.tv ? window.localStorage.tv.split(',') : [];
      for (let i=0; i < tvId.length; i++){
          axios.get(`https://api.themoviedb.org/3/tv/${tvId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`)
          .then(res => tvArr.push(res.data))
          .then(() => setStoredDataTv(tvArr));    
      }
      console.log(setStoredDataTv);
      
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
    <div className='h-screen bg-gray-900 text-white py-20'>
      <div className="">
        {storedDataMovies?.length 
        ? (
          storedDataMovies.map((movie) => (
            <div>
              <img src={movie.backdrop_path} alt={movie.title} />
            </div>
          ))
        )
        :(
          <h2>No favorites movies</h2>
        )}
      </div>
      <div className="">MOVIES</div>
    </div>
  )
}

export default Favorites