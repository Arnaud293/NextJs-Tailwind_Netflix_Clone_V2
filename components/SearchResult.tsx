import React from 'react'

const SearchResult:React.FC = ({result}) => {
  return (
    <div className='h-fit min-h-screen bg-gray-900 text-white py-20 flex flex-col items-center p-5'>
      <div className="flex gap-4 flex-wrap w-full justify-center">
        {
          result.map((program) => (
            <div key={program.id}>
              <img src={`https://image.tmdb.org/t/p/original/${program.backdrop_path}`} alt={program.name || program.title}
                className="w-[300px] h-[225px] object-cover rounded-sm"
              />
            </div>
          ))
        
        }
      </div>
    </div>
  )
}

export default SearchResult