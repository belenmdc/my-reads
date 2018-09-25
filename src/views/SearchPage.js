import React from "react";
import Margin from "../layouts/Margin";
import SearchResults from "../components/SearchResults/SearchResults";

export default class SearchPage extends React.Component {
  render() {
    return (
      <Margin>
        <SearchResults />
      </Margin>
    );
  }
}
