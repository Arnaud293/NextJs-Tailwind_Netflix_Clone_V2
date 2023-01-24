export interface TrendingsDataMovies {
    
    poster_path: string | null,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: Array<number>,
    id: number,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,
    media_type: string

}
export interface TrendingsDataTv {
    
    poster_path: string | null,
    adult: boolean,
    overview: string,
    genre_ids: Array<number>,
    id: number,
    original_name: string,
    original_language: string,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    vote_average: number,
    media_type: string
    name: string,
    first_air_date: string,
    origin_country: Array<string>,

}

export interface request {
    title: string,
    fetchUrl: string,
}

export interface DetailsDataMovies {
    
    poster_path: string | null,
    adult: boolean,
    overview: string,
    release_date: string,
    genres: Array<object>,
    id: number,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,
    media_type: string,
    belongs_to_collection: null | object,
    budget: number,
    homepage: string | null,
    imdb_id: string | null,
    production_compagnies: Array<object>,
    production_countries: Array<object>,
    revenue: number,
    runtime: number | null,
    spoken_languages : Array<object>,
    status: string,
    tagline: string | null,


}
export interface DetailsDataTv {
    
    poster_path: string | null,
    adult: boolean,
    overview: string,
    genres: Array<object>,
    id: number,
    original_name: string,
    original_language: string,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    vote_average: number,
    media_type: string
    name: string,
    first_air_date: string,
    origin_country: Array<string>,
    created_by: Array<object>,
    episode_run_time: Array<number>,
    homepage: string,
    in_production: boolean,
    languages: Array<string>,
    last_air_date: string,
    last_episode_to_air : object,
    next_episode_to_air: null,
    network: Array<object>,
    number_of_episodes: number,
    number_of_seasons: number,
    production_compagnies: Array<object>,
    production_countries: Array<object>,
    spoken_languages : Array<object>,
    seasons: Array<object>,
    status: string,
    tagline: string | null,
    type: string,
}