import { Store } from "../core/important";

const store = new Store({
  searchText: "",
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},
  loading: false,
  message: "Search for the movie title!",
});

export default store;
export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
    store.state.message = "";
  }
  try {
    const res = await fetch(
      `https://omdbapi.com?apikey=e0acc7b&s=${store.state.searchText}&page=${page}`
    );
    //res를 객체 분해 할당
    const { Search, totalResults, Response, Error } = await res.json();

    if (Response == "True") {
      store.state.movies = [...store.state.movies, ...Search];
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
      store.state.pageMax = 1;
    }
  } catch (error) {
    console.log("searchMovies error: ", error);
  } finally {
    store.state.loading = false;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const res = await fetch(`https://omdbapi.com?apikey=e0acc7b&i=${id}`);
    store.state.movie = await res.json();
  } catch (error) {
    console.log("getMovieDetails error:", error);
  }
};
