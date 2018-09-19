import React from "react";
import MoveTo from "../MoveTo/MoveTo";
import "./styles.css";

export default props => {
  const getImageURL = () => {
    if (
      props.book.imageLinks !== undefined &&
      props.book.imageLinks.thumbnail !== undefined
    ) {
      return props.book.imageLinks.thumbnail;
    }
  };

  return (
    <div className="book">
      {console.log(props.book)}
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            backgroundImage: `url(${getImageURL()})`
          }}
        />
        <MoveTo book={props.book} />
      </div>

      <p className="book-title">{props.book.title}</p>
      <p className="book-author">
        {props.book.authors && props.book.authors.join(", ")}
      </p>
    </div>
  );
};
