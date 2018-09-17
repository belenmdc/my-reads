export default (state = [], action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return action.books;
    case "REMOVE_BOOK":
      return state;
    case "UPDATE_BOOK":
      return state;
    default:
      return state;
  }
};
