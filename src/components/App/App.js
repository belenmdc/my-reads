import React, { Component } from "react";
import "./App.css";
import Shelf from "../Shelf/Shelf";

const currentlyReadingBooks = [
  {
    id: "1234",
    title: "Harry Potter",
    author: "JK Rowling",
    cover:
      "https://mm3.vistoenpantalla.com/imagenes-productos/cabezon-harry-potter-mod5-large2.jpg"
  }
];
class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">My Reads</h1>
        </header>
        <Shelf title="Currently reading" books={currentlyReadingBooks} />
        <Shelf title="Want to read" />
        <Shelf title="Read" />
      </div>
    );
  }
}

export default App;
