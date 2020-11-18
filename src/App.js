import React from "react";
import * as BooksAPI from './BooksAPI'
import "./App.css";

class BooksApp extends React.Component {
 async componentDidMount()
  {
this.setState({
  books:await BooksAPI.getAll()
})
console.log(this.state.books)
  }
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [

    ],
    showSearchPage: false,
    researchReslt: [],
    searchFocus:false
  };

  options = [
    { name: "Currently Reading", value: 1
  ,des:"currentlyReading" },
    { name: "Want to Read", value: 2,des:"wantToRead" },
    { name: "Read", value: 3,des:"read" },
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
                      researchReslt: this.state.books.filter((el) => el.title.includes(e.target.value.toLowerCase()) ),
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
          backgroundImage: `url("${el.imageLinks.smallThumbnail}")`,
        }}
      />
      <div className="book-shelf-changer">
        <select
          onChange={async(e) =>
          {  this.setState(
              this.state.books.map((book) =>
                book.id == el.id
                  ? (book.type = e.target.value)
                  : book
              )
            )
                                              await BooksAPI.update  (el.id, this.options.filter(el=>el.value==e.target.value)[0].des)

          }
        }
        >
          {this.options.map((opt, index) => {
            return (
              <option
                value={`${opt.value}`}
                key={index}
                selected={
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
    <div className="book-title">{el.title}</div>
    <div className="book-authors">{el.subtitle}</div>
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
                      {
                      this.state.books.map(
                        
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
                                    backgroundImage: `url("${el.imageLinks.smallThumbnail}")`,
                                  }}
                                />
                                <div className="book-shelf-changer">
                                  <select
                                    onChange={async (e) =>
                                    {  this.setState(
                                        this.state.books.map((book) =>
                                          book.id == el.id
                                            ? (book.type = e.target.value)
                                            : book
                                        )
                                      )
                            await BooksAPI.update  (el.id, this.options.filter(el=>el.value==e.target.value)[0].des)

                                    }
                                  }
                                  >
                                    {this.options.map((opt, index) => {
                                      return (
                                        <option
                                          value={`${opt.value}`}
                                          key={index}
                                          selected={
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
                          el.type == 2 && (
                            <li key={i}>
                            <div className="book">
                              <div className="book-top">
                                <div
                                  className="book-cover"
                                  style={{
                                    width: 128,
                                    height: 192,
                                    backgroundImage: `url("${el.imageLinks.smallThumbnail}")`,
                                  }}
                                />
                                <div className="book-shelf-changer">
                                  <select
                                    onChange={async(e) =>
                                    {  this.setState(
                                        this.state.books.map((book) =>
                                          book.id == el.id
                                            ? (book.type = e.target.value)
                                            : book
                                        )
                                      )
                                                                        await BooksAPI.update  (el.id, this.options.filter(el=>el.value==e.target.value)[0].des)

                                    }
                                  }
                                  >
                                    {this.options.map((opt, index) => {
                                      return (
                                        <option
                                          value={`${opt.value}`}
                                          key={index}
                                          selected={
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
                          el.type == 3 && (
                            <li key={i}>
                            <div className="book">
                              <div className="book-top">
                                <div
                                  className="book-cover"
                                  style={{
                                    width: 128,
                                    height: 192,
                                    backgroundImage: `url("${el.imageLinks.smallThumbnail}")`,
                                  }}
                                />
                                <div className="book-shelf-changer">
                                  <select
                                    onChange={async(e) =>
                                    {  this.setState(
                                        this.state.books.map((book) =>
                                          book.id == el.id
                                            ? (book.type = e.target.value)
                                            : book
                                        )
                                      )
                                                                        await BooksAPI.update  (el.id, this.options.filter(el=>el.value==e.target.value)[0].des)

                                    }
                                  }
                                  >
                                    {this.options.map((opt, index) => {
                                      return (
                                        <option
                                          value={`${opt.value}`}
                                          key={index}
                                          selected={
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
              <div className="bookshelf">
                {/*===========================Rest of the book=================== */}

                <h2 className="bookshelf-title">Rest of the book</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.state.books.map(
                      (el, i) =>
                       ! el.type && (
                        <li key={i}>
                        <div className="book">
                          <div className="book-top">
                            <div
                              className="book-cover"
                              style={{
                                width: 128,
                                height: 192,
                                backgroundImage: `url("${el.imageLinks.smallThumbnail}")`,
                              }}
                            />
                            <div className="book-shelf-changer">
                              <select
                                onChange={async(e) =>
                                {  this.setState(
                                    this.state.books.map((book) =>
                                      book.id == el.id
                                        ? (book.type = e.target.value)
                                        : book
                                    )
                                  )
                           await BooksAPI.update  (el.id, this.options.filter(el=>el.value==e.target.value)[0].des)

                                }
                              }
                              >
                                {this.options.map((opt, index) => {
                                  return (
                                    <option
                                      value={`${opt.value}`}
                                      key={index}
                                      selected={
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
