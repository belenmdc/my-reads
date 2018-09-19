import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./state/store";
import "./index.css";
import AppRouter from "./routers/Router";

import registerServiceWorker from "./registerServiceWorker";
import { startSetBooks } from "./state/books/actions";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

store.dispatch(startSetBooks()).then(() => renderApp());
registerServiceWorker();
