import { getAll } from "../../networking/BooksAPI";

export const startSetBooks = () => {
  return dispatch => {
    return getAll().then(books => {
      dispatch(setBooks(books));
    });
  };
};

const setBooks = books => ({
  type: "SET_BOOKS",
  books: books
});
