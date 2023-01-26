import React, { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { DetailsDataMovies, DetailsDataTv } from '../interfaces';

interface Props {
    program: DetailsDataMovies & DetailsDataTv,
    storedDataMovies: (DetailsDataMovies)[] ,
    storedDataTv: (DetailsDataTv)[],
}

const FavoriteCard:React.FC<Props> = ({program, storedDataMovies, storedDataTv}) => {
    
    const [displayTrash, setDisplayTrash] = useState(false);

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

    const deleteFromFavorites = () => {
        let storedTv:Array<number> = window.localStorage.tv.split(',');
        let storedMovies:Array<number> = window.localStorage.movies.split(',');
        if(storedMovies?.length){
        for(let i = 0; i< storedMovies?.length; i++){
            let newData = storedMovies?.filter((id) => id != program.id );
            window.localStorage.movies= newData;
            window.location.reload();
        }
        }
        if(storedTv?.length){
            for(let i = 0; i< storedTv.length; i++){
            let newData = storedTv.filter((id) => id != program.id );
            window.localStorage.tv= newData;
            window.location.reload();
            }
        }
    }



  return (
    <div className='relative' onMouseEnter={() => setDisplayTrash(true)} onMouseLeave={() => setDisplayTrash(false)}>
        <img src={`https://image.tmdb.org/t/p/original/${program.backdrop_path}`} alt={program.name || program.title}
        className="w-[300px] h-[225px] object-cover rounded-sm"
        />
        {displayTrash && (
            <BsFillTrashFill className='w-full h-[15%] rounded-b-sm bg-red-700 text-white text-xl absolute bottom-0 p-2 cursor-pointer'
             onClick={deleteFromFavorites}/>
        )}
    </div>
  )
}

export default FavoriteCard