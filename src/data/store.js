import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/",
  apiUrlGenre: "https://api.themoviedb.org/3/genre/movie/list",

  queryParams: {
    api_key: "b6cd8631f8965ad87842781acddfdcc0",
    query: "",
  },

  queryParamsGenre: {
    api_key: "b6cd8631f8965ad87842781acddfdcc0",
    language: "en",
  },

  researchType: "",

  movie: [],
  tv: [],
  genresList: [],
});
