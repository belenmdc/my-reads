import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

export default () => (
  <div className="header">
    <NavLink
      to="/"
      activeClassName="selected"
      className="header-link"
      exact={true}
    >
      <p>My Reads</p>
    </NavLink>
    <NavLink to="/search" activeClassName="selected" className="header-link">
      <p>Search</p>
    </NavLink>
  </div>
);
