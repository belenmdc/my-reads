import React from "react";
import MoveTo from "../MoveTo/MoveTo";
import styles from "./styles.css";

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
    <div className={styles.book}>
      {console.log(props.book)}
      <div className={styles.bookTop}>
        <div
          className={styles.bookCover}
          style={{
            backgroundImage: `url(${getImageURL()})`
          }}
        />
        <MoveTo book={props.book} />
      </div>

      <p className={styles.bookTitle}>{props.book.title}</p>
      <p className={styles.bookAuthor}>
        {props.book.authors && props.book.authors.join(", ")}
      </p>
    </div>
  );
};
