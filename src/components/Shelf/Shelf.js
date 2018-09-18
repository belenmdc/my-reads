import React from "react";
import Book from "../Book/Book";
import "./styles.css";

export default ({ title, books }) => (
  <div className="shelf-container">
    <h2 className="shelf-title">{title}</h2>
    <div className="shelf-books">
      {books &&
        books.map(book => {
          return <Book key={book.id} book={book} />;
        })}
    </div>
  </div>
);
