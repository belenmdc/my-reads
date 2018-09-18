export default (state = [], action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return action.books;
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== action.bookId);
    case "UPDATE_BOOK":
      return state.map(book => {
        if (book.id === action.bookId) {
          return {
            ...book,
            shelf: action.shelf
          };
        } else {
          return book;
        }
      });
    default:
      return state;
  }
};
