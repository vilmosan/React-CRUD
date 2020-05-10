import React, { Component } from 'react';
import BirthdayForm from './BirthdayForm';
import BirthdayList from './BirthdayList';
import Header from './Header';
import '../App.css';


class App extends Component {
  render() {
      return (
        
      <div className="container">
          <div className="app-wrapper">
            <Header />
            <div className="main">
                <BirthdayForm />
                <BirthdayList />
            </div>
          </div>
      </div>
      );
  }
}

export default App;