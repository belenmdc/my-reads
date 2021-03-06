import React from "react";
import { connect } from "react-redux";
import Shelf from "../Shelf/Shelf";

class SearchResults extends React.Component {
  getTitle = () => {
    if (this.props.results !== undefined) {
      return this.props.results.length === 0 ? "No results found" : "Results";
    } else {
      return "No results found";
    }
  };

  getResults = () => {
    return this.props.results;
  };

  render() {
    if (this.props.query.length > 0) {
      return <Shelf title={this.getTitle()} books={this.getResults()} />;
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, props) => ({
  myBooks: state.books,
  results: state.search.results,
  query: state.search.query
});

export default connect(mapStateToProps)(SearchResults);
