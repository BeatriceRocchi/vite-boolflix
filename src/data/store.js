import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/",
  apiUrlGenre: "https://api.themoviedb.org/3/genre/",
  apiUrlCredits: "https://api.themoviedb.org/3/movie/",

  queryParams: {
    api_key: "b6cd8631f8965ad87842781acddfdcc0",
    query: "",
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
    // genresListIds: [],
  },

  tv: {
    itemList: [],
    genresList: [],
    itemFiltered: [],
    // genresListIds: [],
  },

  mainActors: [],
  listFiltered: [],
});
