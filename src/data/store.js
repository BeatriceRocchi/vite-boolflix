import { reactive } from "vue";

export const store = reactive({
  apiUrlPopolarMovie: "https://api.themoviedb.org/3/movie/popular",
  apiUrl: "https://api.themoviedb.org/3/search/",
  apiUrlGenre: "https://api.themoviedb.org/3/genre/",
  apiUrlCredits: "https://api.themoviedb.org/3/movie/",

  queryParamsPopular: {
    api_key: "b6cd8631f8965ad87842781acddfdcc0",
    page: 1,
  },

  queryParams: {
    api_key: "b6cd8631f8965ad87842781acddfdcc0",
    query: "",
    page: 1,
  },

  queryParamsGenre: {
    api_key: "b6cd8631f8965ad87842781acddfdcc0",
    language: "en",
  },

  queryParamsCredits: {
    api_key: "b6cd8631f8965ad87842781acddfdcc0",
    movie_id: 0,
  },

  researchType: "",
  researchGenre: "",

  movie: {
    itemList: [],
    genresList: [],
    itemFiltered: [],
    currentPage: "",
    totalPages: "",
  },

  tv: {
    itemList: [],
    genresList: [],
    itemFiltered: [],
    currentPage: "",
    totalPages: "",
  },

  mainActors: [],
  popularMoviesList: [],
});
