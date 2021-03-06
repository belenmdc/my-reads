import React from "react";
import { connect } from "react-redux";
import Shelf from "../components/Shelf/Shelf";
import Margin from "../layouts/Margin";
import { getBooksForShelf } from "../state/books/selectors";

class MainPage extends React.Component {
  render() {
    return (
      <Margin>
        <Shelf
          title="Currently reading"
          books={this.props.currentlyReadingBooks}
        />
        <Shelf title="Want to read" books={this.props.wantToReadBooks} />
        <Shelf title="Read" books={this.props.readBooks} />
      </Margin>
    );
  }
}

const mapStateToProps = (state, props) => ({
  currentlyReadingBooks: getBooksForShelf(state.books, "currentlyReading"),
  wantToReadBooks: getBooksForShelf(state.books, "wantToRead"),
  readBooks: getBooksForShelf(state.books, "read")
});
export default connect(mapStateToProps)(MainPage);
