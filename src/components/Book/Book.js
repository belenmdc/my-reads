import React from "react";
import MoveTo from "../MoveTo/MoveTo";
import "./styles.css";

export default props => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          backgroundImage: `url(${props.book.imageLinks.thumbnail})`
        }}
      />
      <MoveTo book={props.book} />
    </div>

    <p className="book-title">{props.book.title}</p>
    <p className="book-author">{props.book.authors.join(", ")}</p>
  </div>
);
