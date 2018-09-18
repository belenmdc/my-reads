import React, { Component } from "react";
import "./App.css";
import MainPage from "../../views/MainPage";

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">My Reads</h1>
        </header>
        <MainPage />
      </div>
    );
  }
}

export default App;
