import React from "react";
import { connect } from "react-redux";
import { setQuery, startSearch } from "../../state/search/actions";
import "./styles.css";

class SearchField extends React.Component {
  onChange = e => {
    const query = e.target.value;
    this.props.setQuery(query);
    if (e.target.value !== "") {
      this.props.startSearch(query, this.props.myBooks);
    }
  };

  render() {
    return (
      <form className="form">
        <input
          type="text"
          placeholder="Search books"
          value={this.props.query}
          onChange={this.onChange}
        />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  myBooks: state.books,
  query: state.search.query
});

const mapDispatchToProps = dispatch => ({
  setQuery: query => dispatch(setQuery(query)),
  startSearch: (query, myBooks) => dispatch(startSearch(query, myBooks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField);
