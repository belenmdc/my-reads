import React from "react";
import Margin from "../layouts/Margin";
import SearchResults from "../components/SearchResults/SearchResults";
import SearchField from "../components/SearchField/SearchField";

export default class SearchPage extends React.Component {
  render() {
    return (
      <Margin>
        <SearchField />
        <SearchResults />
      </Margin>
    );
  }
}
