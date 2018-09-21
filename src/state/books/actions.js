import { getAll, update } from "../../networking/BooksAPI";

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

export const startUpdateBook = (book, shelf) => {
  return dispatch => {
    return update(book.id, shelf).then(() => {
      if (shelf === "none") {
        dispatch(removeBook(book.id));
      } else {
        dispatch(updateBook(book, shelf));
      }
    });
  };
};

const updateBook = (book, shelf) => ({
  type: "UPDATE_BOOK",
  book: book,
  shelf: shelf
});

const removeBook = bookId => ({
  type: "REMOVE_BOOK",
  bookId: bookId
});
