const defaultState = {
  query: "",
  results: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_RESULTS":
      return {
        ...state,
        results: action.results
      };
    case "SET_QUERY":
      return {
        query: action.query
      };
    default:
      return state;
  }
};
