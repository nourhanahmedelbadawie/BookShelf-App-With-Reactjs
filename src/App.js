import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBook from './ListBooks'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Search from './search'

class BooksApp extends React.Component {

  async componentDidMount() {
    this.setState({
      books: await BooksAPI.getAll(),
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
  }
 handleShelfToListBook=async(e)=>{
  this.setState({
    books: await BooksAPI.getAll(),
  })
}
  render() {
    return (
      <div className="app">
     <Router> 
<Switch> 
    <Route exact path='/' component={() => <ListBook bookList={this.state.books} updateShelfToListBook={(e)=>this.handleShelfToListBook(e)} />} ></Route> 
    <Route exact path='/search' component={() => <Search updateShelfToListBook={(e)=>this.handleShelfToListBook(e)} />} ></Route> 

</Switch> 
      </Router>  
       
      </div>
    );
  }
}

export default BooksApp;
