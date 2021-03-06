import { search } from "../../networking/BooksAPI";

export const startSearch = (query, myBooks) => {
  return dispatch => {
    return search(query).then(results => {
      let updatedResults = [];
      console.log("Results: ", results);
      if (results !== undefined && Array.isArray(results)) {
        updatedResults = results.map(result => {
          const match = myBooks.filter(book => result.id === book.id);
          if (match.length > 0) {
            return {
              ...result,
              shelf: match[0].shelf
            };
          } else {
            return {
              ...result,
              shelf: "none"
            };
          }
        });
      }
      dispatch(setResults(updatedResults));
    });
  };
};

export const setResults = books => ({
  type: "SET_RESULTS",
  results: books
});

export const setQuery = query => ({
  type: "SET_QUERY",
  query: query
});
