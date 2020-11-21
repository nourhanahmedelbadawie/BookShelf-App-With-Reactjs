import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Book from "./Book.js";
class ListBook extends React.Component {
  componentDidMount() {
    this.setState({
      books: this.props.bookList,
    });
  }
  state = {
    books: [],
    researchReslt: [],
    searchFocus: false,
    showSearch: false,
  };
  handleShelf= async(e)=>{
 await  this.props.updateShelfToListBook(e)
    
  }
  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {/*========================Currently Reading======================= */}
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.state.books.map(
                      (el, i) =>
                        el.shelf == "currentlyReading" && (
                          <li key={i}>
                            <Book singleBook={el} updateShelf={(e)=>this.handleShelf(e)} />
                          </li>
                        )
                    )}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                {/*========================Want to Read======================= */}

                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.state.books.map(
                      (el, i) =>
                        el.shelf == "wantToRead" && (
                          <li key={i}>
                            <Book singleBook={el} updateShelf={(e)=>this.handleShelf(e)} />
                          </li>
                        )
                    )}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                {/*=======================Read======================= */}

                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.state.books.map(
                      (el, i) =>
                        el.shelf == "read" && (
                          <li key={i}>
                            <Book singleBook={el} updateShelf={(e)=>this.handleShelf(e)} />
                          </li>
                        )
                    )}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBook;
