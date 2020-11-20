import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Link } from "react-router-dom";

class Search extends React.Component {
  
    
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
    showSearch:true,
    researchReslt: [],
    searchFocus: false,
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
          {
              this.state.showSearch &&
          
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search" >
              Close
            </Link>
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
                onChange={async (e) => {
                  let text = e.target.value.trim();
                  if (text && text !== "" ) {
                    let res = await BooksAPI.search(text);

                    this.setState({
                      researchReslt: res?res:[],
                      searchFocus: true,
                    });
                  
                  }
                  else{
                    this.setState({
                        researchReslt: this.state.books,
                        searchFocus: false,
                      });
                  }
                  
                }}
              />

              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.researchReslt.length > 0 &&
                    this.state.researchReslt.map((el, i) => (
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
                                  let text = await e.target.value;
                                  console.log("el", this.state.researchReslt);

                                  let idel = await BooksAPI.get(el.id);

                                  await BooksAPI.update(
                                    {
                                      id: idel,
                                    },
                                    text
                                  );

                                  this.setState({
                                    books: await BooksAPI.getAll(),
                                  });
                                }}
                              >
                                {this.options.map((opt, index) => {
                                  return (
                                    <React.Fragment>
                                      {
                                        <option value={opt.des} key={index}>
                                          {opt.name}
                                        </option>
                                      }
                                    </React.Fragment>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{el.title}</div>
                          <div className="book-authors">{el.subtitle}</div>
                        </div>
                      </li>
                    ))}
                  {this.state.researchReslt.length === 0 &&
                    this.state.searchFocus == true && <p>No result is found</p>}
                </ol>
              </div>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid" />
          </div>
        </div>
  }
      </div>
    );
  }
}

export default Search;
