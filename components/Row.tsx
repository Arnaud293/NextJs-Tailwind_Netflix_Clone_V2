import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { TrendingsDataMovies, TrendingsDataTv } from '../interfaces';


const Row = ({ fetchUrl, title }) => {

  const [programs, setPrograms] = useState<TrendingsDataMovies[] | TrendingsDataTv[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const req  = await axios.get(fetchUrl);
      const data: (TrendingsDataMovies| TrendingsDataTv)[] = req.data.results;
      setPrograms(
        data.filter(el => el.backdrop_path !== null)
      )
      console.log(data);
      
    }
    getData()
  },[]);


  return (
    <div className='p-4 overflow-x-hidden'>
        <h2 className='text-white text-2xl font-semibold'>{title}</h2>
        <div className=" w-full flex overflow-x-scroll gap-2 mt-2 ">
            {programs?.slice(0,10).map((program, index) => (
                <img src={`https://image.tmdb.org/t/p/original/${program?.backdrop_path}`} alt={program?.title | program?.name} className='w-[200px] h-[120px] rounded-sm' />
            ))}
        </div>
    </div>
  )
}

export default Row