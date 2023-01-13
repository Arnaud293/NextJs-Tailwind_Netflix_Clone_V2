import axios from 'axios';
import React, { useEffect, useState } from 'react';

import requests from '../constants/requests';

import { TrendingsDataMovies, TrendingsDataTv } from '../interfaces';

const Banner:React.FC = () => {

  const [trending, setTrending] = useState<TrendingsDataMovies | TrendingsDataTv | null>(null);

  useEffect(() => {
    const getData = async () => {
      const req  = await axios.get(requests.getTrending);
      const data: (TrendingsDataMovies| TrendingsDataTv)[] = req.data.results;
      setTrending(
        data.filter(el => el.poster_path !== null)[
          Math.floor(Math.random() * data.length - 1)
        ]
      )
      console.log(data);
      
    }
    getData()
  },[]);

  return (
    <div className='w-full relative h-screen'>
      <img src={`https://image.tmdb.org/t/p/original/${trending?.poster_path}`} alt="" className='w-full h-full object-cover'/>
    </div>
  )
}

export default Banner