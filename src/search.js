import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Link } from "react-router-dom";
import Book from "./Book.js";

class Search extends React.Component {
 
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearch: true,
    researchReslt: [],
    searchFocus: false,
  };
  options = [
    { name: "Currently Reading", des: "currentlyReading" },
    { name: "Want to Read", des: "wantToRead" },
    { name: "Read", des: "read" },
    { name: "None", des: "none" },
  ];
   getSearchEl=async(el)=>{
 let res= await BooksAPI.get(el.id)
return res
  }
  handleShelf= async(e)=>{
 await   this.props.updateShelfToListBook(e)
     
   }
  render() {
    return (
      <div className="app">
        {this.state.showSearch && (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">
                Close
              </Link>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title or author"
                  onChange={async (e) => {
                    let text = e.target.value.trim();
                    if (text && text !== "") {
                      let res = await BooksAPI.search(text);

                      if (res.error) {
                        this.setState({
                          researchReslt: [],
                          searchFocus: true,
                        });
                      } else {
                        this.setState({
                          researchReslt: res,
                          searchFocus: true,
                        });
                      }
                    } else if (!text || text === "") {
                      this.setState({
                        researchReslt: [],
                        searchFocus: false,
                      });
                    }
                  }}
                />

                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.state.researchReslt.length > 0 &&
                      this.state.researchReslt.map( (el, i) => (
                        <li key={i}>
                       
                          <Book singleBook={this.getSearchEl(el)} updateShelf={(e)=>this.handleShelf(e)} />
                        </li>
                      ))}
                    {this.state.researchReslt.length === 0 &&
                      this.state.searchFocus == true && (
                        <p>No result is found</p>
                      )}
                  </ol>
                </div>
              </div>
            </div>
          
          </div>
        )}
      </div>
    );
  }
}

export default Search;
