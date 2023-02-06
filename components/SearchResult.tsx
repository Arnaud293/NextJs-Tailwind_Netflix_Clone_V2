import React, { useState } from 'react'
import { TrendingsDataMovies, TrendingsDataTv } from '../interfaces';
import QuickView from './QuickView';


const SearchResult:React.FC = ({result}) => {

  const [displayQuickView, setDisplayQuickView] = useState(false);
  const [quickViewData, setQuickViewData] = useState<(TrendingsDataMovies | TrendingsDataTv)[]>([]);

  const handleQuickView = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    displayQuickView ? setDisplayQuickView(false) : setDisplayQuickView(true);
    
    const data: (TrendingsDataMovies| TrendingsDataTv)[] = (result || [])?.filter(program =>
    program.backdrop_path === e.target.src.split('https://image.tmdb.org/t/p/original/').join(""));
    setQuickViewData(data);
  }

  return (
    <div className='h-fit min-h-screen bg-gray-900 text-white py-20 flex flex-col items-center p-5'>
      {displayQuickView && <QuickView program={quickViewData[0]} setDisplayQuickView={setDisplayQuickView} displayQuickView={displayQuickView} />}
      <div className="flex gap-4 flex-wrap w-full justify-center">
        {
          result.map((program) => (
            <div key={program.id} onClick={(e) => handleQuickView(e)}>
              <img src={`https://image.tmdb.org/t/p/original/${program.backdrop_path}`} alt={program.name || program.title}
                className="w-[300px] h-[225px] object-cover rounded-sm cursor-pointer"
              />
            </div>
          ))
        
        }
      </div>
    </div>
  )
}

export default SearchResult