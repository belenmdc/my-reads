import React from "react";

export default props => {
  const getTitle = () => {
    return props.query.length === 0 ? "No results found" : "Results";
  };

  const getResults = () => {
    return props.results != undefined ? props.results : [];
  };

  return <Shelf title={getTitle()} books={getResults()} />;
};
