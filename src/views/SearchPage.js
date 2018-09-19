import React from "react";
import { connect } from "react-redux";
import Margin from "../layouts/Margin";
import Shelf from "../components/Shelf/Shelf";
import SearchField from "../components/SearchField/SearchField";
import { startSearch } from "../state/search/actions";

class SearchPage extends React.Component {
  startSearch = searchTerm => {
    this.props.startSearch(searchTerm);
  };

  getTitle = () => {
    if (this.props.results !== undefined) {
      return this.props.results.length === 0 ? "No results found" : "Results";
    }
  };

  getResults = () => {
    return this.props.results !== undefined ? this.props.results : [];
  };

  render() {
    return (
      <Margin>
        <SearchField startSearch={this.startSearch} />
        {this.props.query.length > 0 && (
          <Shelf title={this.getTitle()} books={this.getResults()} />
        )}
      </Margin>
    );
  }
}

const mapStateToProps = (state, props) => ({
  results: state.search.results,
  query: state.search.query
});

const mapDispatchToProps = dispatch => ({
  startSearch: term => dispatch(startSearch(term))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
