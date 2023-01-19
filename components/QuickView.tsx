import React from 'react';
import { RxCross1 } from 'react-icons/rx';


const QuickView:React.FC = ({ setDisplayQuickView, program}) => {
  return (
    <div className="fixed flex justify-center items-start backdrop-blur h-screen w-screen z-10 top-[100px] p-10">
      <div className="w-[60vw] h-[60vh] bg-gray-900 rounded-md relative">
        <RxCross1 size={30} onClick={() => setDisplayQuickView(false)} className='text-white absolute right-1 top-1'/>
        <div className="w-full h-2/4">
          <img src={`https://image.tmdb.org/t/p/original/${program?.backdrop_path}`} alt="" className='h-full w-full object-cover object-top' />
        </div>
      </div>
  </div>
  )
}

export default QuickView