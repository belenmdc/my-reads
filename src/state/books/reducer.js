export default (state = [], action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return action.books;
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== action.bookId);
    case "UPDATE_BOOK":
      const matches = state.filter(book => book.id === action.book.id);
      if (matches.length > 0) {
        return state.map(book => {
          if (book.id === action.book.id) {
            return {
              ...book,
              shelf: action.shelf
            };
          } else {
            return book;
          }
        });
      } else {
        const newBook = {
          ...action.book,
          shelf: action.shelf
        };
        return [...state, newBook];
      }
    default:
      return state;
  }
};
