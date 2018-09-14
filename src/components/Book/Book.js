import React from "react";

export default ({ title, author, cover, id }) => (
  <div>
    // <img src={cover} />
    <div
      // className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url(${cover})`
      }}
    />
    <p>{title}</p>
    <p>{author}</p>
  </div>
);
