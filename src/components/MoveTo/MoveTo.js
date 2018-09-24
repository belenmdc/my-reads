import React from "react";
import { connect } from "react-redux";
import { startUpdateBook } from "../../state/books/actions";
import styles from "./styles.css";

export class MoveTo extends React.Component {
  onSelect = e => {
    const book = this.props.book;
    this.props.updateBook(book, e.target.value);
  };

  render() {
    return (
      <div className={styles.bookShelfChanger}>
        <select
          onChange={this.onSelect}
          defaultValue={
            this.props.book.shelf !== undefined ? this.props.book.shelf : "none"
          }
        >
          <option value="moveto" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateBook: (book, shelf) => dispatch(startUpdateBook(book, shelf))
});

export default connect(
  undefined,
  mapDispatchToProps
)(MoveTo);
