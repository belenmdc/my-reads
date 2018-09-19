import { search } from "../../networking/BooksAPI";

export const startSearch = query => {
  return dispatch => {
    return search(query).then(books => {
      dispatch(setResults(books));
    });
  };
};

const setResults = books => ({
  type: "SET_RESULTS",
  results: books
});

export const setQuery = query => ({
  type: "SET_QUERY",
  query: query
});
