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

export const updateBook = (bookId, shelf) => ({
  type: "UPDATE_BOOK",
  bookId: bookId,
  shelf: shelf
});

export const removeBook = bookId => ({
  type: "REMOVE_BOOK",
  bookId: bookId
});
