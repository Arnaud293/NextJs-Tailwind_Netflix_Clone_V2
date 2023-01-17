import React, { useEffect, useState } from 'react';

import { HomeRequests, MoviesRequests, TvRequests } from '../constants';
import Row from './Row';
import { useRouter } from 'next/router';
import { request } from '../interfaces';

const Rows:React.FC = () => {

  const [query, setQuery] = useState<request[]>([]);
  const router = useRouter();
  console.log(router)

  useEffect(() => {
    const requestsToDo = router.asPath;
    switch(requestsToDo){
      case '/':
        setQuery(HomeRequests);
        break;
      case '/movies':
        setQuery(MoviesRequests);
        break;
      case '/tv':
        setQuery(TvRequests);
        break;
      default: return null;
    }
  },[])

  return (
    <div className='bg-gray-900'>
      {query.map((row, index) => (
        <Row key={index} fetchUrl={row.fetchUrl} title={row.title} />
      ))}
    </div>
  )
}

export default Rows