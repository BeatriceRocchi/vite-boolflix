import { reactive } from "vue";

export const store = reactive({
  apiUrlMovie: "https://api.themoviedb.org/3/search/movie",
  apiUrlTV: "https://api.themoviedb.org/3/search/tv",
  apiKey: "b6cd8631f8965ad87842781acddfdcc0",

  moviesList: [],
  movieToSearch: "",
});
