import React from "react";
import { connect } from "react-redux";
import { setQuery } from "../../state/search/actions";
import "./styles.css";

class SearchField extends React.Component {
  onChange = e => {
    const query = e.target.value;
    this.props.setQuery(query);
    if (e.target.value !== "") {
      this.props.startSearch(query);
    }
  };

  render() {
    return (
      <form className="form" onChange={this.onChange}>
        <input type="text" placeholder="Search books" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setQuery: query => dispatch(setQuery(query))
});

export default connect(
  undefined,
  mapDispatchToProps
)(SearchField);
