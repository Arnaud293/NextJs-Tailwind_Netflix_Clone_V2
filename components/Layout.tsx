import React, {useState} from 'react';
import 'tailwindcss/tailwind.css';
import { NavBar, Footer, SearchResult } from './';

type ChildrenProps = {
    children?: React.ReactNode
}

const Layout:React.FC<ChildrenProps> = ({children}) => {
  const [searchedResults, setSearchedResults] = useState('');
  console.log(searchedResults);
  return (
    <>
        <NavBar result={searchedResults} setResult={setSearchedResults} />
        {searchedResults.length > 0 
        ? (
            <SearchResult result={searchedResults} />
          ) 
        :(
          children
        )}
        <Footer />
    </>
  )
}

export default Layout