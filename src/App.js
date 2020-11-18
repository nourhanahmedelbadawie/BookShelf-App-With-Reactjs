import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [
      {
        id: 0,
        img:
          "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
        name: "To Kill a Mockingbird",
        desc: "Harper Lee",
        type: 4,
      },
      {
        id: 1,
        img:
          "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
        name: "Ender's Game",
        desc: "Orson Scott Card",
        type: 4,
      },
      {
        id: 2,
        img:
          "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        name: "1776",
        desc: "David McCullough",
        type: 4,
      },
      {
        id: 3,
        img:
          "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
        name: "Harry Potter and the Sorcerer's Stone",
        desc: "J.K. Rowling",
        type: 4,
      },
      {
        id: 4,
        img:
          "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
        name: "The Hobbit",
        desc: "J.R.R. Tolkien",
        type: 4,
      },
      {
        id: 5,
        img:
          "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",

        name: "Oh, the Places You'll Go!",
        desc: "Seuss",
        type: 4,
      },
      {
        id: 6,
        img:
          "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",

        name: "The Adventures of Tom Sawyer",
        desc: "Mark Twain",
        type: 4,
      },
    ],
    showSearchPage: false,
    researchReslt: [],
    searchFocus:false
  };

  options = [
    { name: "Currently Reading", value: 1 },
    { name: "Want to Read", value: 2 },
    { name: "Read", value: 3 },
    { name: "None", value: 4 },
  ];

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                  type="text"
                  placeholder="Search by title or author"
                  onChange={(e) =>
                    this.setState({
                      researchReslt: this.state.books.filter((el) => el.name.includes(e.target.value.toLowerCase()) ),
                      searchFocus:true
                    }
                   )
                    
                  }
                />

                <div className="bookshelf-books">
                  <ol className="books-grid">
                    { 
                    this.state.researchReslt.length > 0 && (
                      this.state.researchReslt.map((el, i) => 
(
                        <li key={i}>
                          <div className="book">
                            <div className="book-top">
                              <div
                                className="book-cover"
                                style={{
                                  width: 128,
                                  height: 192,
                                  backgroundImage: `url("${el.img}")`,
                                }}
                              />
                              <div className="book-shelf-changer">
                                <select
                                  onChange={(e) =>
                                    this.setState(
                                      this.state.books.map((book) =>
                                        book.id == el.id
                                          ? (book.type = e.target.value)
                                          : book
                                      )
                                    )
                                  }
                                >
                                  {this.options.map((opt, index) => {
                                    return (
                                      <option
                                        value={`${opt.value}`}
                                        key={index}
                                        defaultValue={
                                          el.type == opt.value ? true : false
                                        }
                                      >
                                        {opt.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{el.name}</div>
                            <div className="book-authors">{el.desc}</div>
                          </div>
                        </li>
                      ))
                      
        )
                      
                      
                      }
                       { 
                    (this.state.researchReslt.length == 0 && this.state.searchFocus==true)&& (
<p>No result is found</p>
                    )
                    }
                     
                  </ol>
                </div>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>
        ) : (
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
                          el.type == 1 && (
                            <li key={i}>
                              <div className="book">
                                <div className="book-top">
                                  <div
                                    className="book-cover"
                                    style={{
                                      width: 128,
                                      height: 192,
                                      backgroundImage: `url("${el.img}")`,
                                    }}
                                  />
                                  <div className="book-shelf-changer">
                                    <select
                                      onChange={(e) =>
                                        this.setState(
                                          this.state.books.map((book) =>
                                            book.id == el.id
                                              ? (book.type = e.target.value)
                                              : book
                                          )
                                        )
                                      }
                                    >
                                      {this.options.map((opt, index) => {
                                        return (
                                          <option
                                            value={`${opt.value}`}
                                            key={index}
                                            defaultValue={
                                              el.type == opt.value
                                                ? true
                                                : false
                                            }
                                          >
                                            {opt.name}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </div>
                                </div>
                                <div className="book-title">{el.name}</div>
                                <div className="book-authors">{el.desc}</div>
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
                          el.type == 2 && (
                            <li key={i}>
                              <div className="book">
                                <div className="book-top">
                                  <div
                                    className="book-cover"
                                    style={{
                                      width: 128,
                                      height: 192,
                                      backgroundImage: `url("${el.img}")`,
                                    }}
                                  />
                                  <div className="book-shelf-changer">
                                    <select
                                      onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState(
                                          this.state.books.map((book) =>
                                            book.id == el.id
                                              ? (book.type = e.target.value)
                                              : book
                                          )
                                        );
                                      }}
                                    >
                                      {this.options.map((opt, index) => {
                                        return (
                                          <option
                                            value={`${opt.value}`}
                                            key={index}
                                            defaultValue={
                                              el.type == opt.value
                                                ? true
                                                : false
                                            }
                                          >
                                            {opt.name}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </div>
                                </div>
                                <div className="book-title">{el.name}</div>
                                <div className="book-authors">{el.desc}</div>
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
                          el.type == 3 && (
                            <li key={i}>
                              <div className="book">
                                <div className="book-top">
                                  <div
                                    className="book-cover"
                                    style={{
                                      width: 128,
                                      height: 192,
                                      backgroundImage: `url("${el.img}")`,
                                    }}
                                  />
                                  <div className="book-shelf-changer">
                                    <select
                                      onChange={(e) =>
                                        this.setState(
                                          this.state.books.map((book) =>
                                            book.id == el.id
                                              ? (book.type = e.target.value)
                                              : book
                                          )
                                        )
                                      }
                                    >
                                      {this.options.map((opt, index) => {
                                        return (
                                          <option
                                            value={`${opt.value}`}
                                            key={index}
                                            defaultValue={
                                              el.type == opt.value
                                              
                                                ? true
                                                : false
                                            }
                                          >
                                            {opt.name}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </div>
                                </div>
                                <div className="book-title">{el.name}</div>
                                <div className="book-authors">{el.desc}</div>
                              </div>
                            </li>
                          )
                      )}
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bookshelf">
                {/*===========================Rest of the book=================== */}

                <h2 className="bookshelf-title">Rest of the book</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.state.books.map(
                      (el, i) =>
                        el.type == 4 && (
                          <li key={i}>
                            <div className="book">
                              <div className="book-top">
                                <div
                                  className="book-cover"
                                  style={{
                                    width: 128,
                                    height: 192,
                                    backgroundImage: `url("${el.img}")`,
                                  }}
                                />
                                <div className="book-shelf-changer">
                                  <select
                                    onChange={(e) =>
                                      this.setState(
                                        this.state.books.map((book) =>
                                          book.id == el.id
                                            ? (book.type = e.target.value)
                                            : book
                                        )
                                      )
                                    }
                                  >
                                    {this.options.map((opt, index) => {
                                      return (
                                        <option
                                          value={`${opt.value}`}
                                          key={index}
                                          defaultValue={
                                            el.type == opt.value ? true : false
                                          }
                                        >
                                          {opt.name}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{el.name}</div>
                              <div className="book-authors">{el.desc}</div>
                            </div>
                          </li>
                        )
                    )}
                  </ol>
                </div>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
