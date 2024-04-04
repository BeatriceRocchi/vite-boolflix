import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/",

  queryParams: {
    api_key: "b6cd8631f8965ad87842781acddfdcc0",
    query: "",
  },

  movie: [],
  tv: [],
});
