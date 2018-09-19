import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import booksReducer from "./books/reducer";
import searchReducer from "./search/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      books: booksReducer,
      search: searchReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
