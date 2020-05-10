import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
import Header from './Header';
import '../App.css';


class App extends Component {
  render() {
      return (
        
      <div className="container">
          <div className="app-wrapper">
            <Header />
            <div className="main">
                <PostForm />
                <AllPost />
            </div>
          </div>
      </div>
      );
  }
}

export default App;