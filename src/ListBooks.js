import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 

class ListBook extends React.Component {
   componentDidMount() {
    this.setState({
      books: this.props.bookList
    });

  }
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    researchReslt: [],
    searchFocus: false,
    showSearch:false
  };

 
  options = [
    { name: "Currently Reading", des: "currentlyReading" },
    { name: "Want to Read", des: "wantToRead" },
    { name: "Read", des: "read" },
    { name: "None", des: "none" },
  ];

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
                                <div className="book">
                                  <div className="book-top">
                                    <div
                                      className="book-cover"
                                      style={{
                                        width: 128,
                                        height: 192,
                                        backgroundImage: `url("${
                                          el.imageLinks.smallThumbnail
                                        }")`,
                                      }}
                                    />
                                    <div className="book-shelf-changer">
                                      <select
                                        defaultValue={el.shelf ? el.shelf : "none"}
                                        onChange={async (e) => {
                                          await BooksAPI.update(
                                            {
                                              id: el.id,
                                            },
                                            e.target.value
                                          );
    
                                          this.setState({
                                            books: await BooksAPI.getAll(),
                                          });
                                        }}
                                      >
                                        {this.options.map((opt, index) => {
                                          return (
                                            <option
                                              value={opt.des}
                                              key={index}
                                              defaultValue={
                                                el.shelf ? el.shelf : false
                                              }
                                              disabled={
                                                el.shelf == opt.res ? true : false
                                              }
                                            >
                                              {opt.name}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </div>
                                  </div>
                                  <div className="book-title">{el.title}</div>
                                  <div className="book-authors">{el.subtitle}</div>
                                </div>
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
                                <div className="book">
                                  <div className="book-top">
                                    <div
                                      className="book-cover"
                                      style={{
                                        width: 128,
                                        height: 192,
                                        backgroundImage: `url("${
                                          el.imageLinks.smallThumbnail
                                        }")`,
                                      }}
                                    />
                                    <div className="book-shelf-changer">
                                      <select
                                        defaultValue={el.shelf ? el.shelf : "none"}
                                        onChange={async (e) => {
                                          await BooksAPI.update(
                                            {
                                              id: el.id,
                                            },
                                            e.target.value
                                          );
    
                                          this.setState({
                                            books: await BooksAPI.getAll(),
                                          });
                                        }}
                                      >
                                        {this.options.map((opt, index) => {
                                          return (
                                            <option
                                              value={opt.des}
                                              key={index}
                                              selected={
                                                el.shelf == opt.res ? true : false
                                              }
                                              disabled={
                                                el.shelf == opt.res ? true : false
                                              }
                                            >
                                              {opt.name}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </div>
                                  </div>
                                  <div className="book-title">{el.title}</div>
                                  <div className="book-authors">{el.subtitle}</div>
                                </div>
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
                                <div className="book">
                                  <div className="book-top">
                                    <div
                                      className="book-cover"
                                      style={{
                                        width: 128,
                                        height: 192,
                                        backgroundImage: `url("${
                                          el.imageLinks.smallThumbnail
                                        }")`,
                                      }}
                                    />
                                    <div className="book-shelf-changer">
                                      <select
                                        onChange={async (e) => {
                                          await BooksAPI.update(
                                            {
                                              id: el.id,
                                            },
                                            e.target.value
                                          );
    
                                          this.setState({
                                            books: await BooksAPI.getAll(),
                                          });
                                        }}
                                        defaultValue={el.shelf ? el.shelf : "none"}
                                      >
                                        {this.options.map((opt, index) => {
                                          return (
                                            <option
                                              value={opt.des}
                                              key={index}
                                              disabled={
                                                el.shelf == opt.res ? true : false
                                              }
                                            >
                                              {opt.name}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </div>
                                  </div>
                                  <div className="book-title">{el.title}</div>
                                  <div className="book-authors">{el.subtitle}</div>
                                </div>
                              </li>
                            )
                        )}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to='/search' >Add a book</Link>
              </div>
            </div>
          

      
      </div>
    );
  }
}

export default ListBook;
