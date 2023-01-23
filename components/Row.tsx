import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { TrendingsDataMovies, TrendingsDataTv, request } from '../interfaces';
import QuickView from './QuickView';

type UnionTrendingsData = TrendingsDataMovies | TrendingsDataTv;

const Row:React.FC<request> = ({ fetchUrl, title }) => {

  const [programs, setPrograms] = useState<UnionTrendingsData[] | null>(null);
  const [displayQuickView, setDisplayQuickView] = useState(false);
  const [quickViewData, setQuickViewData] = useState<UnionTrendingsData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const req  = await axios.get(fetchUrl);
      const data: (TrendingsDataMovies| TrendingsDataTv)[] = req.data.results;
      setPrograms(
        data.filter(el => el.backdrop_path !== null)
      )
    }
    getData()
  },[]);

  const handleQuickView = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    displayQuickView ? setDisplayQuickView(false) : setDisplayQuickView(true);
    
    const data: UnionTrendingsData[] = (programs || [])?.filter(program =>
    program.backdrop_path === e.target.src.split('https://image.tmdb.org/t/p/original/').join(""));
    setQuickViewData(data);
  }


  return (
    <>
    {displayQuickView && <QuickView program={quickViewData[0]} setDisplayQuickView={setDisplayQuickView} />}
    <div className='p-4 overflow-x-hidden'>
        <h2 className='text-white text-2xl font-semibold'>{title}</h2>
        <div className="w-full flex overflow-x-scroll gap-2 mt-2 py-2">
            {programs?.slice(0,10).map((program, index) => (
                <img src={`https://image.tmdb.org/t/p/original/${program?.backdrop_path}`}
                alt={program?.title || program?.name}
                className='w-[200px] h-[120px] rounded-sm cursor-pointer hover:scale-105' 
                onClick={(e) => handleQuickView(e)}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default Row