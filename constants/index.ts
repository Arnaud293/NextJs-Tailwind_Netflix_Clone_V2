import requests from "./requests";

export const logo = [
    {
      id: 1,
      imgUrl: '/logoNit.png',
    },
    {
      id: 2,
      imgUrl: '/logoMin.png',
    },
    
];

export const navLinks = [
    {
        id: 1,
        link : 'Home'
    },
    {
        id: 2,
        link : 'Movies'
    },
    {
        id: 3,
        link : 'Tv'
    },
    {
        id: 4,
        link : 'Favorites'
    },
];

export const HomeRequests = [
    {
        title: 'Top 10 movies and TV shows :',
        fetchUrl: requests.getTrending,
    },
    {
        title: 'Popular movies now :',
        fetchUrl: requests.getPopularMovies,
    },
    {
        title: 'Popular TV shows now :',
        fetchUrl: requests.getPopularTvShow,
    },
    {
        title: 'Top Rated TV shows now :',
        fetchUrl: requests.getTopRatedTvShow,
    }
]