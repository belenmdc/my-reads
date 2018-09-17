import React, { Component } from "react";
import "./App.css";
import MainPage from "../../views/MainPage";

// let currentlyReadingBooks = [];
// let wantToReadBooks = [];
// let readBooks = [];
// const books = getAll().then(books => {
//   currentlyReadingBooks = books.filter(
//     book => book.shelf === "currentlyReading"
//   );
//   wantToReadBooks = books.filter(book => book.shelf === "wantToRead");
//   readBooks = books.filter(book => book.shelf === "read");
// });

// const getBooksByShelf = (shelf) => {
//   getAll().then(books => {

//   }
// }

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
