export const getBooksForShelf = (books, shelfName) => {
  return books.filter(book => book.shelf === shelfName);
};
