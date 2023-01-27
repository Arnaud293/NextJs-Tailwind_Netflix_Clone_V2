import React from 'react';
import { TrendingsDataMovies, TrendingsDataTv } from '../interfaces';

interface Props {
    program: (TrendingsDataMovies | TrendingsDataTv),
}

const Genres:React.FC<Props> = ({ program }) => {
    let genreArr:Array<String> = [];
    const findGenre = () => {
        for (let i = 0; i < program.genre_ids.length; i++){
            switch(program.genre_ids[i]){
                case 28 :
                    genreArr.push('Action');
                    break;
                case 12 :
                    genreArr.push('Adventure');
                    break;
                case 99 :
                    genreArr.push('Documentary');
                    break;
                case 18 :
                    genreArr.push('Drama');
                    break;
                case 10751 :
                    genreArr.push('Family');
                    break;
                case 14 : 
                    genreArr.push('Fantasy');
                    break;
                case 36 :
                    genreArr.push('History');
                    break;
                case 27 :
                    genreArr.push('Horror');
                    break;
                case 10402 :
                    genreArr.push('Music');
                    break;
                case 9648 :
                    genreArr.push('Mystery');
                    break;
                case 10749 :
                    genreArr.push('Romance');
                    break;
                case 878 :
                    genreArr.push('Sci-Fi');
                    break;
                case 10770 :
                    genreArr.push('Tv-movie');
                    break;
                case 53 :
                    genreArr.push('Thriller');
                    break;
                case 10752 :
                    genreArr.push('War');
                    break;
                case 37 :
                    genreArr.push('Western');
                    break;
                case 10759 :
                    genreArr.push('Action-Adventure');
                    break;
                case 16 :
                    genreArr.push('Animation');
                    break;
                case 35 :
                    genreArr.push('Comedy');
                    break;
                case 80 :
                    genreArr.push('Crime');
                    break;
                case 10762 :
                    genreArr.push('Kids');
                    break;
                case 10763 :
                    genreArr.push('News');
                    break;
                case 10764 :
                    genreArr.push('Reality');
                    break;
                case 10765 :
                    genreArr.push('Sci-fi & Fantasy');
                    break;
                case 10766 :
                    genreArr.push('Soap');
                    break;
                case 10767 :
                    genreArr.push('Talk');
                    break;
                case 10768 :
                    genreArr.push('War & Politics');
                default :
                    return null;
            }
        }
        return genreArr.map((genre, index) => <li key={index} className='p-3 border'>{genre}</li>);
    }
    
  return (
    <ul className='flex gap-4 flex-wrap'>
        {program.genre_ids ? findGenre() : "No genre found for this program"}
    </ul>
  )
}

export default Genres