import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { BsPlayFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import requests from '../constants/requests';

import { TrendingsDataMovies, TrendingsDataTv } from '../interfaces';

interface backgroundImage {
  bannerImg : string,
}

const Banner:React.FC = () => {

  const [trending, setTrending] = useState<TrendingsDataMovies | TrendingsDataTv | null>(null);

  const background = {
    backgroundImage : `url("https://image.tmdb.org/t/p/original/${trending?.poster_path}")`,
    backgroundSize : "cover",
    backgroundPosition: "center",
  }

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
    <div className='w-full h-screen' style={background}>
      <div className=" w-full h-full flex flex-col justify-center gap-3">
        <h2 className=' text-white font-bold text-3xl'>{trending?.title || trending?.name}</h2>
        <p className=' text-white font-semibold'>{trending?.overview}</p>
        <div className="flex-col md:flex-row flex gap-3">
          <button type='button' 
            className='flex items-center justify-center
             bg-white text-black rounded-md p-2
             sm:min-w-[220px]sm:min-h-[70px] w-[150px] h-[70px] font-bold text-2xl'>
            <BsPlayFill/> Play
          </button>
          <button type='button' 
            className='flex items-center justify-center
             bg-gray-600 bg-opacity-80 text-white
              rounded-md p-2 w-[280px] h-[70px]
               font-bold text-2xl sm:min-w-[220px]sm:min-h-[70px] '>
            <AiOutlineInfoCircle /> More infos
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner