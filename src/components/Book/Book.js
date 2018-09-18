import React from "react";
import "./styles.css";

export default props => (
  <div className="book">
    <div
      className="book-cover"
      style={{
        backgroundImage: `url(${props.book.imageLinks.thumbnail})`
      }}
    />
    <p className="book-title">{props.book.title}</p>
    <p className="book-author">{props.book.authors.join(", ")}</p>
  </div>
);
