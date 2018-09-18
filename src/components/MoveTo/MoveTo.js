import React from "react";
import { connect } from "react-redux";
import { removeBook, startUpdateBook } from "../../state/books/actions";
import "./styles.css";

export class MoveTo extends React.Component {
  onSelect = e => {
    const bookId = this.props.book.id;
    const shelf = e.target.value;
    this.props.updateBook(bookId, e.target.value);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.onSelect} defaultValue={this.props.book.shelf}>
          <option value="none" disabled>
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
  updateBook: (bookId, shelf) => dispatch(startUpdateBook(bookId, shelf))
});

export default connect(
  undefined,
  mapDispatchToProps
)(MoveTo);
