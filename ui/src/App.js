import React, { Component } from 'react';
import UserInput from './components/UserInput/UserInput'
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import GuestbookEntries from './components/GuestbookEntries/GuestbookEntries';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <UserInput />
        <GuestbookEntries />
      </MuiThemeProvider>
    );
  }
}

export default App;
