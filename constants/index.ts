import requests from "./requests";

// NAV LOGO
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

// NAV LINKS
export const navLinks = [
    {
        id: 1,
        link : 'Home',
        to: '/'
    },
    {
        id: 2,
        link : 'Movies',
        to: '/movies',
    },
    {
        id: 3,
        link : 'Tv',
        to: '/tv',
    },
    {
        id: 4,
        link : 'Favorites',
        to: '/favorites'
    },
];

// DATA FOR HOME ROWS
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

// DATA FOR MOVIES ROWS

export const MoviesRequests = [
    
    {
        title: 'Popular movies now :',
        fetchUrl: requests.getPopularMovies,
    },
    {
        title: 'Top Rated movies now :',
        fetchUrl: requests.getTopRatedMovies,
    }
]

// DATA FOR TV ROWS

export const TvRequests = [
    
    {
        title: 'Popular TV shows now :',
        fetchUrl: requests.getPopularTvShow,
    },
    {
        title: 'Top Rated TV shows now :',
        fetchUrl: requests.getTopRatedTvShow,
    }
]
// Footer static infos 

export const FooterLinks = [
    [
        {
            title : 'Audiodescription',
        },
        {
            title: 'Investor Relations',
        },
        {
            title: 'legal information',
        }
    ],
    [
        {
            title : 'Help center',
        },
        {
            title: 'Hiring',
        },
        {
            title: 'Cookies preferences',
        }
    ],
    [
        {
            title : 'Gift cards',
        },
        {
            title: 'Conditions of use',
        },
        {
            title: 'Legal Notice',
        }
    ],
    [
        {
            title : 'Press',
        },
        {
            title: 'Privacy',
        },
        {
            title: 'Contact us',
        }
    ]
]