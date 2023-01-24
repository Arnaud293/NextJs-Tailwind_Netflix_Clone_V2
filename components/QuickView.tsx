import React from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { AiOutlinePlus, AiOutlineLike } from 'react-icons/ai';
import Genres from './Genres';
import { TrendingsDataMovies, TrendingsDataTv } from '../interfaces';

interface Props {
  program: (TrendingsDataMovies | TrendingsDataTv),
  setDisplayQuickView:  (newValue: boolean) => void,
  displayQuickView: boolean
}
const QuickView:React.FC<Props> = ({ setDisplayQuickView, program, displayQuickView}) => {

  const handleFavorites = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();

    let storedTv = window.localStorage.tv ? window.localStorage.tv.split(',') : [];
    let storedMovies = window.localStorage.movies ? window.localStorage.movies.split(',') : [];

    if(!storedMovies.includes(program.id.toString()) && program.title){
      storedMovies.push(program.id);
      window.localStorage.movies = storedMovies;
      alert(`${program.title} is now added to your list!`)
    }
    else if(!storedTv.includes(program.id.toString()) && program.name){
      storedTv.push(program.id);
      window.localStorage.tv = storedTv;
      alert(`${program.name} is now added to your list !`)
    }
  }

  return (
    <div className="fixed flex justify-center items-start backdrop-blur h-screen w-screen z-10 top-[100px] p-10">
      <div className="w-[60vw] h-[80vh] bg-gray-900 rounded-md relative">
        <RxCross1 size={30} onClick={() => setDisplayQuickView(false)} className='text-white absolute right-1 top-1 z-10'/>
        <div className="w-full h-4/6 relative">
          <img src={`https://image.tmdb.org/t/p/original/${program?.backdrop_path}`} alt="" className='h-full w-full object-cover object-top' />
          <div className="absolute w-full h-full flex flex-col justify-center ml-2 sm:ml-4 sm:p-2 top-0">
            <h2 className='text-white text-2xl sm:text-3xl font-semibold'>{program?.title || program?.name}</h2>
            <div className="flex sm:flex-row flex-col gap-3">
              <button type='button' 
                className='flex items-center justify-center hover:brightness-50
                bg-white text-black rounded-md p-2
                sm:min-w-[220px]sm:min-h-[60px] w-[150px] h-[60px] font-bold text-2xl'>
                <BsPlayFill/> 
                Play
              </button>
              <div className="flex gap-3">
                <AiOutlinePlus size={40} className=
                "text-white border border-white rounded-full bg-gray-900 bg-opacity-50 p-3 h-[60px] w-[60px] cursor-pointer hover:brightness-50"
                onClick={(e) => handleFavorites(e)} />
                <AiOutlineLike size={40} className=
                "text-white border border-white rounded-full bg-gray-900 bg-opacity-50 p-3 h-[60px] w-[60px] cursor-pointer hover:brightness-50" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-2/6 flex flex-col md:grid md:grid-cols-2 text-white overflow-y-scroll">
          <div className="flex flex-col p-5">
            <div className="flex items-center gap-4">
              <p className='text-smfont-semibold'>{(program?.release_date || program?.first_air_date).slice(0,4)}</p>
              <span>{program?.vote_average.toFixed(1)}/10✨</span>
            </div>
            <h3 className='my-3 text-2xl font-bold p-1 border-b border-gray-500'>Overview</h3>
            <p>{program?.overview ? program.overview : 'No overview avaible for this program.'}</p>
          </div>
          <div className='p-5'>
            <Genres program={program} />
          </div>
        </div>
      </div>
  </div>
  )
}

export default QuickView