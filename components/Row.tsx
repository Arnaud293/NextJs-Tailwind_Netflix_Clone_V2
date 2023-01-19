import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { TrendingsDataMovies, TrendingsDataTv, request } from '../interfaces';
import { RxCross1 } from 'react-icons/rx';


const Row:React.FC<request> = ({ fetchUrl, title }) => {

  const [programs, setPrograms] = useState<TrendingsDataMovies[] | TrendingsDataTv[] | null>(null);
  const [quickView, setQuickView] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const req  = await axios.get(fetchUrl);
      const data: TrendingsDataMovies[]| TrendingsDataTv[] = req.data.results;
      setPrograms(
        data.filter(el => el.backdrop_path !== null)
      )
      console.log(data);
      
    }
    getData()
  },[]);


  return (
    <>
    {quickView && (
      <div className="fixed flex justify-center items-start backdrop:blur-5 h-screen w-screen z-10 top-[100px]">
        <div className="w-[60vw] h-[60vh] bg-gray-900 rounded-md">
          <RxCross1 size={30} style={{color:"white"}} onClick={() => setQuickView(false)} />
        </div>
      </div>
    )}
    <div className='p-4 overflow-x-hidden'>
        <h2 className='text-white text-2xl font-semibold'>{title}</h2>
        <div className="w-full flex overflow-x-scroll gap-2 mt-2 py-2">
            {programs?.slice(0,10).map((program, index) => (
                <img src={`https://image.tmdb.org/t/p/original/${program?.backdrop_path}`}
                alt={program?.title | program?.name}
                className='w-[200px] h-[120px] rounded-sm cursor-pointer hover:scale-105' 
                onClick={() => setQuickView(true)}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default Row