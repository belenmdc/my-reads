import React, { Component } from "react";
import Book from "../Book/Book";

export default ({ title, books }) => (
  <div>
    <h2>{title}</h2>
    {books && books.forEach(book => <Book props={book} />)}
  </div>
);
