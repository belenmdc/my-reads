import React from "react";
import { history } from "../../routers/Router";
import SearchField from "../SearchField/SearchField";
import styles from "./styles.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: history.location.pathname === "/search",
      image: this.isActive
        ? "../../assets/magnifyingGlass_bold.png"
        : "../../assets/magnifyingGlass.png"
    };
  }

  isActive = () => history.location.pathname === "/search";

  updateIsActive = () => {
    const image = this.isActive
      ? "../../assets/magnifyingGlass_bold.png"
      : "../../assets/magnifyingGlass.png";
    this.setState(() => {
      return {
        isActive: history.location.pathname === "/search",
        image: image
      };
    });
  };

  render() {
    return (
      <div className={styles.root}>
        <div
          className={styles.button}
          styles={{
            backgroundImage: `url(${
              this.state.isActive
                ? "../../assets/magnifyingGlass_bold.png"
                : "../../assets/magnifyingGlass.png"
            })`
          }}
          onClick={this.updateIsActive}
        />
        <SearchField />
      </div>
    );
  }
}
