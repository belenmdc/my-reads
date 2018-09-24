import React from "react";
import Book from "../Book/Book";
import styles from "./styles.css";

export default ({ title, books }) => (
  <div className={styles.shelfContainer}>
    <h2 className={styles.shelfTitle}>{title}</h2>
    <div className={styles.shelfBooks}>
      {books &&
        books.map(book => {
          return <Book key={book.id} book={book} />;
        })}
    </div>
  </div>
);
