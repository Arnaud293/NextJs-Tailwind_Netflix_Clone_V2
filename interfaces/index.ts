export interface TrendingsDataMovies {
    
    poster_path: string | null,
    adult: boolean,
    overview: string,
    release_date: string,
    genres_ids: Array<number>,
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
    genres_ids: Array<number>,
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