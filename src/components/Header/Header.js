import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.css";

export default () => (
  <div className={styles.header}>
    <NavLink
      to="/"
      activeClassName={styles.selected}
      className={styles.headerLink}
      exact={true}
    >
      <p>My Reads</p>
    </NavLink>
    <NavLink
      to="/search"
      activeClassName={styles.selected}
      className={styles.headerLink}
    >
      <p>Search</p>
    </NavLink>
  </div>
);
