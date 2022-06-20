const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const BASE_PATH = "https://api.themoviedb.org/3";

export interface IMovie {
  backdrop_path: string;
  overview: string;
  poster_path: string;
  title: string;
  id: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimun: string;
  };
  pages: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
