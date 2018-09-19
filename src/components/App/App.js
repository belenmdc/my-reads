import React, { Component } from "react";
import Header from "../Header/Header";
import MainPage from "../../views/MainPage";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
