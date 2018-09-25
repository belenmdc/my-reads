import React from "react";
import { NavLink } from "react-router-dom";
import SearchButton from "../Search/Search";
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
    <NavLink to="/search" className={styles.headerLink}>
      <SearchButton />
    </NavLink>
  </div>
);
