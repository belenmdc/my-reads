import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Header from "../components/Header/Header";
import MainPage from "../views/MainPage";
import SearchPage from "../views/SearchPage";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
