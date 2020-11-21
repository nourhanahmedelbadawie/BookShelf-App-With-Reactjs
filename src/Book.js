import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Book extends React.Component {
  async componentDidMount() {
    this.setState({
      book: await this.props.singleBook,
    });
  }
  state = {
    book: {},
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
        {this.state.book && (
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 192,
                  backgroundImage: `url("${
                    this.state.book.imageLinks
                      ? this.state.book.imageLinks.smallThumbnail
                      : ""
                  }")`,
                }}
              />
              <div className="book-shelf-changer">
                <select
                  defaultValue={
                    this.state.book.shelf ? this.state.book.shelf : "none"
                  }
                  onChange={
                    async (e) => {
                    await BooksAPI.update(
                      {
                        id: this.state.book.id,
                      },
                      e.target.value
                    );
                return  await this.props.updateShelf(e)


                }


              }
              >
                
                  {this.options.map((opt, index) => {
                    return (
                      <option
                        value={opt.des}
                        key={index}
                       selected={this.state.book.shelf==opt.des ? true :false }
                       
                      >
                        {opt.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="book-title">{this.state.book.title}</div>
            <div className="book-authors">
              {this.state.book.authors ? (
                this.state.book.authors.map((el, i) => (
                  <span key={i}>{el},</span>
                ))
              ) : (
                <span>No Authors</span>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Book;
