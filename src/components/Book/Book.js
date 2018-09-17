import React from "react";

export default props => (
  <div>
    {console.log({
      title: props.book.title,
      authors: props.book.authors,
      thumbnail: props.book.imageLinks.thumbnail
    })}
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url(${props.book.imageLinks.thumbnail})`
      }}
    />
    <p>{props.book.title}</p>
    <p>{props.book.authors}</p>
  </div>
);
