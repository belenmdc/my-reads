import React from "react";
import Book from "../Book/Book";

export default ({ title, books }) => (
  <div>
    <h2>{title}</h2>
    {books &&
      books.map(book => {
        console.log(book);
        return <Book key={book.id} book={book} />;
      })}
  </div>
);
